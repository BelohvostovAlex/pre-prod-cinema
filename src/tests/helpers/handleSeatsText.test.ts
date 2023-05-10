import { handleSeatsText } from "../../components/Ticket/config/handleSeatsText";

const length1 = 1;
const length0 = 0;
const length6 = 6;

const seats = "seats";
const seat = "seat";

describe("handle one, zero and several seats text", () => {
  it("should return seat when length = 1", () => {
    const result = handleSeatsText(length1, seat, seats);
    expect(result).toBe(seat);
  });
  it("should return seats when length = 0", () => {
    const result = handleSeatsText(length0, seat, seats);
    expect(result).toBe(seats);
  });
  it("should return seat when length = 6", () => {
    const result = handleSeatsText(length6, seat, seats);
    expect(result).toBe(seats);
  });
});
