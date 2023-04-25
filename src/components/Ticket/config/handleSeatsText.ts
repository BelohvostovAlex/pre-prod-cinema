export const handleSeatsText = (
  length: number,
  seatText: string,
  seatsText: string,
) => {
  return length === 1 ? seatText : seatsText;
};
