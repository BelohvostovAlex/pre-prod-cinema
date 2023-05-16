import { SliderDirectionVariant } from "@constants/slider";

export interface BookSliderItemProps {
  center: boolean;
  left: boolean;
  right: boolean;
  prevLeft: boolean;
  prevRight: boolean;
  item: number;
  month: string;
  top?: boolean;
  bot?: boolean;
  direction: SliderDirectionVariant;
}

export type BookSliderItemWrapperProps = Omit<
  BookSliderItemProps,
  "item" | "month"
>;
