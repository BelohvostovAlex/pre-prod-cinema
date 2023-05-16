import { ImdbUrls } from "@constants/url/imdb";
import { imdbApi } from "@api/http/imdbApi";

import { GetMoviesResponse } from "./interfaces";

export const getMovies = async () => {
  const { data } = await imdbApi.get<GetMoviesResponse>(
    `${ImdbUrls.GET_MOVIES_IN_THEATER}/${process.env.REACT_APP_IMDB_API_KEY}`,
  );

  return data.items;
};
