import { IMovie } from "../../../models/movie/IMovie";

export interface MovieState {
  data: IMovie[];
  isLoading: boolean;
  isError: null | string;
}
