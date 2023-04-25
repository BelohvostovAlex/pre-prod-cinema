import { FunctionComponent, useEffect } from "react";

import BookingTicketSection from "../../components/pagesSections/Booking/BookingTicketSection";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  missedTicketsSelector,
  pastTicketsSelector,
  upcomingTicketsSelector,
} from "../../store/slices/ticketsSlice/selectors";
import { useActions } from "../../hooks/useActionts";
import { getCurrDay } from "../../helpers/date/getCurrDay";

import { BookingsWrapper } from "./styles";
import { useBookingText } from "./config/useBookingText";

const Bookings: FunctionComponent = () => {
  const { missedTitle, pastTitle, upcomingTitle } = useBookingText();
  const upcomingTickets = useAppSelector(upcomingTicketsSelector);
  const pastTickets = useAppSelector(pastTicketsSelector);
  const missedTickets = useAppSelector(missedTicketsSelector);

  const { setCurrDay } = useActions();

  useEffect(() => {
    setCurrDay(getCurrDay());
  }, []);

  return (
    <BookingsWrapper>
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
