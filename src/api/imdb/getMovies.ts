import { ImdbUrls } from "../../constants/url/imdb";
import { imdbApi } from "../../http/imdbApi";
import { IMovie } from "../../models/movie/IMovie";

export const getMovies = async () => {
  const { data } = await imdbApi.get<IMovie[]>(ImdbUrls.GET_MOVIES);

  return data;
};

// export const getMoviesInTheaters = async () => {
//   const response = await axios.get(
//     "https://imdb-api.com/en/API/InTheaters/k_4k2wy26d",
//   );
//   return response.data;
// };
