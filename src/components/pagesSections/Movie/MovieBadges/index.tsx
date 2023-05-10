import { FunctionComponent, useEffect, useState } from "react";
import { MovieHallBadge } from "cinema-ui-belohvostov";

import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useActions } from "../../../../hooks/useActionts";
import { halls } from "../../../../constants/booking";
import { Session } from "../../../../store/slices/cinemaSlice/interfaces";
import { cinemaSelector } from "../../../../store/slices/cinemaSlice/selectors";
import { userChoiceSelector } from "../../../../store/slices/userChoiceSlice/selectors";

import { MovieBadgesProps } from "./interfaces";
import { MovieHallBadgeWrapper } from "./styles";

const MovieBadges: FunctionComponent<MovieBadgesProps> = () => {
  const [badgeIndex, setBadgeIndex] = useState<number>(0);
  const [currMovieSession, setCurrMovieSession] = useState<Session[]>();
  const { chosenDay, chosenMovie } = useAppSelector(userChoiceSelector);
  const { cinema } = useAppSelector(cinemaSelector);
  const { setChosenMovieBadge } = useActions();

  const handleActiveBadge = (badgeIdx: number) => () => {
    setBadgeIndex(badgeIdx);
    setChosenMovieBadge(halls[badgeIdx]);
  };

  useEffect(() => {
    const movie = cinema.find(
      ({ movie: foundMovie }) => foundMovie === chosenMovie,
    );
    const movieInfo = movie?.movieInfoBookings;
    if (movieInfo) {
      const currMovieInfo = movieInfo.find(
        ({ day }) => day.date === chosenDay.date,
      );
      if (currMovieInfo) setCurrMovieSession(currMovieInfo.session);
      setChosenMovieBadge(halls[badgeIndex]);
    }
  }, [chosenDay]);

  return (
    <MovieHallBadgeWrapper>
      {currMovieSession &&
        currMovieSession.map(({ available, hallNumber, time }, i) => (
          <MovieHallBadge
            key={time}
            isActive={badgeIndex === i}
            hallNumber={hallNumber}
            time={time}
            available={available.length}
            onClick={handleActiveBadge(i)}
          />
        ))}
    </MovieHallBadgeWrapper>
  );
};

export default MovieBadges;
