import { FunctionComponent } from "react";

import { ReactComponent as StarIcon } from "@assets/svg/tools/Star.svg";
import Button from "@components/UI/Buttons/Button";
import { ButtonVariants } from "@constants/buttons";
import { TypographyVariant } from "@constants/styles/typography";
import { useMovieText } from "@pages/Movie/config/useMovieText";

import { buttonWidth } from "./config";
import { MovieInfoProps } from "./interfaces";
import {
  MovieBookWrapper,
  MovieDescription,
  MovieImg,
  MovieInfoItem,
  MovieInfoItemSpan,
  MovieInfoSection,
  MovieInfoWrapper,
  MovieRating,
} from "./styles";

const MovieInfo: FunctionComponent<MovieInfoProps> = ({ movie, onClick }) => {
  const { stars, year, image, genres, directors, imDbRating, plot } = movie;
  const { actors, author, bookBtn, country, genre, releaseYear } =
    useMovieText();
  return (
    <>
      <MovieInfoSection>
        <MovieImg src={image} />
        <MovieInfoWrapper>
          <MovieInfoItem>
            {releaseYear}: <MovieInfoItemSpan>{year}</MovieInfoItemSpan>
          </MovieInfoItem>
          <MovieInfoItem>
            {country}: <MovieInfoItemSpan>USA</MovieInfoItemSpan>
          </MovieInfoItem>
          <MovieInfoItem>
            {genre}:{" "}
            {genres.split(",").map((item) => (
              <MovieInfoItemSpan key={item}>{item} /</MovieInfoItemSpan>
            ))}
          </MovieInfoItem>
          <MovieInfoItem>
            {author}: <MovieInfoItemSpan>{directors}</MovieInfoItemSpan>
          </MovieInfoItem>
          <MovieInfoItem>
            {actors}: <MovieInfoItemSpan>{stars}</MovieInfoItemSpan>
          </MovieInfoItem>
          <MovieBookWrapper>
            <Button
              typography={TypographyVariant.poppins_l}
              variant={ButtonVariants.SECONDARY}
              width={buttonWidth}
              onClick={onClick}
            >
              {bookBtn}
            </Button>
            <MovieRating>
              {imDbRating}
              <StarIcon />
            </MovieRating>
          </MovieBookWrapper>
        </MovieInfoWrapper>
      </MovieInfoSection>
      <MovieDescription>{plot}</MovieDescription>
    </>
  );
};

export default MovieInfo;
