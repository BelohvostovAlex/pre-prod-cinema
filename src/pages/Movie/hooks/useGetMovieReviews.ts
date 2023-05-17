import { useEffect, useState } from "react";

import { getMovieReviews } from "@api/imdb/getMovieReviews";
import { GetMovieReviewsResponse } from "@api/imdb/interfaces";

export const useGetMoviesReview = (id: string) => {
  const [movie, setMovie] = useState({} as GetMovieReviewsResponse);

  const getReviews = async () => {
    const data = await getMovieReviews(id);
    setMovie(data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return movie;
};
