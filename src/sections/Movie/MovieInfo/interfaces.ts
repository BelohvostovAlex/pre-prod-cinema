import { IMovie } from "../../../interfaces/movie/IMovie";

export interface MovieInfoProps {
  movie: IMovie;

  onClick: () => void;
}
