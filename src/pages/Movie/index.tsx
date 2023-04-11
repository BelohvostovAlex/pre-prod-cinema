import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import { MovieWrapper } from "./styles";

const Movie: FunctionComponent = () => {
  const { id } = useParams();

  return <MovieWrapper>Movie:{id}</MovieWrapper>;
};

export default Movie;
