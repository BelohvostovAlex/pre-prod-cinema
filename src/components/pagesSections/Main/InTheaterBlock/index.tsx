import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";

import MovieInfoBlock from "../MovieInfoBlock";
import Slider from "../../../Slider";
import Chip from "../../../Chip";
import { TypographyVariant } from "../../../../constants/styles/typography";
import MovieInfoBlockSkeleton from "../../../Skeletons/MovieInfoBlock";
import InTheaterBlockImageSkeleton from "../../../Skeletons/InTheaterBlock/InTheaterBlockImageSkeleton";
import SliderSkeleton from "../../../Skeletons/InTheaterBlock/SliderSkeleton";
import { AppPathesWithoutSlug } from "../../../../constants/routes";

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
  data,
  isLoading,
}) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(0);

  const handleNavigateToMovie = () => {
    navigate(`${AppPathesWithoutSlug.MOVIE}${data[index].id}`);
  };
  return (
    <InTheaterBlockWrapper>
      {isLoading ? (
        <MovieInfoBlockSkeleton />
      ) : (
        <MovieInfoBlock
          typography={TypographyVariant.inria_l_ital}
          text={data[index].plot}
          title={data[index].title}
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
          <InTheaterImgWrapper onClick={handleNavigateToMovie}>
            <InTheaterImg src={data[index].image} />
            <InTheterImgTitle>{data[index].title}</InTheterImgTitle>
            <TagsWrapper>
              {data &&
                data[index]?.genres
                  .split(",")
                  .map((item) => <Chip text={item} key={item} />)}
            </TagsWrapper>
          </InTheaterImgWrapper>
          <SliderBox>
            <Slider data={data} index={index} setIndex={setIndex} />
          </SliderBox>
        </>
      )}
    </InTheaterBlockWrapper>
  );
};

export default InTheaterBlock;
