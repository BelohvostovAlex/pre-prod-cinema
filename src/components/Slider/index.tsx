import { FunctionComponent, KeyboardEvent, WheelEvent } from "react";

import { ReactComponent as DownIcon } from "../../assets/svg/tools/down.svg";
import { ReactComponent as UpIcon } from "../../assets/svg/tools/up.svg";
import { SliderDirectionVariant } from "../../constants/slider";
import { KeyButtonVariant } from "../../constants/keyboard";
import MovieSliderItem from "../MovieSliderItem";

import { SliderControls, SliderItems, SliderWrapper } from "./styles";
import { SliderProps } from "./interfaces";

const Slider: FunctionComponent<SliderProps> = ({
  direction = SliderDirectionVariant.VERTICAL,
  data,
  index,
  setIndex,
}) => {
  const dataLength = data.length;

  const mod = (n: number, m: number) => {
    const result = n % m;

    return result >= 0 ? result : result + m;
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((index - 1) % dataLength);
    } else {
      setIndex(dataLength - 1);
    }
  };

  const nextSlide = () => {
    if (index > dataLength + 1) {
      setIndex(0);
    } else {
      setIndex((index + 1) % dataLength);
    }
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.key === KeyButtonVariant.ARROW_DOWN) {
      nextSlide();
    }
    if (e.key === KeyButtonVariant.ARROW_UP) {
      prevSlide();
    }
  };

  const onMouseWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      nextSlide();
    }
    if (e.deltaY < 0) {
      prevSlide();
    }
  };
  return (
    <SliderWrapper
      onKeyDown={keyDownHandler}
      tabIndex={0}
      onWheel={onMouseWheel}
    >
      <SliderItems direction={direction}>
        {data.map(({ id, image }, idx) => {
          const indexTop = mod(index - 1, dataLength);
          const indexDown = mod(index + 1, dataLength);

          return (
            <MovieSliderItem
              key={id}
              src={image}
              center={idx === index}
              top={idx === indexTop}
              bot={idx === indexDown}
              id={id}
            />
          );
        })}
      </SliderItems>
      <SliderControls>
        <UpIcon onClick={prevSlide} />
        <DownIcon onClick={nextSlide} />
      </SliderControls>
    </SliderWrapper>
  );
};

export default Slider;
