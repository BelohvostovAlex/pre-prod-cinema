import { FunctionComponent, useEffect, useState } from "react";
import { Divider, Review } from "cinema-ui-belohvostov";
import { useNavigate, useParams } from "react-router-dom";

import MoviePageLoader from "@components/Loader/MoviePageLoader";
import MovieBadges from "@components/pagesSections/Movie/MovieBadges";
import MovieBooking from "@components/pagesSections/Movie/MovieBooking";
import MovieFooter from "@components/pagesSections/Movie/MovieFooter";
import MovieHeader from "@components/pagesSections/Movie/MovieHeader";
import MovieInfo from "@components/pagesSections/Movie/MovieInfo";
import MovieScreen from "@components/pagesSections/Movie/MovieScreen";
import MovieTrailer from "@components/pagesSections/Movie/MovieTrailer";
import { AlertTypes } from "@constants/alert";
import { moviesImdbNew } from "@constants/movies";
import { reviewsData } from "@constants/movies/reviews";
import { AppPathesWithoutSlug } from "@constants/routes";
import { useActions } from "@hooks/useActionts";
import { useAppSelector } from "@hooks/useAppSelector";
import { createDefaultCinemaInfo } from "@store/slices/cinemaSlice/config";
import { isAuthSelector } from "@store/slices/userSlice/selectors";
import { usePalette } from "react-palette";

// import { moviesSelector } from "@store/slices/movieSlice/selectors";

// import { useGetMoviesReview } from "./config/useGetMovieReviews";
import { handleNextMovieIndex } from "./config/handleNextMovieIndex";
import { useMovieText } from "./config/useMovieText";
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
              <Review author={username} text={content} key={reviewLink} />
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
