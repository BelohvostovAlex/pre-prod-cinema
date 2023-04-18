export interface MovieHallBadgeProps {
  isActive: boolean;
  time: string;
  hallNumber: string;
}

export type MovieHallBadgeWrapperProps = Pick<MovieHallBadgeProps, "isActive">;
