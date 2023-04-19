interface Session {
  startTime: string;
  hall: string;
  available: number[];
  selected: number[];
  reserved: number[];
}

export interface BookingInfo {
  day: number;
  session: Session[];
}

export interface BookingState {
  bookings: BookingInfo[];
}

export type ReservePayload = Pick<Session, "startTime" | "hall"> &
  Pick<BookingInfo, "day"> & { seat: number };
