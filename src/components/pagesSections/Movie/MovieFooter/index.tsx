import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import Button from "../../../UI/Buttons/Button";
import { TypographyVariant } from "../../../../constants/styles/typography";
import { ButtonVariants } from "../../../../constants/buttons";
import { useMovieText } from "../../../../pages/Movie/config/useMovieText";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useActions } from "../../../../hooks/useActionts";
import { AlertTypes } from "../../../../constants/alert";
import { AppPathes } from "../../../../constants/routes";
import { userChoiceSelector } from "../../../../store/slices/userChoiceSlice/selectors";

import {
  MovieFooterBookingInfo,
  MovieFooterBookingInfoSubText,
  MovieFooterBookingInfoText,
  MovieFooterWrapper,
} from "./styles";

const MovieFooter: FunctionComponent = () => {
  const { bookBtn, footerSeats, bookedSeats } = useMovieText();
  const navigate = useNavigate();
  const { chosenDay, chosenBadge, chosenMovie, chosenSeats } =
    useAppSelector(userChoiceSelector);
  const { setReserve, setIsAlertOpen, resetChoice, setTicket } = useActions();

  const seats = chosenSeats.find(
    ({ day, movie, time }) =>
      day === chosenDay && movie === chosenMovie && time === chosenBadge.time,
  )?.seats;
  const seatsAmount = seats?.length || 0;

  const handleBook = () => {
    if (seats) {
      setReserve({
        day: chosenDay,
        hallNumber: chosenBadge.hallNumber,
        seat: seats,
        time: chosenBadge.time,
        movie: chosenMovie,
      });
      setTicket({
        day: chosenDay,
        id: v4(),
        movie: chosenMovie,
        seatsAmount: chosenSeats.length,
        price: "100",
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
    }
  };
  return (
    <MovieFooterWrapper>
      <MovieFooterBookingInfo>
        <MovieFooterBookingInfoSubText>
          {seatsAmount} {footerSeats}
        </MovieFooterBookingInfoSubText>
        <MovieFooterBookingInfoText>45 $</MovieFooterBookingInfoText>
      </MovieFooterBookingInfo>
      <Button
        typography={TypographyVariant.poppins_b}
        variant={ButtonVariants.SECONDARY}
        height="50px"
        onClick={handleBook}
      >
        {bookBtn}
      </Button>
    </MovieFooterWrapper>
  );
};

export default MovieFooter;
