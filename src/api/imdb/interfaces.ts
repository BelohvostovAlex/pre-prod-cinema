import { IMovie } from "../../interfaces/movie/IMovie";
import { IReview } from "../../interfaces/movie/IReview";

export interface GetMovieReviewsResponse {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  items: IReview[];
}

export interface GetMoviesResponse {
  items: IMovie[];
  errorMessage: string;
}
