import { getMonthString } from "../../helpers/date/getMonthString";
import { getCurrDay } from "../../helpers/date/getCurrDay";
import { IDate } from "../../models/IDate";

const date = new Date();
const dateMs = date.getTime();

const response: IDate = {
  date: date.getDate(),
  year: date.getFullYear(),
  fullDateInfo: dateMs,
  month: getMonthString(date.getMonth()),
};

describe("handle current day info, date, year, month, fullDateInfo(ms value)", () => {
  it("should return current day object: date, month year => equal to the same response prop", () => {
    const result = getCurrDay();
    expect(result.date).toBe(response.date);
    expect(result.month).toBe(response.month);
    expect(result.year).toBe(response.year);
  });
});
