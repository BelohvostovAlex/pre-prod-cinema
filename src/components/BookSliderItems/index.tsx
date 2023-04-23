import { FunctionComponent } from "react";

import { BookSliderItemsProps } from "./interfaces";
import BookSliderItem from "./BookSliderItem";

const BookSliderItems: FunctionComponent<BookSliderItemsProps> = ({
  data,
  index,
}) => {
  const dataLength = data.length;

  const mod = (n: number, m: number) => {
    const result = n % m;

    return result >= 0 ? result : result + m;
  };
  return (
    <>
      {data?.map(({ date }, idx) => {
        const indexLeft = mod(index - 1, dataLength);
        const indexRight = mod(index + 1, dataLength);
        const indexPrevLeft = mod(index - 2, dataLength);
        const indexPrevRight = mod(index + 2, dataLength);

        return (
          <BookSliderItem
            key={date}
            center={idx === index}
            left={idx === indexLeft}
            right={idx === indexRight}
            prevLeft={idx === indexPrevLeft}
            prevRight={idx === indexPrevRight}
            item={date}
          />
        );
      })}
    </>
  );
};

export default BookSliderItems;
