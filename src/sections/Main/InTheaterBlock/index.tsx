import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chip } from "cinema-ui-belohvostov";

import Slider from "cinema-components-lib/Slider";
import SliderItems from "cinema-components-lib/Slider/SliderItems";
import MovieSliderItem from "@components/MovieSliderItem";
import { TypographyVariant } from "@constants/styles/typography";
import MovieInfoBlockSkeleton from "@components/Skeletons/MovieInfoBlock";
import InTheaterBlockImageSkeleton from "@components/Skeletons/InTheaterBlock/InTheaterBlockImageSkeleton";
import SliderSkeleton from "@components/Skeletons/InTheaterBlock/SliderSkeleton";
import { SliderDirectionVariant } from "@constants/slider";
import { AppPathesWithoutSlug } from "@constants/routes";

import MovieInfoBlock from "../MovieInfoBlock";

import {
  InTheaterBlockWrapper,
  InTheaterImg,
  InTheaterImgSkeletonWrapper,
  InTheaterImgWrapper,
  InTheaterSliderWrapper,
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

  const { plot, title, image, genres } = data[index];
  return (
    <InTheaterBlockWrapper>
      {isLoading ? (
        <MovieInfoBlockSkeleton />
      ) : (
        <MovieInfoBlock
          typography={TypographyVariant.inria_l_ital}
          text={plot}
          title={title}
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
        <InTheaterSliderWrapper>
          <InTheaterImgWrapper onClick={handleNavigateToMovie}>
            <InTheaterImg src={image} title={title} alt={title} />
            <InTheterImgTitle>{title}</InTheterImgTitle>
            <TagsWrapper>
              {genres &&
                genres
                  .split(",")
                  .map((item) => <Chip text={item} key={item} />)}
            </TagsWrapper>
          </InTheaterImgWrapper>
          <SliderBox>
            <Slider
              data={data}
              index={index}
              setIndex={setIndex}
              children={
                <SliderItems
                  data={data}
                  index={index}
                  renderItem={(
                    item,
                    top,
                    center,
                    bot,
                    left,
                    right,
                    prevLeft,
                    prevRight,
                  ) => (
                    <MovieSliderItem
                      id={item.id}
                      src={item.image}
                      top={top!}
                      center={center!}
                      bot={bot!}
                      left={left!}
                      right={right!}
                      prevLeft={prevLeft!}
                      prevRight={prevRight!}
                      key={item.id}
                      direction={SliderDirectionVariant.VERTICAL}
                    />
                  )}
                />
              }
            ></Slider>
          </SliderBox>
        </InTheaterSliderWrapper>
      )}
    </InTheaterBlockWrapper>
  );
};

export default InTheaterBlock;