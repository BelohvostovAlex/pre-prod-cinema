import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

import { AppPathesWithoutSlug } from "@constants/routes";
import { SliderDirectionVariant } from "@constants/slider";

import { MovieSliderItemProps } from "./interface";
import {
  MovieSliderImgHorizontal,
  MovieSliderImgVertical,
  MovieSliderItemWrapperHorizontal,
  MovieSliderItemWrapperVertical,
} from "./styles";

const MovieSliderItem: FunctionComponent<MovieSliderItemProps> = ({
  center,
  top,
  bot,
  src,
  id,
  direction,
  left,
  prevLeft,
  prevRight,
  right,
}) => {
  const navigate = useNavigate();

  const handleId = () => {
    navigate(`${AppPathesWithoutSlug.MOVIE}${id}`);
  };
  return direction === SliderDirectionVariant.HORIZONTAL ? (
    <MovieSliderItemWrapperHorizontal
      center={center}
      top={top}
      bot={bot}
      left={left}
      prevLeft={prevLeft}
      prevRight={prevRight}
      right={right}
      onClick={handleId}
    >
      <MovieSliderImgHorizontal
        src={src}
        center={center}
        prevLeft={prevLeft}
        prevRight={prevRight}
        left={left}
        right={right}
        alt={src}
        title={src}
      />
    </MovieSliderItemWrapperHorizontal>
  ) : (
    <MovieSliderItemWrapperVertical
      center={center}
      top={top}
      bot={bot}
      left={left}
      prevLeft={prevLeft}
      prevRight={prevRight}
      right={right}
      onClick={handleId}
    >
      <MovieSliderImgVertical src={src} alt={src} title={src} />
    </MovieSliderItemWrapperVertical>
  );
};

export default MovieSliderItem;
