import { FunctionComponent } from "react";

import BookingTicketSection from "../../components/pagesSections/Booking/BookingTicketSection";
import BookingTitle from "../../components/pagesSections/Booking/BookingTitle";
import { useAppSelector } from "../../hooks/useAppSelector";
import { allCategoriesTicketsSelector } from "../../store/slices/ticketsSlice/selectors";

import { BookingsWrapper } from "./styles";
import { useBookingText } from "./hooks/useBookingText";

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
