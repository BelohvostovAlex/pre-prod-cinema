import { IMovie } from "../../../../models/movie/IMovie";

export interface MovieInfoProps {
  movie: IMovie;

  onClick: () => void;
}
