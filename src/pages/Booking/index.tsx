import { FunctionComponent } from "react";

import { useAppSelector } from "@hooks/useAppSelector";
import BookingTicketSection from "@sections/Booking/BookingTicketSection";
import BookingTitle from "@sections/Booking/BookingTitle";
import { allCategoriesTicketsSelector } from "@store/slices/ticketsSlice/selectors";

import { useBookingText } from "./hooks/useBookingText";
import { BookingsWrapper } from "./styles";

const Bookings: FunctionComponent = () => {
  const { missedTitle, pastTitle, upcomingTitle, noBookingsTitle } =
    useBookingText();
  const { missedTickets, pastTickets, upcomingTickets } = useAppSelector(
    allCategoriesTicketsSelector,
  );

  return (
    <BookingsWrapper>
      {upcomingTickets.length < 1 &&
        pastTickets.length < 1 &&
        missedTickets.length < 1 && <BookingTitle title={noBookingsTitle} />}
      <BookingTicketSection
        data={upcomingTickets}
        title={upcomingTitle}
        isUpcoming
      />
      <BookingTicketSection data={pastTickets} title={pastTitle} />
      <BookingTicketSection data={missedTickets} title={missedTitle} />
    </BookingsWrapper>
  );
};

export default Bookings;
