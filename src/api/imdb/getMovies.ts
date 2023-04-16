import { ImdbUrls } from "../../constants/url/imdb";
import { imdbApi } from "../../http/imdbApi";
import { IMovie } from "../../models/movie/IMovie";

export const getMovies = async () => {
  const { data } = await imdbApi.get<IMovie[]>(ImdbUrls.GET_MOVIES);

  return data;
};
