export interface MovieHallBadgeProps {
  isActive: boolean;
  time: string;
  hallNumber: string;
  available: number;

  onClick: () => void;
}

export type MovieHallBadgeWrapperProps = Pick<MovieHallBadgeProps, "isActive">;
