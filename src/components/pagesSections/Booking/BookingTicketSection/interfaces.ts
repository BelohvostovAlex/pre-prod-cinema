import { ITicket } from "@models/movie/ITicket";

export interface BookingTicketSectionProps {
  title: string;
  data: ITicket[];
  isUpcoming?: boolean;
}
