import { FunctionComponent } from "react";

import { MovieInfoBlockProps } from "./interfaces";
import {
  MovieInfoBlockText,
  MovieInfoBlockTitle,
  MovieInfoBlockWrapper,
} from "./styles";

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
