import { FunctionComponent } from "react";

import PauseIcon from "@assets/svg/tools/pause.svg";
import PlayIcon from "@assets/svg/tools/play.svg";
import FullScreenIcon from "@assets/svg/video/full-screen.svg";
import MuteIcon from "@assets/svg/video/mute.svg";
import SpeedLeftIcon from "@assets/svg/video/speed-left.svg";
import SpeedRightIcon from "@assets/svg/video/speed-right.svg";
import VolumeIcon from "@assets/svg/video/volume.svg";
import { InputTypes } from "@components/Input/interfaces";

import { progressRangeMax, progressRangeMin, speedOptions } from "./config";
import { ControlsProps } from "./interfaces";
import {
  BottomControls,
  ControlsTitle,
  ControlsWrapper,
  MiddleControls,
  Progress,
  Velocity,
  VelocityOption,
  VideoTime,
} from "./styles";

const Controls: FunctionComponent<ControlsProps> = ({
  isPlaying,
  isMuted,
  title,
  progress,
  speed,
  elapsedTime,
  totalDuration,
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
        <SpeedRightIcon onClick={revert} data-cy="revert" />
        {isPlaying ? (
          <PauseIcon onClick={handlePlay} data-cy="pause" />
        ) : (
          <PlayIcon onClick={handlePlay} data-cy="play" />
        )}
        <SpeedLeftIcon onClick={fastForward} data-cy="fastForward" />
      </MiddleControls>
      <BottomControls>
        {isPlaying ? (
          <PauseIcon onClick={handlePlay} />
        ) : (
          <PlayIcon onClick={handlePlay} />
        )}
        <VideoTime>{elapsedTime}</VideoTime>
        <Progress
          type={InputTypes.RANGE}
          min={progressRangeMin}
          max={progressRangeMax}
          value={progress}
          onChange={handleProgress}
        />
        <VideoTime>{totalDuration}</VideoTime>
        {isMuted ? (
          <MuteIcon onClick={handleMute} data-cy="mute" />
        ) : (
          <VolumeIcon onClick={handleMute} data-cy="mute" />
        )}
        <Velocity value={speed} onChange={handleSpeed}>
          {speedOptions.map((item) => (
            <VelocityOption value={item} key={item}>
              {item}x
            </VelocityOption>
          ))}
        </Velocity>
        <FullScreenIcon onClick={handleFullScreen} data-cy="fullscreen" />
      </BottomControls>
    </ControlsWrapper>
  );
};

export default Controls;
