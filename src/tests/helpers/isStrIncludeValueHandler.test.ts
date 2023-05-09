import { isStrIncludesValueHandler } from "@helpers/isStrIncludeValueHandler";

const string = "auth/firebase closed-popup";
const substr1 = "closed-popup";
const substr2 = "firebase email is exists";

describe("is string includes substring", () => {
  it("should return true", () => {
    const result = isStrIncludesValueHandler(string, substr1);
    expect(result).toBeTruthy();
  });
  it("should return false", () => {
    const result = isStrIncludesValueHandler(string, substr2);
    expect(result).toBeFalsy();
  });
});
