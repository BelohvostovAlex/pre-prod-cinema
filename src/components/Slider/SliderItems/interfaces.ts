import { ReactNode } from "react";

export interface SliderItemsProps<T> {
  data: T[];
  index: number;
  renderItem: (
    item: T,
    top?: boolean,
    center?: boolean,
    bot?: boolean,
    left?: boolean,
    right?: boolean,
    prevLeft?: boolean,
    prevRight?: boolean,
  ) => ReactNode;
}
