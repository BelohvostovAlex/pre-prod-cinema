import { createAsyncThunk } from "@reduxjs/toolkit";

import { getMovies } from "@api/imdb/getMovies";

export const getMoviesThunk = createAsyncThunk(
  "movie/getMovies",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMovies();

      return data;
    } catch (error) {
      return rejectWithValue("no");
    }
  },
);
