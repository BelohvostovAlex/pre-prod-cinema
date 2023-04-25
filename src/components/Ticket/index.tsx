import { FunctionComponent } from "react";

import Divider from "../UI/Divider";
import Button from "../UI/Buttons/Button";
import { Colors } from "../../constants/styles/colors";
import { ReactComponent as RatingIcon } from "../../assets/svg/tools/Star.svg";
import { ReactComponent as TicketIcon } from "../../assets/svg/movie/ticket.svg";
import { ReactComponent as CancelIcon } from "../../assets/svg/movie/cancel.svg";
import { moviesImdbNew } from "../../constants/movies";
import { useBookingText } from "../../pages/Booking/config/useBookingText";
import { useActions } from "../../hooks/useActionts";
import { TypographyVariant } from "../../constants/styles/typography";

import { TicketProps } from "./interfaces";
import {
  TicketBottom,
  TicketContent,
  TicketDate,
  TicketHeader,
  TicketId,
  TicketImg,
  TicketPrice,
  TicketRating,
  TicketSeats,
  TicketSeatsWrapper,
  TicketTitle,
  TicketWrapper,
} from "./styles";
import { handleSeatsText } from "./config/handleSeatsText";
import { dividerExtraStyles } from "./config";

const Ticket: FunctionComponent<TicketProps> = ({
  movie,
  price,
  date,
  id,
  seatsAmount,
  time,
  isUpcoming,
}) => {
  // const movies = useAppSelector((state) => state.movies.data);
  const { cancelBtn, dateText, timeText, seatText, seatsText } =
    useBookingText();
  const { removeTicket } = useActions();
  const currMovie = moviesImdbNew.find((mov) => mov.title === movie);
  if (!currMovie) return null;

  const cancelBooking = () => {
    removeTicket(id);
  };
  return (
    <TicketWrapper>
      <TicketImg src={currMovie.image} />
      <TicketContent>
        <TicketHeader>
          <TicketTitle>{movie}</TicketTitle>
          <TicketRating>
            {currMovie.imDbRating} <RatingIcon />
          </TicketRating>
        </TicketHeader>
        <TicketDate>
          {dateText}: {date}
        </TicketDate>
        <TicketDate>
          {timeText}: {time}
        </TicketDate>
        <TicketId>
          <TicketIcon /> TC{id.slice(0, 8)}
        </TicketId>
        <Divider
          color={Colors.WHITE}
          height={dividerExtraStyles.height}
          width={dividerExtraStyles.width}
        />
        <TicketBottom>
          <TicketSeatsWrapper>
            <TicketSeats>
              {seatsAmount} {handleSeatsText(seatsAmount, seatText, seatsText)}
            </TicketSeats>
            <TicketPrice>{price} $</TicketPrice>
          </TicketSeatsWrapper>
          {isUpcoming && (
            <Button
              typography={TypographyVariant.poppins_l}
              color={Colors.BLACK}
              backgroundColor={Colors.ORANGE}
              onClick={cancelBooking}
            >
              {cancelBtn}
              <CancelIcon />
            </Button>
          )}
        </TicketBottom>
      </TicketContent>
    </TicketWrapper>
  );
};

export default Ticket;
