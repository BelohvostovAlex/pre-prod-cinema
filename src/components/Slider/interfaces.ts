import { SliderDirectionVariant } from "../../constants/slider";
import { IMovieImdb } from "../../models/movie/IMovieImdb";

export interface SliderProps {
  data: IMovieImdb[];
  direction?: SliderDirectionVariant;
}

export type SliderItemsProps = Pick<SliderProps, "direction">;
