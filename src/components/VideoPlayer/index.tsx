import {
  ChangeEvent,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useRef,
} from "react";

import trailer from "../../assets/video/Inception.mp4";
import { useActions } from "../../hooks/useActionts";
import { useAppSelector } from "../../hooks/useAppSelector";
import { KeyButtonVariant } from "../../constants/keyboard";
import { videoSelector } from "../../store/slices/videoSlice/selectors";

import { VidePlayerWrapper, Video, VideoLayout } from "./styles";
import { VideoPlayerProps } from "./interfaces";
import Controls from "./Controls";

const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({ src }) => {
  const {
    isPlaying,
    isMuted,
    progress: videoProgress,
    speed: videoSpeed,
  } = useAppSelector(videoSelector);
  const { togglePlay, setProgress, toggleMute, setSpeed } = useActions();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const { current } = videoRef;
    if (current) {
      isPlaying ? current.play() : current.pause();
    }
  }, [isPlaying, videoRef]);

  const handlePlay = async () => {
    togglePlay();
  };

  const handleOnTimeUpdate = () => {
    const { current } = videoRef;
    if (current) {
      const progress = (current.currentTime / current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleVideoProgress = (e: ChangeEvent<HTMLInputElement>) => {
    const { current } = videoRef;
    if (current) {
      const { value } = e.target;
      const manualChange = Number(value);
      current.currentTime = (current.duration / 100) * manualChange;
      setProgress(manualChange);
    }
  };

  const handleVideoSpeed = (e: ChangeEvent<HTMLSelectElement>) => {
    const { current } = videoRef;
    if (current) {
      const { value } = e.target;
      const speed = Number(value);
      current.playbackRate = speed;
      setSpeed(speed);
    }
  };

  const handleVideoSpeedByAngles = (e: KeyboardEvent<HTMLDivElement>) => {
    const { current } = videoRef;
    if (current) {
      const { key } = e;
      if (
        key === KeyButtonVariant.AngleBracketLeft &&
        current.playbackRate > 0.25
      ) {
        current.playbackRate -= 0.25;
        setSpeed(current.playbackRate);
      }
      if (
        key === KeyButtonVariant.AngleBracketLeft &&
        current.playbackRate === 0.25
      ) {
        return;
      }
      if (
        key === KeyButtonVariant.AngleBracketRight &&
        current.playbackRate < 2
      ) {
        current.playbackRate += 0.25;
        setSpeed(current.playbackRate);
      }
      if (
        key === KeyButtonVariant.AngleBracketLeft &&
        current.playbackRate === 2
      ) {
        return;
      }
    }
  };

  const handleMute = () => {
    toggleMute();
  };

  const fastForward = () => {
    const { current } = videoRef;
    if (current) {
      current.currentTime += 10;
    }
  };

  const revert = () => {
    const { current } = videoRef;
    if (current) {
      current.currentTime -= 10;
    }
  };

  const handleFullScreen = () => {
    const { current } = videoRef;
    if (current) {
      current
        .requestFullscreen()
        .then(() => {})
        .catch(() => {});
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
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

  useEffect(() => {
    const { current } = videoRef;
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
        />
      </VideoLayout>
      <Video ref={videoRef} onTimeUpdate={handleOnTimeUpdate}>
        <source src={trailer} />
      </Video>
    </VidePlayerWrapper>
  );
};

export default VideoPlayer;
