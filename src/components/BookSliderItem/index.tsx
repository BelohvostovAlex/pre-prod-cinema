import { FunctionComponent } from "react";

import { SliderDirectionVariant } from "../../constants/slider";

import { BookSliderItemProps } from "./interfaces";
import {
  BookSliderItemMonth,
  BookSliderItemSquare,
  BookSliderItemWrapperHorizontal,
  BookSliderItemWrapperVertical,
} from "./styles";

const BookSliderItem: FunctionComponent<BookSliderItemProps> = ({
  center,
  item,
  month,
  left,
  right,
  prevLeft,
  prevRight,
  direction,
  bot,
  top,
}) => {
  return direction === SliderDirectionVariant.HORIZONTAL ? (
    <BookSliderItemWrapperHorizontal
      center={center}
      left={left}
      right={right}
      prevLeft={prevLeft}
      prevRight={prevRight}
      direction={direction}
    >
      <BookSliderItemSquare
        center={center}
        left={left}
        right={right}
        prevLeft={prevLeft}
        prevRight={prevRight}
        direction={direction}
      >
        {item}
        <BookSliderItemMonth>{month}</BookSliderItemMonth>
      </BookSliderItemSquare>
    </BookSliderItemWrapperHorizontal>
  ) : (
    <BookSliderItemWrapperVertical
      center={center}
      bot={bot}
      left={left}
      right={right}
      prevLeft={prevLeft}
      prevRight={prevRight}
      direction={direction}
      top={top}
    >
      <BookSliderItemSquare
        center={center}
        left={left}
        right={right}
        prevLeft={prevLeft}
        prevRight={prevRight}
        direction={direction}
      >
        {item}
      </BookSliderItemSquare>
    </BookSliderItemWrapperVertical>
  );
};

export default BookSliderItem;
