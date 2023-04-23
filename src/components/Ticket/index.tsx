import { FunctionComponent } from "react";

import Divider from "../UI/Divider";
import { Colors } from "../../constants/styles/colors";
import { ReactComponent as RatingIcon } from "../../assets/svg/tools/Star.svg";
import { ReactComponent as TicketIcon } from "../../assets/svg/movie/ticket.svg";
import { moviesImdbNew } from "../../constants/movies";

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

const Ticket: FunctionComponent<TicketProps> = ({
  movie,
  price,
  date,
  id,
  seatsAmount,
  time,
  cancelBooking,
}) => {
  // const movies = useAppSelector((state) => state.movies.data);
  const currMovie = moviesImdbNew.find((mov) => mov.title === movie);
  if (!currMovie) return null;
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
        <TicketDate>Date: {date}</TicketDate>
        <TicketDate>Time: {time}</TicketDate>
        <TicketId>
          <TicketIcon /> TC{id.slice(0, 8)}
        </TicketId>
        <Divider color={Colors.WHITE} height="1px" width="90%" />
        <TicketBottom>
          <TicketSeatsWrapper>
            <TicketSeats>{seatsAmount} seats</TicketSeats>
            <TicketPrice>48 $</TicketPrice>
          </TicketSeatsWrapper>
        </TicketBottom>
      </TicketContent>
    </TicketWrapper>
  );
};

export default Ticket;
