import { FunctionComponent } from "react";

import { MoviePageLoaderWrapper } from "./styles";
import "./index.css";

const MoviePageLoader: FunctionComponent = () => {
  return (
    <MoviePageLoaderWrapper>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </MoviePageLoaderWrapper>
  );
};

export default MoviePageLoader;
