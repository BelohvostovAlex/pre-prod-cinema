import { createAsyncThunk } from "@reduxjs/toolkit";

import { moviesImdbNew } from "@constants/movies";

export const getMoviesThunk = createAsyncThunk(
  "movie/getMovies",
  async (_, { rejectWithValue }) => {
    try {
      return moviesImdbNew;
    } catch (error) {
      return rejectWithValue("no");
    }
  },
);
