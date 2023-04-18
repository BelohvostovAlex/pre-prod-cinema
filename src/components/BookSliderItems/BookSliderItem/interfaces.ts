export interface BookSliderItemProps {
  center: boolean;
  left: boolean;
  right: boolean;
  prevLeft: boolean;
  prevRight: boolean;
  item: number;
}

export type BookSliderItemWrapperProps = Omit<BookSliderItemProps, "item">;
