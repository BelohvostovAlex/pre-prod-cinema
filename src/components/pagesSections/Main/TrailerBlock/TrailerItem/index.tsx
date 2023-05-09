import { FunctionComponent } from "react";

import { ReactComponent as PlayIcon } from "@assets/svg/tools/play.svg";
import RoundButton from "@components/UI/Buttons/RoundButton";
import { PortalVariant } from "@constants/portal";
import { useOpenPortal } from "@hooks/portal/useOpenPortal";

import { extraStylesForRoundBtn } from "./config";
import { TrailerItemProps } from "./interfaces";
import { TrailerItemImg } from "./styles";

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
