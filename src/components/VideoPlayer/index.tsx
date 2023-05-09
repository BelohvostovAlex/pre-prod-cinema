import { FunctionComponent, useEffect, useRef } from "react";

import trailer from "@assets/video/Inception.mp4";
import { useAppSelector } from "@hooks/useAppSelector";
import { videoSelector } from "@store/slices/videoSlice/selectors";

import { useVideoControl } from "./config/useVideoControl";
import Controls from "./Controls";
import { VideoPlayerProps } from "./interfaces";
import { VidePlayerWrapper, Video, VideoLayout } from "./styles";

const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({ src }) => {
  const {
    isPlaying,
    isMuted,
    progress: videoProgress,
    speed: videoSpeed,
  } = useAppSelector(videoSelector);

  const videoRef = useRef<HTMLVideoElement>(null);

  const {
    fastForward,
    handleFullScreen,
    handleKeyDown,
    handleMute,
    handleOnTimeUpdate,
    handlePlay,
    handleVideoProgress,
    handleVideoSpeed,
    revert,
    elapsedTime,
    totalDuration,
  } = useVideoControl(videoRef, isPlaying, isMuted);

  useEffect(() => {
    const current = videoRef?.current;
    if (current) {
      isMuted ? (current.muted = true) : (current.muted = false);
    }
  }, [isMuted, videoRef]);

  return (
    <VidePlayerWrapper>
      <VideoLayout onKeyDown={handleKeyDown} tabIndex={0}>
        <Controls
          title={"Batman"}
          isMuted={isMuted}
          isPlaying={isPlaying}
          progress={videoProgress}
          speed={videoSpeed}
          handleSpeed={handleVideoSpeed}
          handlePlay={handlePlay}
          handleMute={handleMute}
          handleProgress={handleVideoProgress}
          fastForward={fastForward}
          revert={revert}
          handleFullScreen={handleFullScreen}
          elapsedTime={elapsedTime}
          totalDuration={totalDuration}
        />
      </VideoLayout>
      <Video ref={videoRef} onTimeUpdate={handleOnTimeUpdate}>
        <source src={trailer} />
      </Video>
    </VidePlayerWrapper>
  );
};

export default VideoPlayer;
