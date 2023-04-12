import { RootState } from "../..";

export const moviesSelector = (state: RootState) => state.movies.data;
export const isMoviesLoadingSelector = (state: RootState) =>
  state.movies.isLoading;
