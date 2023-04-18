import { FunctionComponent } from "react";

import { ReactComponent as SeatIcon } from "../../../../../assets/svg/movie/seat.svg";

import {
  MovieHallBadgeNumber,
  MovieHallBadgeSeats,
  MovieHallBadgeTime,
  MovieHallBadgeWrapper,
} from "./styles";
import { MovieHallBadgeProps } from "./interfaces";
import { useMovieHallBadgeText } from "./config/useMovieHallBadgeText";

const MovieHallBadge: FunctionComponent<MovieHallBadgeProps> = ({
  isActive,
  time,
  hallNumber,
}) => {
  const { movieBadgeHallTitle, availableSeats } = useMovieHallBadgeText();
  return (
    <MovieHallBadgeWrapper isActive={isActive}>
      <MovieHallBadgeTime>{time}</MovieHallBadgeTime>
      <MovieHallBadgeNumber>
        {movieBadgeHallTitle}: {hallNumber}
      </MovieHallBadgeNumber>
      <MovieHallBadgeSeats>
        <SeatIcon />
        25 {availableSeats}
      </MovieHallBadgeSeats>
    </MovieHallBadgeWrapper>
  );
};

export default MovieHallBadge;
