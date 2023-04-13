import { FunctionComponent } from "react";

import RoundButton from "../../../../UI/Buttons/RoundButton";
import { ReactComponent as PlayIcon } from "../../../../../assets/svg/tools/play.svg";
import { useOpenPortal } from "../../../../../hooks/portal/useOpenPortal";
import { PortalVariant } from "../../../../../constants/portal";

import { TrailerItemImg } from "./styles";
import { TrailerItemProps } from "./interfaces";
import { extraStylesForRoundBtn } from "./config";

const TrailerItem: FunctionComponent<TrailerItemProps> = ({ image, title }) => {
  const openTrailerPortal = useOpenPortal(PortalVariant.VIDEO_TRAILER);
  return (
    <>
      <TrailerItemImg src={image} alt={title} />
      <RoundButton onClick={openTrailerPortal} extra={extraStylesForRoundBtn}>
        <PlayIcon />
      </RoundButton>
    </>
  );
};

export default TrailerItem;
