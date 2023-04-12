import { FunctionComponent } from "react";

import MovieInfoBlock from "../MovieInfoBlock";
import Slider from "../../../Slider";
import Chip from "../../../Chip";
import { TypographyVariant } from "../../../../constants/styles/typography";
import MovieInfoBlockSkeleton from "../../../Skeletons/MovieInfoBlock";
import InTheaterBlockImageSkeleton from "../../../Skeletons/InTheaterBlock/InTheaterBlockImageSkeleton";
import SliderSkeleton from "../../../Skeletons/InTheaterBlock/SliderSkeleton";

import {
  InTheaterBlockWrapper,
  InTheaterImg,
  InTheaterImgSkeletonWrapper,
  InTheaterImgWrapper,
  InTheterImgTitle,
  SliderBox,
  TagsWrapper,
} from "./styles";
import { InTheaterBlockProps } from "./interfaces";

const InTheaterBlock: FunctionComponent<InTheaterBlockProps> = ({
  movie,
  data,
  isLoading,
}) => {
  return (
    <InTheaterBlockWrapper>
      {isLoading ? (
        <MovieInfoBlockSkeleton />
      ) : (
        <MovieInfoBlock
          typography={TypographyVariant.inria_l_ital}
          text={movie.plot}
          title={movie.title}
        />
      )}
      {isLoading ? (
        <>
          <InTheaterImgSkeletonWrapper>
            <InTheaterBlockImageSkeleton />
          </InTheaterImgSkeletonWrapper>
          <SliderSkeleton />
        </>
      ) : (
        <>
          <InTheaterImgWrapper>
            <InTheaterImg src={movie.image} />
            <InTheterImgTitle>{movie.title}</InTheterImgTitle>
            <TagsWrapper>
              {movie?.genres &&
                movie.genres
                  .split(",")
                  .map((item) => <Chip text={item} key={item} />)}
            </TagsWrapper>
          </InTheaterImgWrapper>
          <SliderBox>
            <Slider data={data} />
          </SliderBox>
        </>
      )}
    </InTheaterBlockWrapper>
  );
};

export default InTheaterBlock;
