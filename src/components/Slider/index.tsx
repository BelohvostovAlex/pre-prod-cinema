import { KeyboardEvent, ReactNode, WheelEvent } from "react";

import { ReactComponent as DownIcon } from "../../assets/svg/tools/down.svg";
import { ReactComponent as UpIcon } from "../../assets/svg/tools/up.svg";
import { SliderDirectionVariant } from "../../constants/slider";
import { KeyButtonVariant } from "../../constants/keyboard";

import { SliderControls, SliderItemsWrapper, SliderWrapper } from "./styles";
import { SliderProps } from "./interfaces";

const Slider = <T,>({
  direction = SliderDirectionVariant.VERTICAL,
  index,
  setIndex,
  children,
  data,
}: SliderProps<T> & { children?: ReactNode }) => {
  const dataLength = data.length;

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
    if (direction === SliderDirectionVariant.VERTICAL) {
      if (e.key === KeyButtonVariant.ARROW_DOWN) {
        nextSlide();
      }
      if (e.key === KeyButtonVariant.ARROW_UP) {
        prevSlide();
      }
    }

    if (direction === SliderDirectionVariant.HORIZONTAL) {
      if (e.key === KeyButtonVariant.ARROW_RIGHT) {
        nextSlide();
      }
      if (e.key === KeyButtonVariant.ARROW_LEFT) {
        prevSlide();
      }
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
      direction={direction}
    >
      {direction === SliderDirectionVariant.HORIZONTAL && (
        <>
          <UpIcon onClick={prevSlide} />
          <SliderItemsWrapper direction={direction}>
            {children}
          </SliderItemsWrapper>
          <DownIcon onClick={nextSlide} />
        </>
      )}
      {direction === SliderDirectionVariant.VERTICAL && (
        <>
          <SliderItemsWrapper direction={direction}>
            {children}
          </SliderItemsWrapper>
          <SliderControls>
            <UpIcon onClick={prevSlide} />
            <DownIcon onClick={nextSlide} />
          </SliderControls>
        </>
      )}
    </SliderWrapper>
  );
};

export default Slider;
