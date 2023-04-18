import { FunctionComponent } from "react";

import { BookSliderItemProps } from "./interfaces";
import { BookSliderItemSquare, BookSliderItemWrapper } from "./styles";

const BookSliderItem: FunctionComponent<BookSliderItemProps> = ({
  center,
  item,
  left,
  right,
  prevLeft,
  prevRight,
}) => {
  return (
    <BookSliderItemWrapper
      center={center}
      left={left}
      right={right}
      prevLeft={prevLeft}
      prevRight={prevRight}
    >
      <BookSliderItemSquare
        center={center}
        left={left}
        right={right}
        prevLeft={prevLeft}
        prevRight={prevRight}
      >
        {item}
      </BookSliderItemSquare>
    </BookSliderItemWrapper>
  );
};

export default BookSliderItem;
