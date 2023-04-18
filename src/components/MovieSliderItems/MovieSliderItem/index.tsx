import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

import { AppPathesWithoutSlug } from "../../../constants/routes";

import { MovieSliderItemProps } from "./interface";
import { MovieSliderImg, MovieSliderItemWrapper } from "./styles";

const MovieSliderItem: FunctionComponent<MovieSliderItemProps> = ({
  center,
  top,
  bot,
  src,
  id,
}) => {
  const navigate = useNavigate();

  const handleId = () => {
    navigate(`${AppPathesWithoutSlug.MOVIE}${id}`);
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
