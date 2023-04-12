import { IMovieImdb } from "../../../../models/movie/IMovieImdb";

export interface InTheaterBlockProps {
  movie: IMovieImdb;
  data: IMovieImdb[];
  isLoading: boolean;
}
