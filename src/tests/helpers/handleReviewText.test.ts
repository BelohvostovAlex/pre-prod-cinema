import { handleReviewText } from "../../components/pagesSections/Movie/Review/config/handleReviewText";

const tooBigString =
  "I was a person that saw all the hype and claims of masterpiece";
const tooSmallString = "I was a person";

describe("slice string to a certain length", () => {
  it("should slice long string to 40 + 3 symbols", () => {
    const result = handleReviewText(tooBigString, 40);
    expect(result).toHaveLength(43);
  });
  it("should contain ...(three dots)", () => {
    const result = handleReviewText(tooBigString, 40);
    expect(result).toContain("...");
  });
  it("should return string length (str.length less than limit)", () => {
    const result = handleReviewText(tooSmallString, 40);
    expect(result).not.toHaveLength(43);
    expect(result).toHaveLength(tooSmallString.length);
  });
});
