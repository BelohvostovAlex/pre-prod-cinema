import { FunctionComponent } from "react";

import { rows } from "@constants/booking";

import { useMovieScreenText } from "./config/useMovieScreenText";
import MovieScreenRaw from "./MovieScreenRow";
import {
  MovieScreenCellExample,
  MovieScreenFooter,
  MovieScreenFooterItem,
  MovieScreenFooterRow,
  MovieScreenHead,
  MovieScreenHeadRow,
  MovieScreenSeatsWrapper,
  MovieScreenTitle,
  MovieScreenWrapper,
} from "./styles";

const MovieScreen: FunctionComponent = () => {
  const { screenTitle, available, reserved, selected } = useMovieScreenText();
  return (
    <MovieScreenWrapper>
      <MovieScreenHead>
        <MovieScreenHeadRow>
          <MovieScreenTitle>{screenTitle}</MovieScreenTitle>
        </MovieScreenHeadRow>
      </MovieScreenHead>
      <MovieScreenSeatsWrapper>
        {rows.map(({ seats }, i) => (
          <MovieScreenRaw key={i} seats={seats} />
        ))}
      </MovieScreenSeatsWrapper>
      <MovieScreenFooter>
        <MovieScreenFooterRow>
          <MovieScreenFooterItem>
            <MovieScreenCellExample /> {available}
          </MovieScreenFooterItem>
          <MovieScreenFooterItem>
            <MovieScreenCellExample reserved /> {reserved}
          </MovieScreenFooterItem>
          <MovieScreenFooterItem>
            <MovieScreenCellExample selected /> {selected}
          </MovieScreenFooterItem>
        </MovieScreenFooterRow>
      </MovieScreenFooter>
    </MovieScreenWrapper>
  );
};

export default MovieScreen;
