import { IMovieOtt } from "../../models/movie/IMovieOtt";

export interface OttParams {
  region: string;
  page: string;
}

export interface GetNewMoviesOTTOutput {
  page: number;
  results: IMovieOtt[];
}
