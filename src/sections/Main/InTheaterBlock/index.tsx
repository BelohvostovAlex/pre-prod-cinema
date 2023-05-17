import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Chip } from "cinema-ui-belohvostov";

import InTheaterBlockImageSkeleton from "@/cinema-components-lib/Skeletons/InTheaterBlockImageSkeleton";
import MovieInfoBlockSkeleton from "@/cinema-components-lib/Skeletons/MovieInfoBlockSkeleton";
import SliderSkeleton from "@/cinema-components-lib/Skeletons/SliderSkeleton";
import MovieSliderItem from "@components/MovieSliderItem";
import { AppPathesWithoutSlug } from "@constants/routes";
import { SliderDirectionVariant } from "@constants/slider";
import { TypographyVariant } from "@constants/styles/typography";
import Slider from "cinema-components-lib/Slider";
import SliderItems from "cinema-components-lib/Slider/SliderItems";

import MovieInfoBlock from "../MovieInfoBlock";

import { InTheaterBlockProps } from "./interfaces";
import {
  InTheaterBlockWrapper,
  InTheaterImg,
  InTheaterImgSkeletonContainer,
  InTheaterImgSkeletonWrapper,
  InTheaterImgWrapper,
  InTheaterSliderWrapper,
  InTheterImgTitle,
  SliderBox,
  TagsWrapper,
} from "./styles";

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
            <InTheaterImgSkeletonContainer>
              <InTheaterBlockImageSkeleton />
            </InTheaterImgSkeletonContainer>
            <SliderSkeleton />
          </InTheaterImgSkeletonWrapper>
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
            />
          </SliderBox>
        </InTheaterSliderWrapper>
      )}
    </InTheaterBlockWrapper>
  );
};

export default InTheaterBlock;
