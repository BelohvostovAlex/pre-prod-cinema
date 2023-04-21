import { FunctionComponent, useEffect, useState } from "react";

import MovieScreenCell from "../MovieScreenCell";
import { useAppSelector } from "../../../../../hooks/useAppSelector";
import { Session } from "../../../../../store/slices/cinemaSlice/interfaces";
import { cinemaSelector } from "../../../../../store/slices/cinemaSlice/selectors";
import { userChoiceSelector } from "../../../../../store/slices/userChoiceSlice/selectors";

import { MovieScreenRawProps } from "./interfaces";
import { MovieScreenRowWrapper } from "./styles";

const MovieScreenRaw: FunctionComponent<MovieScreenRawProps> = ({ seats }) => {
  const [currMovieSession, setCurrMovieSession] = useState<Session>();
  const { chosenDay, chosenMovie, chosenBadge } =
    useAppSelector(userChoiceSelector);
  const { cinema } = useAppSelector(cinemaSelector);

  useEffect(() => {
    const movie = cinema.find(
      ({ movie: foundMovie }) => foundMovie === chosenMovie,
    );
    const movieInfo = movie?.movieInfoBookings;
    if (movieInfo) {
      const currMovieInfo = movieInfo.find(({ day }) => day === chosenDay);

      if (currMovieInfo) {
        const currSession = currMovieInfo.session.find(
          ({ time }) => time === chosenBadge.time,
        );
        setCurrMovieSession(currSession);
      }
    }
  }, [chosenDay, chosenBadge]);

  return (
    <MovieScreenRowWrapper>
      {seats.map((item) => (
        <MovieScreenCell
          key={item}
          seatNumber={item}
          reserved={currMovieSession?.reserved.includes(item)}
        />
      ))}
    </MovieScreenRowWrapper>
  );
};

export default MovieScreenRaw;
