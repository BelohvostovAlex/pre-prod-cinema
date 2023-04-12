import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IMovie } from "../../../models/movie/IMovie";

import { MovieState } from "./interfaces";
import { getMoviesThunk } from "./thunks/getMoviesThunk";

const initialState: MovieState = {
  data: [] as IMovie[],
  isLoading: false,
  isError: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getMoviesThunk.fulfilled,
      (state, action: PayloadAction<IMovie[]>) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isError = null;
      },
    );
    builder.addCase(getMoviesThunk.pending, (state) => {
      state.data = [] as IMovie[];
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(getMoviesThunk.rejected, (state) => {
      state.data = [] as IMovie[];
      state.isLoading = false;
      state.isError = "Cannot get Movies";
    });
  },
});

export default movieSlice.reducer;
