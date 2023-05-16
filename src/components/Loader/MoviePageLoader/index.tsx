import { FunctionComponent } from "react";

import { MovieLoader, MovieLoaderItem, MoviePageLoaderWrapper } from "./styles";

const MoviePageLoader: FunctionComponent = () => {
  return (
    <MoviePageLoaderWrapper>
      <MovieLoader>
        <MovieLoaderItem />
        <MovieLoaderItem />
      </MovieLoader>
    </MoviePageLoaderWrapper>
  );
};

export default MoviePageLoader;
