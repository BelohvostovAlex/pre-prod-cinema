import { FunctionComponent } from "react";

import RoundButton from "../../../UI/Buttons/RoundButton";
import { useOpenPortal } from "../../../../hooks/portal/useOpenPortal";
import { PortalVariant } from "../../../../constants/portal";
import { ReactComponent as PlayIcon } from "../../../../assets/svg/tools/play.svg";
import MovieInfoBlock from "../MovieInfoBlock";
import { TypographyVariant } from "../../../../constants/styles/typography";
import MovieInfoBlockSkeleton from "../../../Skeletons/MovieInfoBlock";
import TrailerBlockSkeleton from "../../../Skeletons/TrailerBlock";

import {
  TrailerBlockWrapper,
  TrailerItemImg,
  TrailerItemLayout,
  TrailerItemWrapper,
} from "./styles";
import { TrailerBlockProps } from "./interfaces";
import { extraStylesForRoundBtn } from "./config";

const TrailerBlock: FunctionComponent<TrailerBlockProps> = ({
  movie,
  isLoading,
}) => {
  const openTrailerPortal = useOpenPortal(PortalVariant.VIDEO_TRAILER);
  return (
    <TrailerBlockWrapper>
      {isLoading ? (
        <MovieInfoBlockSkeleton />
      ) : (
        <MovieInfoBlock
          typography={TypographyVariant.nunito_l}
          text={movie.plot}
          title={movie.title}
        />
      )}
      {isLoading ? (
        <TrailerBlockSkeleton />
      ) : (
        <TrailerItemWrapper>
          <TrailerItemLayout />
          <TrailerItemImg src={movie.image} alt={movie.title} />
          <RoundButton
            onClick={openTrailerPortal}
            extra={extraStylesForRoundBtn}
          >
            <PlayIcon />
          </RoundButton>
        </TrailerItemWrapper>
      )}
    </TrailerBlockWrapper>
  );
};

export default TrailerBlock;
