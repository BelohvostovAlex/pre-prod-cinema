import { FunctionComponent } from "react";

import MovieInfoBlock from "../MovieInfoBlock";
import { TypographyVariant } from "../../../../constants/styles/typography";
import MovieInfoBlockSkeleton from "../../../Skeletons/MovieInfoBlock";
import TrailerBlockSkeleton from "../../../Skeletons/TrailerBlock";

import {
  TrailerBlockWrapper,
  TrailerItemLayout,
  TrailerItemWrapper,
} from "./styles";
import TrailerItem from "./TrailerItem";
import { TrailerBlockProps } from "./interfaces";

const TrailerBlock: FunctionComponent<TrailerBlockProps> = ({
  movie,
  isLoading,
}) => {
  return (
    <TrailerBlockWrapper>
      {isLoading ? (
        <MovieInfoBlockSkeleton />
      ) : (
        <MovieInfoBlock
          typography={TypographyVariant.nunito_l}
          text={movie?.plot}
          title={movie?.title}
        />
      )}
      {isLoading ? (
        <TrailerBlockSkeleton />
      ) : (
        <TrailerItemWrapper>
          <TrailerItemLayout />
          <TrailerItem image={movie?.image} title={movie?.title} />
        </TrailerItemWrapper>
      )}
    </TrailerBlockWrapper>
  );
};

export default TrailerBlock;