import { FunctionComponent } from "react";

import { ReactComponent as ArrowRightIcon } from "@assets/svg/tools/right.svg";
import SecondaryButton from "@components/UI/Buttons/SecondaryButton";
import { TypographyVariant } from "@constants/styles/typography";
import { useMovieText } from "@pages/Movie/config/useMovieText";

import { secondaryButtonExtraStyles } from "./config";
import { MovieHeaderProps } from "./interfaces";
import { MovieBtnNextWrapper, MovieHeaderWrapper, MovieTitle } from "./styles";

const MovieHeader: FunctionComponent<MovieHeaderProps> = ({
  title,
  onClick,
}) => {
  const { moveToNextMovieBtn } = useMovieText();
  return (
    <MovieHeaderWrapper>
      <MovieTitle>{title}</MovieTitle>
      <MovieBtnNextWrapper>
        <SecondaryButton
          onClick={onClick}
          text={moveToNextMovieBtn}
          typography={TypographyVariant.poppins_sb}
          extra={secondaryButtonExtraStyles}
        />
        <ArrowRightIcon />
      </MovieBtnNextWrapper>
    </MovieHeaderWrapper>
  );
};

export default MovieHeader;
