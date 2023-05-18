import { expect } from "@jest/globals";

import { getMonthString } from "@helpers/date/getMonthString";
import { handleTicketPrice } from "@helpers/handleTicketPrice";
import { IDate } from "@interfaces/IDate";

const currDate = new Date();
const currDateMs = currDate.getTime();
const commonPrice = 10;

const dayAfterTommorrowStartDate = new Date();
dayAfterTommorrowStartDate.setDate(currDate.getDate() + 2);
const dayAfterTommorrowMs = dayAfterTommorrowStartDate.getTime();
const priceWith10PercentDiscount = 10 - commonPrice * 0.1;

const currDateResponse: IDate = {
  date: currDate.getDate(),
  year: currDate.getFullYear(),
  fullDateInfo: currDateMs,
  month: getMonthString(currDate.getMonth()),
};

const dayAfterTomorrowResponse: IDate = {
  date: dayAfterTommorrowStartDate.getDate(),
  year: dayAfterTommorrowStartDate.getFullYear(),
  fullDateInfo: dayAfterTommorrowMs,
  month: getMonthString(dayAfterTommorrowStartDate.getMonth()),
};

describe("handle price with/without discount of the certain date", () => {
  it("should return common price for today", () => {
    const result = handleTicketPrice(currDateResponse);
    expect(result).toBe(commonPrice);
  });
  it("should return price with 10% discound for the day after tomorrow", () => {
    const result = handleTicketPrice(dayAfterTomorrowResponse);
    expect(result).toBe(priceWith10PercentDiscount);
  });
});
