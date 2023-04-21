export interface MovieScreenCellProps {
  seatNumber: number;
  reserved?: boolean;
  selected?: boolean;
}

export type MovieScreenCellWrapperProps = Omit<
  MovieScreenCellProps,
  "seatNumber"
>;
