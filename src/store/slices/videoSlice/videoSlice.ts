import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { VideoState } from "./interfaces";

const initialState: VideoState = {
  isFullScreen: false,
  isMuted: true,
  isPlaying: false,
  progress: 0,
  speed: 1,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    setSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
    toggleMute: (state) => {
      state.isMuted = !state.isMuted;
    },
    toggleFullscreen: (state) => {
      state.isFullScreen = !state.isFullScreen;
    },
  },
});

export const {
  togglePlay,
  setProgress,
  setSpeed,
  toggleFullscreen,
  toggleMute,
} = videoSlice.actions;

export default videoSlice.reducer;
