import { FunctionComponent } from "react";

import RoundButton from "../../../UI/Buttons/RoundButton";
import { useOpenPortal } from "../../../../hooks/portal/useOpenPortal";
import { PortalVariant } from "../../../../constants/portal";
import { ReactComponent as PlayIcon } from "../../../../assets/svg/tools/play.svg";
import MovieInfoBlock from "../MovieInfoBlock";
import { TypographyVariant } from "../../../../constants/styles/typography";

import {
  TrailerBlockWrapper,
  TrailerItemImg,
  TrailerItemLayout,
  TrailerItemWrapper,
} from "./styles";
import { TrailerBlockProps } from "./interfaces";
import { extraStylesForRoundBtn } from "./config";

const TrailerBlock: FunctionComponent<TrailerBlockProps> = ({
  img,
  text,
  title,
}) => {
  const openTrailerPortal = useOpenPortal(PortalVariant.VIDEO_TRAILER);
  return (
    <TrailerBlockWrapper>
      <MovieInfoBlock
        typography={TypographyVariant.nunito_l}
        text={text}
        title={title}
      />
      <TrailerItemWrapper>
        <TrailerItemLayout />
        <TrailerItemImg src={img} alt={title} />
        <RoundButton onClick={openTrailerPortal} extra={extraStylesForRoundBtn}>
          <PlayIcon />
        </RoundButton>
      </TrailerItemWrapper>
    </TrailerBlockWrapper>
  );
};

export default TrailerBlock;
