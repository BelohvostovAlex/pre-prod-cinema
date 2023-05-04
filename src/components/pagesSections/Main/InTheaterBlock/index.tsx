import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chip, Slider, SliderItems } from "cinema-ui-belohvostov";

import MovieInfoBlock from "../MovieInfoBlock";
import MovieSliderItem from "../../../MovieSliderItem";
import { TypographyVariant } from "../../../../constants/styles/typography";
import MovieInfoBlockSkeleton from "../../../Skeletons/MovieInfoBlock";
import InTheaterBlockImageSkeleton from "../../../Skeletons/InTheaterBlock/InTheaterBlockImageSkeleton";
import SliderSkeleton from "../../../Skeletons/InTheaterBlock/SliderSkeleton";
import { SliderDirectionVariant } from "../../../../constants/slider";
import { AppPathesWithoutSlug } from "../../../../constants/routes";

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
  return (
    <InTheaterBlockWrapper>
      {isLoading ? (
        <MovieInfoBlockSkeleton />
      ) : (
        <MovieInfoBlock
          typography={TypographyVariant.inria_l_ital}
          text={data[index]?.plot}
          title={data[index]?.title}
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
            <InTheaterImg src={data[index]?.image} />
            <InTheterImgTitle>{data[index]?.title}</InTheterImgTitle>
            <TagsWrapper>
              {data &&
                data[index]?.genres
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
