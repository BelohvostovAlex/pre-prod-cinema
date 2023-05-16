import { getMonthString } from "@helpers/date/getMonthString";

const monthIndexJan = 0;
const janStr = "January";
const monthIndexJul = 6;
const julStr = "July";
const monthIndexDec = 11;
const decStr = "December";

describe("handle month index and change it to string", () => {
  it("should return January", () => {
    const result = getMonthString(monthIndexJan);
    expect(result).toBe(janStr);
  });
  it("should return July", () => {
    const result = getMonthString(monthIndexJul);
    expect(result).toBe(julStr);
  });
  it("should return December", () => {
    const result = getMonthString(monthIndexDec);
    expect(result).toBe(decStr);
  });
});
