import { FunctionComponent } from "react";

import Ticket from "@components/Ticket";

import BookingTitle from "../BookingTitle";

import { BookingTicketSectionProps } from "./interfaces";
import { BookingTicketSectionWrapper, TicketsWrapper } from "./styles";

const BookingTicketSection: FunctionComponent<BookingTicketSectionProps> = ({
  title,
  data,
  isUpcoming = false,
}) => {
  if (data.length < 1) {
    return null;
  }

  return (
    <BookingTicketSectionWrapper>
      <BookingTitle title={title} />
      <TicketsWrapper>
        {data.map(({ day, id, movie, price, seatsAmount, time }) => {
          const ticketDate = `${day.month} ${day.date} ${day.year}`;
          return (
            <Ticket
              id={id}
              movie={movie}
              price={price}
              seatsAmount={seatsAmount}
              date={ticketDate}
              time={time}
              key={id}
              isUpcoming={isUpcoming}
            />
          );
        })}
      </TicketsWrapper>
    </BookingTicketSectionWrapper>
  );
};

export default BookingTicketSection;
