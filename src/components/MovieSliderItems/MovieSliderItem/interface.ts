export interface MovieSliderItemProps {
  center: boolean;
  top: boolean;
  bot: boolean;
  src: string;
  id: string;
}

export type MovieSliderItemWrapperProps = Omit<
  MovieSliderItemProps,
  "src" | "id"
>;
