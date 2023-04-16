import { Dispatch, SetStateAction } from "react";

import { SliderDirectionVariant } from "../../constants/slider";
import { IMovieImdb } from "../../models/movie/IMovieImdb";

export interface SliderProps {
  data: IMovieImdb[];
  direction?: SliderDirectionVariant;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

export type SliderItemsProps = Pick<SliderProps, "direction">;
