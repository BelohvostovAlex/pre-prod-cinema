import { FunctionComponent } from "react";

import { useMovieText } from "@pages/Movie/hooks/useMovieText";
import SecondaryButton from "@ui/Buttons/SecondaryButton";
import { TypographyVariant } from "@constants/styles/typography";
import { ReactComponent as ArrowRightIcon } from "@assets/svg/tools/right.svg";

import { MovieHeaderProps } from "./interfaces";
import { secondaryButtonExtraStyles } from "./config";
import { MovieBtnNextWrapper, MovieHeaderWrapper, MovieTitle } from "./styles";

const MovieHeader: FunctionComponent<MovieHeaderProps> = ({
  title,
  onClick,
}) => {
  const { moveToNextMovieBtn } = useMovieText();
  return (
    <MovieHeaderWrapper>
      <MovieTitle>{title}</MovieTitle>
      <MovieBtnNextWrapper onClick={onClick}>
        <SecondaryButton
          text={moveToNextMovieBtn}
          typography={TypographyVariant.poppins_sb}
          extra={secondaryButtonExtraStyles}
        />
        <ArrowRightIcon title={moveToNextMovieBtn} />
      </MovieBtnNextWrapper>
    </MovieHeaderWrapper>
  );
};

export default MovieHeader;
