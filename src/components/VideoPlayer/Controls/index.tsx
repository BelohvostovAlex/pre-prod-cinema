import { FunctionComponent } from "react";

import { ReactComponent as FullScreenIcon } from "../../../assets/svg/video/full-screen.svg";
import { ReactComponent as MuteIcon } from "../../../assets/svg/video/mute.svg";
import { ReactComponent as SpeedLeftIcon } from "../../../assets/svg/video/speed-left.svg";
import { ReactComponent as SpeedRightIcon } from "../../../assets/svg/video/speed-right.svg";
import { ReactComponent as VolumeIcon } from "../../../assets/svg/video/volume.svg";
import { ReactComponent as PlayIcon } from "../../../assets/svg/tools/play.svg";
import { ReactComponent as PauseIcon } from "../../../assets/svg/tools/pause.svg";
import { InputTypes } from "../../Input/interfaces";

import {
  BottomControls,
  ControlsTitle,
  ControlsWrapper,
  MiddleControls,
  Progress,
  Velocity,
  VelocityOption,
} from "./styles";
import { ControlsProps } from "./interfaces";
import { progressRangeMax, progressRangeMin, speedOptions } from "./config";

const Controls: FunctionComponent<ControlsProps> = ({
  isPlaying,
  isMuted,
  title,
  progress,
  speed,
  handlePlay,
  handleMute,
  handleProgress,
  fastForward,
  handleSpeed,
  revert,
  handleFullScreen,
}) => {
  return (
    <ControlsWrapper>
      <ControlsTitle>{title}</ControlsTitle>
      <MiddleControls>
        <SpeedRightIcon onClick={revert} />
        {isPlaying ? (
          <PauseIcon onClick={handlePlay} />
        ) : (
          <PlayIcon onClick={handlePlay} />
        )}
        <SpeedLeftIcon onClick={fastForward} />
      </MiddleControls>
      <BottomControls>
        {isPlaying ? (
          <PauseIcon onClick={handlePlay} />
        ) : (
          <PlayIcon onClick={handlePlay} />
        )}
        <Progress
          type={InputTypes.RANGE}
          min={progressRangeMin}
          max={progressRangeMax}
          value={progress}
          onChange={handleProgress}
        />
        {isMuted ? (
          <MuteIcon onClick={handleMute} />
        ) : (
          <VolumeIcon onClick={handleMute} />
        )}
        <Velocity value={speed} onChange={handleSpeed}>
          {speedOptions.map((item) => (
            <VelocityOption value={item} key={item}>
              {item}x
            </VelocityOption>
          ))}
        </Velocity>
        <FullScreenIcon onClick={handleFullScreen} />
      </BottomControls>
    </ControlsWrapper>
  );
};

export default Controls;
