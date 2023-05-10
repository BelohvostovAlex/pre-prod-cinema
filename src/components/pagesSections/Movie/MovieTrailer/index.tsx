import { FunctionComponent } from "react";

import { useMovieText } from "../../../../pages/Movie/config/useMovieText";
import TrailerItem from "../../Main/TrailerBlock/TrailerItem";

import { MovieTrailerProps } from "./interfaces";
import {
  MovieTrailerItem,
  MovieTrailerTitle,
  MovieTrailerWrapper,
} from "./styles";

const MovieTrailer: FunctionComponent<MovieTrailerProps> = ({
  image,
  title,
}) => {
  const { watchTrailerTitle } = useMovieText();
  return (
    <MovieTrailerWrapper>
      <MovieTrailerTitle>{watchTrailerTitle}</MovieTrailerTitle>
      <MovieTrailerItem>
        <TrailerItem image={image} title={title} />
      </MovieTrailerItem>
    </MovieTrailerWrapper>
  );
};

export default MovieTrailer;
