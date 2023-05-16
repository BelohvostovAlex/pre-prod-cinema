import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePalette } from "react-palette";
import { Divider } from "cinema-ui-belohvostov";

import MoviePageLoader from "cinema-components-lib/Loaders/MoviePageLoader";

import { moviesImdbNew } from "../../constants/movies";
import { AppPathesWithoutSlug } from "../../constants/routes";
import { reviewsData } from "../../constants/movies/reviews";
import MovieBooking from "../../sections/Movie/MovieBooking";
import { useAppSelector } from "../../hooks/useAppSelector";
import { isAuthSelector } from "../../store/slices/userSlice/selectors";
import { useActions } from "../../hooks/useActionts";
import { AlertTypes } from "../../constants/alert";
import MovieScreen from "../../sections/Movie/MovieScreen";
import MovieInfo from "../../sections/Movie/MovieInfo";
import MovieReview from "../../sections/Movie/MovieReview";
import MovieTrailer from "../../sections/Movie/MovieTrailer";
import MovieHeader from "../../sections/Movie/MovieHeader";
import MovieBadges from "../../sections/Movie/MovieBadges";
import MovieFooter from "../../sections/Movie/MovieFooter";
import { createDefaultCinemaInfo } from "../../store/slices/cinemaSlice/config.ts";
// import { moviesSelector } from "../../store/slices/movieSlice/selectors";

import {
  MovieLayout,
  MovieNoReviewTitle,
  MovieReviewWrapper,
  MovieWrapper,
} from "./styles";
import { useMovieText } from "./hooks/useMovieText";
// import { useGetMoviesReview } from "./config/useGetMovieReviews";
import { handleNextMovieIndex } from "./config/handleNextMovieIndex";

const Movie: FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { noReviewsTitle, notAuthBookBtn } = useMovieText();
  const [isBookSectionVisible, setIsBookSectionVisible] =
    useState<boolean>(false);
  const isAuth = useAppSelector(isAuthSelector);
  const { setIsAlertOpen, setCinemaMovie, setChosenMovie } = useActions();
  // const movies = useAppSelector(moviesSelector);
  // const movieReviews = useGetMoviesReview(id!);

  const movie = moviesImdbNew.find((item) => item.id === id);
  const nextMovie = handleNextMovieIndex(moviesImdbNew, id!);
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
          {/* {movieReviews?.items &&
          movieReviews.items
            .slice(0, 3)
            .map(({ username, content, reviewLink }) => (
              <Review author={username} text={content} key={reviewLink} />
            ))} */}

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
