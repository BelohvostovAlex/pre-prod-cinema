import { FunctionComponent } from "react";

import MovieScreenCell from "../MovieScreenCell";

import { MovieScreenRawProps } from "./interfaces";
import { MovieScreenRowWrapper } from "./styles";

const MovieScreenRaw: FunctionComponent<MovieScreenRawProps> = ({
  cellAmount,
}) => {
  return (
    <MovieScreenRowWrapper>
      {Array.from(Array(cellAmount).keys()).map((item) => (
        <MovieScreenCell
          key={item}
          seatNumber={item + 1}
          reserved={false}
          selected={false}
        />
      ))}
    </MovieScreenRowWrapper>
  );
};

export default MovieScreenRaw;
