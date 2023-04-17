import { FunctionComponent } from "react";

import { useMovieText } from "../../../../pages/Movie/config/useMovieText";

import { MovieBookingTitle, MovieBookingWrapper } from "./styles";

const MovieBooking: FunctionComponent = () => {
  const { bookingSectionTitle } = useMovieText();
  return (
    <MovieBookingWrapper>
      <MovieBookingTitle>{bookingSectionTitle}</MovieBookingTitle>
    </MovieBookingWrapper>
  );
};

export default MovieBooking;
