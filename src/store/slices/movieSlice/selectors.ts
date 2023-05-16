import { RootState } from "@store/index";

export const moviesSelector = (state: RootState) => state.movies.data;
export const isMoviesLoadingSelector = (state: RootState) =>
  state.movies.isLoading;
