import { FunctionComponent } from "react";

import { MovieSliderItemProps } from "./interface";
import { MovieSliderImg, MovieSliderItemWrapper } from "./styles";

const MovieSliderItem: FunctionComponent<MovieSliderItemProps> = ({
  center,
  top,
  bot,
  src,
  id,
}) => {
  const handleId = () => {
    console.log(id);
  };
  return (
    <MovieSliderItemWrapper
      center={center}
      top={top}
      bot={bot}
      onClick={handleId}
    >
      <MovieSliderImg src={src} />
    </MovieSliderItemWrapper>
  );
};

export default MovieSliderItem;
