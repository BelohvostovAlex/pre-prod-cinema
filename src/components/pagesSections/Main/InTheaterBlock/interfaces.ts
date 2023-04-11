import { IMovie } from "../../../../models/movie/IMovie";

export interface InTheaterBlockProps {
  title: string;
  text: string;
  img: string;
  data: IMovie[];
  genres: string[];
}
