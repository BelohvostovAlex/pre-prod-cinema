import { expect } from "@jest/globals";

import { Colors } from "@constants/styles/colors";
import {
  fullWidth,
  passwordStrengthHandler,
  sixtyWidth,
  tenWidth,
  thirtyWidth,
  transparentColor,
  zeroWidth,
} from "@helpers/passwordStrengthHandler";

const emptyValue = "";
const emptyValueResponse = {
  width: `${zeroWidth}%`,
  color: transparentColor,
};

const valueLenghMoreZero = "12";
const valueLenghMoreZeroResponse = {
  width: `${tenWidth}%`,
  color: Colors.RED,
};

const valueLengthFour = "1234";
const valueLengthFourResponse = {
  width: `${thirtyWidth}%`,
  color: Colors.RED,
};

const valueLengthEight = "12345678";
const valueLengthEightResponse = {
  width: `${thirtyWidth}%`,
  color: Colors.RED,
};

const valueLengthEightWithCapitalLetter = "1234567A";
const valueLengthEightWithCapitalLetterResponse = {
  width: `${sixtyWidth}%`,
  color: Colors.ORANGE,
};

const valueLengthTwelveWithCapitalLetterSpecialSymbol = "1234567891A.";
const valueLengthTwelveWithCapitalLetterSpecialSymbolResponse = {
  width: `${fullWidth}%`,
  color: Colors.GREEN,
};

const valueLengthTwentyWithCapitalLetterSpecialSymbol = "123456789123456789A.";
const valueLengthTwentyWithCapitalLetterSpecialSymbolResponse = {
  width: `${fullWidth}%`,
  color: Colors.GREEN,
};

const valueLengthTwentyWithCapitalLetterWithoutSpecialSymbol =
  "1234567891234567891A";
const valueLengthTwentyWithCapitalLetterWithoutSpecialSymbolResponse = {
  width: `${sixtyWidth}%`,
  color: Colors.ORANGE,
};

const valueLengthTwentyWithoutCapitalLetterWithoutSpecialSymbol =
  "12345678912345678912";
const valueLengthTwentyWithoutCapitalLetterWithoutSpecialSymbolResponse = {
  width: `${thirtyWidth}%`,
  color: Colors.RED,
};

describe("validate value", () => {
  it("should return 0 width and transparent color with empty string", () => {
    const result = passwordStrengthHandler(emptyValue);
    expect(result).toEqual(emptyValueResponse);
  });
  it("should return 10% width and red color with string length > 0", () => {
    const result = passwordStrengthHandler(valueLenghMoreZero);
    expect(result).toEqual(valueLenghMoreZeroResponse);
  });
  it("should return 30% width and red color with string length >= 4 && < 8", () => {
    const result = passwordStrengthHandler(valueLengthFour);
    expect(result).toEqual(valueLengthFourResponse);
  });
  it("should return 30% width and red color with string length >= 8 && no any capital letter", () => {
    const result = passwordStrengthHandler(valueLengthEight);
    expect(result).toEqual(valueLengthEightResponse);
  });
  it("should return 60% width and orange color with string length >= 8 && < 12 + capital letter", () => {
    const result = passwordStrengthHandler(valueLengthEightWithCapitalLetter);
    expect(result).toEqual(valueLengthEightWithCapitalLetterResponse);
  });
  it("should return 100% width and green color with string length >= 12 + capital letter + special symbol", () => {
    const result = passwordStrengthHandler(
      valueLengthTwelveWithCapitalLetterSpecialSymbol,
    );
    expect(result).toEqual(
      valueLengthTwelveWithCapitalLetterSpecialSymbolResponse,
    );
  });
  it("should return 100% width and green color with string length >= 20 + capital letter + special symbol", () => {
    const result = passwordStrengthHandler(
      valueLengthTwentyWithCapitalLetterSpecialSymbol,
    );
    expect(result).toEqual(
      valueLengthTwentyWithCapitalLetterSpecialSymbolResponse,
    );
  });
  it("should return 60% width and orange color with string length >= 20 + capital letter,but without special symbol", () => {
    const result = passwordStrengthHandler(
      valueLengthTwentyWithCapitalLetterWithoutSpecialSymbol,
    );
    expect(result).toEqual(
      valueLengthTwentyWithCapitalLetterWithoutSpecialSymbolResponse,
    );
  });
  it("should return 30% width and red color with string length >= 20 without capital letter && without special symbol", () => {
    const result = passwordStrengthHandler(
      valueLengthTwentyWithoutCapitalLetterWithoutSpecialSymbol,
    );
    expect(result).toEqual(
      valueLengthTwentyWithoutCapitalLetterWithoutSpecialSymbolResponse,
    );
  });
});
