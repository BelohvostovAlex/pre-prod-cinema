import { FunctionComponent } from "react";

import { ReactComponent as SeatIcon } from "@assets/svg/movie/seat.svg";

import { useMovieHallBadgeText } from "./hooks/useMovieHallBadgeText";
import { MovieHallBadgeProps } from "./interfaces";
import {
  MovieHallBadgeNumber,
  MovieHallBadgeSeats,
  MovieHallBadgeTime,
  MovieHallBadgeWrapper,
} from "./styles";

const MovieHallBadge: FunctionComponent<MovieHallBadgeProps> = ({
  isActive,
  time,
  hallNumber,
  available,
  onClick,
}) => {
  const { movieBadgeHallTitle, availableSeatsText } = useMovieHallBadgeText();

  return (
    <MovieHallBadgeWrapper isActive={isActive} onClick={onClick}>
      <MovieHallBadgeTime>{time}</MovieHallBadgeTime>
      <MovieHallBadgeNumber>
        {movieBadgeHallTitle}: {hallNumber}
      </MovieHallBadgeNumber>
      <MovieHallBadgeSeats>
        <SeatIcon />
        {available} {availableSeatsText}
      </MovieHallBadgeSeats>
    </MovieHallBadgeWrapper>
  );
};

export default MovieHallBadge;
