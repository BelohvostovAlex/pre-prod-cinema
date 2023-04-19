import { FunctionComponent } from "react";

import MovieScreenCell from "../MovieScreenCell";

import { MovieScreenRawProps } from "./interfaces";
import { MovieScreenRowWrapper } from "./styles";

const MovieScreenRaw: FunctionComponent<MovieScreenRawProps> = ({ seats }) => {
  return (
    <MovieScreenRowWrapper>
      {seats.map((item) => (
        <MovieScreenCell
          key={item}
          seatNumber={item}
          reserved={false}
          selected={false}
        />
      ))}
    </MovieScreenRowWrapper>
  );
};

export default MovieScreenRaw;
