import { FunctionComponent } from "react";

import {
  MovieInfoBlockText,
  MovieInfoBlockTitle,
  MovieInfoBlockWrapper,
} from "./styles";
import { MovieInfoBlockProps } from "./interfaces";

const MovieInfoBlock: FunctionComponent<MovieInfoBlockProps> = ({
  text,
  typography,
  title,
  extra,
}) => {
  return (
    <MovieInfoBlockWrapper typography={typography} extra={extra}>
      <MovieInfoBlockTitle>{title}</MovieInfoBlockTitle>
      <MovieInfoBlockText>{text}</MovieInfoBlockText>
    </MovieInfoBlockWrapper>
  );
};

export default MovieInfoBlock;
