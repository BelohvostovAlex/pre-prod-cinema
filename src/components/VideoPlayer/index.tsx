import { FunctionComponent, useEffect, useRef } from "react";

import { ReactComponent as PauseIcon } from "../../assets/svg/tools/pause.svg";
import { ReactComponent as PlayIcon } from "../../assets/svg/tools/play.svg";
import trailer from "../../assets/video/Inception.mp4";
import { useActions } from "../../hooks/useActionts";
import { useAppSelector } from "../../hooks/useAppSelector";
import RoundButton from "../UI/Buttons/RoundButton";

import { VidePlayerWrapper, Video } from "./styles";
import { VideoPlayerProps } from "./interfaces";
import { roundButtonExtraCss } from "./config";

const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({ src }) => {
  const { isPlaying, isMuted } = useAppSelector((state) => state.video);
  const { togglePlay, setProgress } = useActions();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying, videoRef]);

  const handlePlay = async () => {
    togglePlay();
  };

  const handleOnTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  // const handleVideoProgress = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (videoRef.current) {
  //     const manualChange = Number(event.target.value);
  //     videoRef.current.currentTime =
  //       (videoRef.current.duration / 100) * manualChange;
  //     setProgress(manualChange);
  //   }
  // };

  // const handleVideoSpeed = (event: ChangeEvent<HTMLSelectElement>) => {
  //   if (videoRef.current) {
  //     const speed = Number(event.target.value);
  //     videoRef.current.playbackRate = speed;
  //     setSpeed(speed);
  //   }
  // };

  // const handleMute = () => {
  //   toggleMute();
  // };

  // const fastForward = () => {
  //   if (videoRef.current) {
  //     videoRef.current.currentTime += 5;
  //   }
  // };

  // const revert = () => {
  //   if (videoRef.current) {
  //     videoRef.current.currentTime -= 5;
  //   }
  // };

  useEffect(() => {
    if (videoRef.current) {
      isMuted
        ? (videoRef.current.muted = true)
        : (videoRef.current.muted = false);
    }
  }, [isMuted, videoRef]);

  return (
    <VidePlayerWrapper>
      <Video ref={videoRef} onTimeUpdate={handleOnTimeUpdate} controls>
        <source src={trailer} />
      </Video>

      <RoundButton onClick={handlePlay} extra={roundButtonExtraCss}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </RoundButton>
    </VidePlayerWrapper>
  );
};

export default VideoPlayer;
