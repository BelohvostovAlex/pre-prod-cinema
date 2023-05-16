import { IMovie } from "@interfaces/movie/IMovie";

export const handleNextMovieIndex = (data: IMovie[], id: string) => {
  const itemIndex = data.findIndex((item) => item.id === id);
  const nextItem = data[itemIndex + 1];
  const length = data.length;

  return itemIndex === length - 1 ? data[0] : nextItem;
};
