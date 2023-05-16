import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import Button from "../../../UI/Buttons/Button";
import { TypographyVariant } from "../../../../constants/styles/typography";
import { ButtonVariants } from "../../../../constants/buttons";
import { useMovieText } from "../../../../pages/Movie/hooks/useMovieText";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useActions } from "../../../../hooks/useActionts";
import { AlertTypes } from "../../../../constants/alert";
import { AppPathes } from "../../../../constants/routes";
import { userChoiceSelector } from "../../../../store/slices/userChoiceSlice/selectors";
import { handleTicketPrice } from "../../../../helpers/handleTicketPrice";
import { userIdSelector } from "../../../../store/slices/userSlice/selectors";

import {
  MovieFooterBookingInfo,
  MovieFooterBookingInfoSubText,
  MovieFooterBookingInfoText,
  MovieFooterWrapper,
} from "./styles";
import { buttonHeight } from "./config";

const MovieFooter: FunctionComponent = () => {
  const { bookBtn, footerSeats, bookedSeats, cantBookEmpty } = useMovieText();
  const navigate = useNavigate();
  const id = useAppSelector(userIdSelector);
  const { chosenDay, chosenBadge, chosenMovie, chosenSeats } =
    useAppSelector(userChoiceSelector);
  const { setReserve, setIsAlertOpen, resetChoice, setTicket } = useActions();

  const foundChosenSeats = chosenSeats.find(
    ({ day, movie, time }) =>
      day.date === chosenDay.date &&
      movie === chosenMovie &&
      time === chosenBadge.time,
  );
  const seatsAmount = foundChosenSeats?.seats?.length || 0;

  const handleBook = () => {
    if (foundChosenSeats?.seats && foundChosenSeats.seats.length > 0) {
      setReserve({
        day: chosenDay,
        hallNumber: chosenBadge.hallNumber,
        seat: foundChosenSeats?.seats,
        time: chosenBadge.time,
        movie: chosenMovie,
      });
      setTicket({
        day: chosenDay,
        id: v4(),
        userId: id,
        movie: chosenMovie,
        seatsAmount: seatsAmount,
        price: handleTicketPrice(chosenDay) * seatsAmount,
        time: chosenBadge.time,
        isCanceled: false,
      });
      resetChoice();
      setIsAlertOpen({
        isOpen: true,
        text: bookedSeats,
        type: AlertTypes.SUCCESS,
      });
      navigate(AppPathes.BOOKING);
    } else {
      setIsAlertOpen({
        isOpen: true,
        text: cantBookEmpty,
        type: AlertTypes.ERROR,
      });
    }
  };
  return (
    <MovieFooterWrapper>
      <MovieFooterBookingInfo>
        <MovieFooterBookingInfoSubText>
          {seatsAmount} {footerSeats}
        </MovieFooterBookingInfoSubText>
        <MovieFooterBookingInfoText>
          {(foundChosenSeats?.price && foundChosenSeats.price) || 0} $
        </MovieFooterBookingInfoText>
      </MovieFooterBookingInfo>
      <Button
        typography={TypographyVariant.poppins_b}
        variant={ButtonVariants.SECONDARY}
        height={buttonHeight}
        onClick={handleBook}
      >
        {bookBtn}
      </Button>
    </MovieFooterWrapper>
  );
};

export default MovieFooter;
