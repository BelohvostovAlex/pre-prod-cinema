import { ChangeEvent, KeyboardEvent, RefObject, useEffect } from "react";

import { KeyButtonVariant } from "@constants/keyboard";
import { useActions } from "@hooks/useActionts";

import {
  maxPlaybackRate,
  minPlaybackRateStep,
  rewindSeconds,
  videoStartTime,
} from "../config";
import { formatVideoTime } from "../config/formatVideoTime";

export const useVideoControl = (
  ref: RefObject<HTMLVideoElement>,
  isPlaying: boolean,
) => {
  const { current } = ref;
  const { togglePlay, setProgress, toggleMute, setSpeed, toggleFullscreen } =
    useActions();

  const elapsedTime = current?.currentTime
    ? formatVideoTime(current!.currentTime)
    : videoStartTime;
  const totalDuration = current?.duration
    ? formatVideoTime(current?.duration)
    : videoStartTime;

  useEffect(() => {
    if (current) {
      isPlaying ? current.play() : current.pause();
    }
  }, [isPlaying, ref]);

  const handlePlay = async () => {
    togglePlay();
  };

  const handleOnTimeUpdate = () => {
    if (current) {
      const progress = (current.currentTime / current.duration) * 100;
      setProgress(progress);
      if (current.currentTime === current.duration) {
        togglePlay();
        setProgress(0);
      }
    }
  };

  const handleVideoProgress = (e: ChangeEvent<HTMLInputElement>) => {
    if (current) {
      const { value } = e.target;
      const manualChange = Number(value);
      current.currentTime = (current.duration / 100) * manualChange;
      setProgress(manualChange);
    }
  };

  const handleVideoSpeed = (e: ChangeEvent<HTMLSelectElement>) => {
    if (current) {
      const { value } = e.target;
      const speed = Number(value);
      current.playbackRate = speed;
      setSpeed(speed);
    }
  };

  const handleVideoSpeedByAngles = (e: KeyboardEvent<HTMLDivElement>) => {
    if (current) {
      const { key } = e;
      if (
        key === KeyButtonVariant.AngleBracketLeft &&
        current.playbackRate > minPlaybackRateStep
      ) {
        current.playbackRate -= minPlaybackRateStep;
        setSpeed(current.playbackRate);
      }
      if (
        key === KeyButtonVariant.AngleBracketLeft &&
        current.playbackRate === minPlaybackRateStep
      ) {
        return;
      }
      if (
        key === KeyButtonVariant.AngleBracketRight &&
        current.playbackRate < maxPlaybackRate
      ) {
        current.playbackRate += minPlaybackRateStep;
        setSpeed(current.playbackRate);
      }
      if (
        key === KeyButtonVariant.AngleBracketLeft &&
        current.playbackRate === maxPlaybackRate
      ) {
        return;
      }
    }
  };

  const handleMute = () => {
    toggleMute();
  };

  const fastForward = () => {
    if (current) {
      current.currentTime += rewindSeconds;
    }
  };

  const revert = () => {
    if (current) {
      current.currentTime -= rewindSeconds;
    }
  };

  const handleFullScreen = () => {
    if (current) {
      current.requestFullscreen();
      toggleFullscreen();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    switch (e.key) {
      case KeyButtonVariant.ARROW_LEFT:
        revert();
        return;
      case KeyButtonVariant.ARROW_RIGHT:
        fastForward();
        return;
      case KeyButtonVariant.SPACE:
        handlePlay();
        return;
      case KeyButtonVariant.M:
        handleMute();
        return;
      case KeyButtonVariant.F:
        handleFullScreen();
        return;
      case KeyButtonVariant.AngleBracketLeft:
        handleVideoSpeedByAngles(e);
        return;
      case KeyButtonVariant.AngleBracketRight:
        handleVideoSpeedByAngles(e);
        return;
    }
  };

  return {
    handleOnTimeUpdate,
    handleVideoProgress,
    handleFullScreen,
    handleKeyDown,
    handleMute,
    handlePlay,
    fastForward,
    revert,
    handleVideoSpeed,
    elapsedTime,
    totalDuration,
  };
};
