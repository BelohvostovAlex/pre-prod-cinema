import { FunctionComponent } from "react";

import PlayIcon from "@assets/svg/tools/play.svg";
import trailer from "@assets/video/Inception.mp4";
import Modal from "@components/Modal";
import VideoPlayer from "@components/VideoPlayer";
import { usePortal } from "@hooks/portal/usePortal";
import RoundButton from "@ui/Buttons/RoundButton";

import { extraStylesForRoundBtn } from "./config";
import { TrailerItemProps } from "./interfaces";
import { TrailerItemImg } from "./styles";

const TrailerItem: FunctionComponent<TrailerItemProps> = ({ image, title }) => {
  const [isPortalOpen, handlePortal] = usePortal();
  return (
    <>
      <TrailerItemImg
        src={image}
        alt={title}
        title={title}
        data-cy="trailer-img"
      />
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
