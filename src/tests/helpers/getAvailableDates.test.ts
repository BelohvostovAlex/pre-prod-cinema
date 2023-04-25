import { getAvailableDates } from "../../helpers/date/getAvailableDates";

const startDate = new Date();
const daysToAdd0 = 0;
const daysToAdd2 = 2;
const daysToAdd7 = 7;

describe("handle an array of available dates from start date to the limit of days to add", () => {
  it("should return an array width only one item of curr day info", () => {
    const result = getAvailableDates(startDate, daysToAdd0);
    expect(result.length).toBe(1);
  });
  it("should return array length  = 3 (curr day + 2 (limit))", () => {
    const result = getAvailableDates(startDate, daysToAdd2);
    expect(result.length).toBe(3);
  });
  it("should return array length  = 8 (curr day + 7 (limit))", () => {
    const result = getAvailableDates(startDate, daysToAdd7);
    expect(result.length).toBe(8);
  });
});
