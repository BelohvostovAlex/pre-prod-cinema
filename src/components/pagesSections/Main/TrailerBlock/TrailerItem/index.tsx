import { FunctionComponent } from "react";

import RoundButton from "../../../../UI/Buttons/RoundButton";
import { ReactComponent as PlayIcon } from "../../../../../assets/svg/tools/play.svg";
import { usePortal } from "../../../../../hooks/portal/usePortal";
import trailer from "../../../../../assets/video/Inception.mp4";
import Modal from "../../../../Modal";
import VideoPlayer from "../../../../VideoPlayer";

import { TrailerItemImg } from "./styles";
import { TrailerItemProps } from "./interfaces";
import { extraStylesForRoundBtn } from "./config";

const TrailerItem: FunctionComponent<TrailerItemProps> = ({ image, title }) => {
  const [isPortalOpen, handlePortal] = usePortal();
  return (
    <>
      <TrailerItemImg src={image} alt={title} title={title} />
      <RoundButton onClick={handlePortal} extra={extraStylesForRoundBtn}>
        <PlayIcon />
      </RoundButton>
      <Modal isOpen={isPortalOpen} onClose={handlePortal}>
        <VideoPlayer src={trailer} />
      </Modal>
    </>
  );
};

export default TrailerItem;
