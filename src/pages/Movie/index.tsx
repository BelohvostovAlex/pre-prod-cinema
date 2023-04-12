import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePalette } from "react-palette";

import MoviePageLoader from "../../components/Loader/MoviePageLoader";
import SecondaryButton from "../../components/UI/Buttons/SecondaryButton";
import Button from "../../components/UI/Buttons/Button";
import { TypographyVariant } from "../../constants/styles/typography";
import { moviesImdbNew } from "../../constants/movies";
import { AppPathesWithoutSlug } from "../../constants/routes";
import { ButtonVariants } from "../../constants/buttons";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/tools/right.svg";
import { ReactComponent as StarIcon } from "../../assets/svg/tools/Star.svg";

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
  MovieRating,
  MovieTitle,
  MovieTrailerTitle,
  MovieTrailerWrapper,
  MovieWrapper,
} from "./styles";
import { useMovieText } from "./config/useMovieText";
import { buttonWidth, secondaryButtonExtraStyles } from "./config";

const Movie: FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    actors,
    author,
    bookBtn,
    country,
    genre,
    moveToNextMovieBtn,
    releaseYear,
    watchTrailerTitle,
  } = useMovieText();
  const movie = moviesImdbNew.find((item) => item.id === id);
  const movieIndex = moviesImdbNew.findIndex((item) => item.id === id);
  const nextMovie = moviesImdbNew[movieIndex + 1];

  const { data, loading } = usePalette(movie!.image);

  const navigateToNextMovie = () => {
    if (nextMovie) {
      navigate(`${AppPathesWithoutSlug.MOVIE}${nextMovie.id}`);
    }
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
      </MovieTrailerWrapper>
      <MovieLayout
        primaryColor={data.darkVibrant}
        secondaryColor={data.lightVibrant}
      />
    </MovieWrapper>
  );
};

export default Movie;
