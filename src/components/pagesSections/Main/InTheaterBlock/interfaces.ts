import { IMovieImdb } from "@models/movie/IMovieImdb";

export interface InTheaterBlockProps {
  data: IMovieImdb[];
  isLoading: boolean;
}
