import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { BookingInfo, BookingState, ReservePayload } from "./interfaces";

const initialState: BookingState = {
  bookings: [] as BookingInfo[],
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookings: (state, action: PayloadAction<BookingInfo[]>) => {
      state.bookings = action.payload;
    },
    setReserve: (state, action: PayloadAction<ReservePayload>) => {
      const {
        day: actionDay,
        startTime: actionStartTime,
        seat,
      } = action.payload;

      const currBooking = state.bookings.find(
        (item) =>
          item.day === actionDay &&
          item.session.find(({ startTime }) => startTime === actionStartTime),
      );

      if (currBooking) {
        const currSession = currBooking.session.find(
          (sesstion) => sesstion.startTime === actionStartTime,
        );
        currSession?.reserved.push(seat);
        currSession?.available.filter((item) => item !== seat);
        currSession?.selected.filter((item) => item !== seat);
      }
    },
    setSelect: (state, action: PayloadAction<ReservePayload>) => {
      const {
        day: actionDay,
        startTime: actionStartTime,
        seat,
      } = action.payload;

      const currBooking = state.bookings.find(
        (item) =>
          item.day === actionDay &&
          item.session.find(({ startTime }) => startTime === actionStartTime),
      );

      if (currBooking) {
        const currSession = currBooking.session.find(
          (sesstion) => sesstion.startTime === actionStartTime,
        );
        currSession?.selected.push(seat);
        currSession?.available.filter((item) => item !== seat);
      }
    },
  },
});

export const { setBookings, setReserve, setSelect } = bookingSlice.actions;

export default bookingSlice.reducer;
