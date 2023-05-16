import { ITicket } from "@interfaces/movie/ITicket";

export interface BookingTicketSectionProps {
  title: string;
  data: ITicket[];
  isUpcoming?: boolean;
}
