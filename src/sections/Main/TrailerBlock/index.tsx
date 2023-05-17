import { FunctionComponent } from "react";

import MovieInfoBlockSkeleton from "@/cinema-components-lib/Skeletons/MovieInfoBlockSkeleton";
import TrailerBlockSkeleton from "@/cinema-components-lib/Skeletons/TrailerBlockSkeleton";
import { TypographyVariant } from "@constants/styles/typography";

import MovieInfoBlock from "../MovieInfoBlock";

import { TrailerBlockProps } from "./interfaces";
import {
  TrailerBlockWrapper,
  TrailerItemLayout,
  TrailerItemWrapper,
} from "./styles";
import TrailerItem from "./TrailerItem";

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
      <TrailerItemWrapper>
        {isLoading ? (
          <TrailerBlockSkeleton />
        ) : (
          <>
            <TrailerItemLayout />
            <TrailerItem image={movie?.image} title={movie?.title} />
          </>
        )}
      </TrailerItemWrapper>
    </TrailerBlockWrapper>
  );
};

export default TrailerBlock;
