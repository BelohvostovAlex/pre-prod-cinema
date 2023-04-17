import { ImdbUrls } from "../../constants/url/imdb";
import { imdbApi } from "../../http/imdbApi";

import { GetMovieReviewsResponse } from "./interfaces";

export const getMovieReviews = async (id: string) => {
  const { data } = await imdbApi.get<GetMovieReviewsResponse>(
    `${ImdbUrls.GET_MOVIE_REVIEW}/${process.env.REACT_APP_IMDB_API_KEY}/${id}`,
  );

  return data;
};