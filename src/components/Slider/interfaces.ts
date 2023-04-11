import { SliderDirectionVariant } from "../../constants/slider";
import { IMovie } from "../../models/movie/IMovie";

export interface SliderProps {
  data: IMovie[];
  direction?: SliderDirectionVariant;
}

export type SliderItemsProps = Pick<SliderProps, "direction">;
