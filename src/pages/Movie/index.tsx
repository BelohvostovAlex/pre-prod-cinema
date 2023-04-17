import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePalette } from "react-palette";

import MoviePageLoader from "../../components/Loader/MoviePageLoader";
import SecondaryButton from "../../components/UI/Buttons/SecondaryButton";
import Button from "../../components/UI/Buttons/Button";
import TrailerItem from "../../components/pagesSections/Main/TrailerBlock/TrailerItem";
import Review from "../../components/pagesSections/Movie/Review";
import { TypographyVariant } from "../../constants/styles/typography";
import { moviesImdbNew } from "../../constants/movies";
import { AppPathesWithoutSlug } from "../../constants/routes";
import { ButtonVariants } from "../../constants/buttons";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/tools/right.svg";
import { ReactComponent as StarIcon } from "../../assets/svg/tools/Star.svg";
import { reviewsData } from "../../constants/movies/reviews";
// import { useAppSelector } from "../../hooks/useAppSelector";
// import { moviesSelector } from "../../store/slices/movieSlice/selectors";

import {
  MovieBookWrapper,
  MovieBtnNextWrapper,
  MovieDescription,
  MovieHeaderWrapper,
  MovieImg,
  MovieInfo,
  MovieInfoItem,
  MovieInfoItemSpan,
  MovieInfoWrapper,
  MovieLayout,
  MovieNoReviewTitle,
  MovieRating,
  MovieReviewWrapper,
  MovieTitle,
  MovieTrailerItem,
  MovieTrailerTitle,
  MovieTrailerWrapper,
  MovieWrapper,
} from "./styles";
import { useMovieText } from "./config/useMovieText";
import { buttonWidth, secondaryButtonExtraStyles } from "./config";
// import { useGetMoviesReview } from "./config/useGetMovieReviews";
import { handleNextMovieIndex } from "./config/handleNextMovieIndex";

const Movie: FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const movies = useAppSelector(moviesSelector);
  // const movieReviews = useGetMoviesReview(id!);
  const {
    actors,
    author,
    bookBtn,
    country,
    genre,
    moveToNextMovieBtn,
    releaseYear,
    watchTrailerTitle,
    noReviewsTitle,
  } = useMovieText();

  const movie = moviesImdbNew.find((item) => item.id === id);
  const nextMovie = handleNextMovieIndex(moviesImdbNew, id!);

  const { data, loading } = usePalette(movie?.image);

  const navigateToNextMovie = () => {
    navigate(`${AppPathesWithoutSlug.MOVIE}${nextMovie.id}`);
  };

  if (loading) return <MoviePageLoader />;
  if (!movie) return <MoviePageLoader />; //доделать

  return (
    <MovieWrapper>
      <MovieHeaderWrapper>
        <MovieTitle>{movie?.title}</MovieTitle>
        <MovieBtnNextWrapper>
          <SecondaryButton
            onClick={navigateToNextMovie}
            text={moveToNextMovieBtn}
            typography={TypographyVariant.poppins_sb}
            extra={secondaryButtonExtraStyles}
          />
          <ArrowRightIcon />
        </MovieBtnNextWrapper>
      </MovieHeaderWrapper>
      <MovieInfo>
        <MovieImg src={movie?.image} />
        <MovieInfoWrapper>
          <MovieInfoItem>
            {releaseYear}: <MovieInfoItemSpan>{movie?.year}</MovieInfoItemSpan>
          </MovieInfoItem>
          <MovieInfoItem>
            {country}: <MovieInfoItemSpan>USA</MovieInfoItemSpan>
          </MovieInfoItem>
          <MovieInfoItem>
            {genre}:{" "}
            {movie?.genres.split(",").map((item) => (
              <MovieInfoItemSpan key={item}>{item} /</MovieInfoItemSpan>
            ))}
          </MovieInfoItem>
          <MovieInfoItem>
            {author}: <MovieInfoItemSpan>{movie?.directors}</MovieInfoItemSpan>
          </MovieInfoItem>
          <MovieInfoItem>
            {actors}: <MovieInfoItemSpan>{movie?.stars}</MovieInfoItemSpan>
          </MovieInfoItem>
          <MovieBookWrapper>
            <Button
              typography={TypographyVariant.poppins_l}
              variant={ButtonVariants.SECONDARY}
              width={buttonWidth}
            >
              {bookBtn}
            </Button>
            <MovieRating>
              {movie?.imDbRating}
              <StarIcon />
            </MovieRating>
          </MovieBookWrapper>
        </MovieInfoWrapper>
      </MovieInfo>
      <MovieDescription>{movie?.plot}</MovieDescription>
      <MovieTrailerWrapper>
        <MovieTrailerTitle>{watchTrailerTitle}</MovieTrailerTitle>
        <MovieTrailerItem>
          <TrailerItem image={movie?.image} title={movie?.title} />
        </MovieTrailerItem>
      </MovieTrailerWrapper>
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
