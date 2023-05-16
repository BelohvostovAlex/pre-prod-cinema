import { IMovie } from "../../../interfaces/movie/IMovie";

export interface MovieState {
  data: IMovie[];
  isLoading: boolean;
  isError: null | string;
}
