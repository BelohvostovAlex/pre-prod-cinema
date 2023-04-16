import { ChangeEvent } from "react";

export interface ControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  title: string;
  progress: number;
  speed: number;
  elapsedTime: string;
  totalDuration: string;

  handlePlay: () => void;
  handleMute: () => void;
  handleProgress: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSpeed: (e: ChangeEvent<HTMLSelectElement>) => void;
  fastForward: () => void;
  revert: () => void;
  handleFullScreen: () => void;
}
