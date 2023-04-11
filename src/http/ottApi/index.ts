import axios from "axios";

export const ottApi = axios.create({
  baseURL: process.env.REACT_APP_OTT_URL,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_OTT_API_HOST,
  },
});
