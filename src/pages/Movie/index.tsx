import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Divider } from "cinema-ui-belohvostov";
import { usePalette } from "react-palette";

import { createDefaultCinemaInfo } from "@/store/slices/cinemaSlice/config";
import { AlertTypes } from "@constants/alert";
import { moviesImdbNew } from "@constants/movies";
import { reviewsData } from "@constants/movies/reviews";
import { AppPathesWithoutSlug } from "@constants/routes";
import { useActions } from "@hooks/useActionts";
import { useAppSelector } from "@hooks/useAppSelector";
import MovieBadges from "@sections/Movie/MovieBadges";
import MovieBooking from "@sections/Movie/MovieBooking";
import MovieFooter from "@sections/Movie/MovieFooter";
import MovieHeader from "@sections/Movie/MovieHeader";
import MovieInfo from "@sections/Movie/MovieInfo";
import MovieReview from "@sections/Movie/MovieReview";
import MovieScreen from "@sections/Movie/MovieScreen";
import MovieTrailer from "@sections/Movie/MovieTrailer";
import { moviesSelector } from "@store/slices/movieSlice/selectors";
import { isAuthSelector } from "@store/slices/userSlice/selectors";
import MoviePageLoader from "cinema-components-lib/Loaders/MoviePageLoader";

import { handleNextMovieIndex } from "./config/handleNextMovieIndex";
import { useMovieText } from "./hooks/useMovieText";
import {
  MovieLayout,
  MovieNoReviewTitle,
  MovieReviewWrapper,
  MovieWrapper,
} from "./styles";

const Movie: FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { noReviewsTitle, notAuthBookBtn } = useMovieText();
  const [isBookSectionVisible, setIsBookSectionVisible] =
    useState<boolean>(false);
  const isAuth = useAppSelector(isAuthSelector);
  const { setIsAlertOpen, setCinemaMovie, setChosenMovie } = useActions();
  const movies = useAppSelector(moviesSelector);

  const movie = moviesImdbNew.find((item) => item.id === id);
  const nextMovie = handleNextMovieIndex(movies, id!);
  const { data, loading } = usePalette(movie?.image);

  const navigateToNextMovie = () => {
    setIsBookSectionVisible(false);
    navigate(`${AppPathesWithoutSlug.MOVIE}${nextMovie.id}`);
  };

  const handleBookBtn = () => {
    if (isAuth && movie) {
      setIsBookSectionVisible(true);
      setCinemaMovie(createDefaultCinemaInfo(movie.title));
      setChosenMovie(movie.title);
    } else {
      setIsAlertOpen({
        isOpen: true,
        text: notAuthBookBtn,
        type: AlertTypes.ERROR,
      });
    }
  };

  useEffect(() => {
    if (!isAuth) {
      setIsBookSectionVisible(false);
    }
  }, [isAuth]);

  if (loading || !movie) return <MoviePageLoader />;

  return (
    <MovieWrapper>
      <MovieHeader title={movie.title} onClick={navigateToNextMovie} />
      <MovieInfo movie={movie} onClick={handleBookBtn} />
      {isBookSectionVisible && (
        <>
          <Divider />
          <MovieBooking />
          <MovieBadges />
          <MovieScreen />
          <MovieFooter />
          <Divider />
        </>
      )}
      <MovieTrailer image={movie.image} title={movie.title} />
      {reviewsData?.items?.length > 0 ? (
        <MovieReviewWrapper>
          {reviewsData.items
            .slice(0, 3)
            .map(({ username, content, reviewLink }) => (
              <MovieReview author={username} text={content} key={reviewLink} />
            ))}
        </MovieReviewWrapper>
      ) : (
        <MovieNoReviewTitle>{noReviewsTitle}</MovieNoReviewTitle>
      )}

      <MovieLayout
        primaryColor={data.darkVibrant}
        secondaryColor={data.lightVibrant}
      />
    </MovieWrapper>
  );
};

export default Movie;
