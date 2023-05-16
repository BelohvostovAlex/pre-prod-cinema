import { KeyboardEvent, ReactNode, WheelEvent, useEffect, useRef } from "react";

import { ReactComponent as DownIcon } from "../../assets/svg/tools/down.svg";
import { ReactComponent as UpIcon } from "../../assets/svg/tools/up.svg";
import { SliderDirectionVariant } from "../../constants/slider";
import { KeyButtonVariant } from "../../constants/keyboard";

import { SliderControls, SliderItemsWrapper, SliderWrapper } from "./styles";
import { SliderProps } from "./interfaces";
import { svgTitle } from "./config";

const Slider = <T,>({
  direction = SliderDirectionVariant.VERTICAL,
  index,
  setIndex,
  children,
  data,
}: SliderProps<T> & { children?: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("wheel", (e) => e.preventDefault());

      return ref.current.addEventListener("wheel", (e) => e.preventDefault());
    }
  }, []);
  return (
    <SliderWrapper
      onKeyDown={keyDownHandler}
      tabIndex={0}
      onWheel={onMouseWheel}
      direction={direction}
      ref={ref}
    >
      {direction === SliderDirectionVariant.HORIZONTAL && (
        <>
          <UpIcon onClick={prevSlide} title={svgTitle.prev} />
          <SliderItemsWrapper direction={direction}>
            {children}
          </SliderItemsWrapper>
          <DownIcon onClick={nextSlide} title={svgTitle.next} />
        </>
      )}
      {direction === SliderDirectionVariant.VERTICAL && (
        <>
          <SliderItemsWrapper direction={direction}>
            {children}
          </SliderItemsWrapper>
          <SliderControls>
            <UpIcon onClick={prevSlide} title={svgTitle.prev} />
            <DownIcon onClick={nextSlide} title={svgTitle.next} />
          </SliderControls>
        </>
      )}
    </SliderWrapper>
  );
};

export default Slider;
