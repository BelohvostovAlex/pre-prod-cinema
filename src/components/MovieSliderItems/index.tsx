import { FunctionComponent } from "react";

import MovieSliderItem from "./MovieSliderItem";
import { MovieSliderItemsProps } from "./interfaces";

const MovieSliderItems: FunctionComponent<MovieSliderItemsProps> = ({
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
      {data?.map(({ id, image }, idx) => {
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
    </>
  );
};

export default MovieSliderItems;
