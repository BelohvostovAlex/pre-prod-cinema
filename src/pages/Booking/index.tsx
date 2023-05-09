import { FunctionComponent, useEffect } from "react";

import BookingTicketSection from "@components/pagesSections/Booking/BookingTicketSection";
import BookingTitle from "@components/pagesSections/Booking/BookingTitle";
import { getCurrDay } from "@helpers/date/getCurrDay";
import { useActions } from "@hooks/useActionts";
import { useAppSelector } from "@hooks/useAppSelector";
import {
  missedTicketsSelector,
  pastTicketsSelector,
  upcomingTicketsSelector,
} from "@store/slices/ticketsSlice/selectors";

import { useBookingText } from "./config/useBookingText";
import { BookingsWrapper } from "./styles";

const Bookings: FunctionComponent = () => {
  const { missedTitle, pastTitle, upcomingTitle, noBookingsTitle } =
    useBookingText();
  const upcomingTickets = useAppSelector(upcomingTicketsSelector);
  const pastTickets = useAppSelector(pastTicketsSelector);
  const missedTickets = useAppSelector(missedTicketsSelector);

  const { setCurrDay } = useActions();

  useEffect(() => {
    setCurrDay(getCurrDay());
  }, []);

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
