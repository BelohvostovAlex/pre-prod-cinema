import axios from "axios";

export const imdbApi = axios.create({
  baseURL: process.env.REACT_APP_IMDB_API,
});
