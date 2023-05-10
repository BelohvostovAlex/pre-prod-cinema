import { SliderDirectionVariant } from "../../constants/slider";

export interface MovieSliderItemProps {
  center: boolean;
  top: boolean;
  bot: boolean;
  src: string;
  id: string;
  left: boolean;
  right: boolean;
  prevLeft: boolean;
  prevRight: boolean;
  direction: SliderDirectionVariant;
}

export type MovieSliderItemWrapperProps = Omit<
  MovieSliderItemProps,
  "src" | "id" | "direction"
>;

export type MovieSliderImgHorizontalProps = Pick<
  MovieSliderItemProps,
  "src" | "center" | "left" | "right" | "prevLeft" | "prevRight"
>;
