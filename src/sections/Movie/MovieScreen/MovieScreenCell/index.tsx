import { FunctionComponent } from "react";

import { useActions } from "../../../../hooks/useActionts";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { userChoiceSelector } from "../../../../store/slices/userChoiceSlice/selectors";

import { MovieScreenCellWrapper } from "./styles";
import { MovieScreenCellProps } from "./interfaces";

const MovieScreenCell: FunctionComponent<MovieScreenCellProps> = ({
  seatNumber,
  reserved,
}) => {
  const { chosenBadge, chosenDay, chosenMovie, chosenSeats } =
    useAppSelector(userChoiceSelector);
  const { setChosenSeats } = useActions();
  const handleCellClick = () => {
    if (!reserved) {
      setChosenSeats({
        day: chosenDay,
        movie: chosenMovie,
        time: chosenBadge.time,
        seat: seatNumber,
      });
    }
  };
  const selectedSeats = chosenSeats.find(
    (item) =>
      item.day.date === chosenDay.date &&
      item.movie === chosenMovie &&
      item.time === chosenBadge.time,
  );
  const isSelected = selectedSeats?.seats.includes(seatNumber);

  return (
    <MovieScreenCellWrapper
      reserved={reserved}
      selected={isSelected}
      onClick={handleCellClick}
    />
  );
};

export default MovieScreenCell;
