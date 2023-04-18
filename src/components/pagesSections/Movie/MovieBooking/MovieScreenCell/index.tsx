import { FunctionComponent } from "react";

import { MovieScreenCellWrapper } from "./styles";
import { MovieScreenCellProps } from "./interfaces";

const MovieScreenCell: FunctionComponent<MovieScreenCellProps> = ({
  seatNumber,
  reserved,
  selected,
}) => {
  return (
    <MovieScreenCellWrapper reserved={reserved} selected={selected}>
      {seatNumber}
    </MovieScreenCellWrapper>
  );
};

export default MovieScreenCell;
