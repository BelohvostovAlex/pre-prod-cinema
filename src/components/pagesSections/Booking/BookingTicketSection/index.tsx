import { FunctionComponent } from "react";

import BookingTitle from "../BookingTitle";
import Ticket from "../../../Ticket";

import { BookingTicketSectionWrapper, TicketsWrapper } from "./styles";
import { BookingTicketSectionProps } from "./interfaces";

const BookingTicketSection: FunctionComponent<BookingTicketSectionProps> = ({
  title,
  data,
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
            />
          );
        })}
      </TicketsWrapper>
    </BookingTicketSectionWrapper>
  );
};

export default BookingTicketSection;
