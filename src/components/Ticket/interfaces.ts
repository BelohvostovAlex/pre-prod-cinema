export interface TicketProps {
  id: string;
  movie: string;
  date: string;
  time: string;
  seatsAmount: number;
  price: string;

  cancelBooking?: () => void;
}
