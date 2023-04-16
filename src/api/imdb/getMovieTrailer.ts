import axios from "axios";

export const getMovieTrailer = async () => {
  const response = await axios.get(
    "https://imdb-api.com/en/API/YouTubeTrailer/k_4k2wy26d/tt1375666",
  );
  return response.data;
};
//have to try this api
