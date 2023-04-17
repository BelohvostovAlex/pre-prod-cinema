import { Colors } from "../constants/styles/colors";

export const transparentColor = "transparent";
export const zeroWidth = 0;
export const tenWidth = 10;
export const thirtyWidth = 30;
export const sixtyWidth = 60;
export const fullWidth = 100;

export const passwordStrengthHandler = (value: string) => {
  if (!value) {
    return {
      width: `${zeroWidth}%`,
      color: transparentColor,
    };
  }
  const length = value.length;
  if (length) {
    if (length < 4) {
      return {
        width: `${tenWidth}%`,
        color: Colors.RED,
      };
    }
    if (length >= 4 && length < 8) {
      return {
        width: `${thirtyWidth}%`,
        color: Colors.RED,
      };
    }
    if (length >= 8 && length < 12 && /[A-ZА-Я]+/g.test(value)) {
      return {
        width: `${sixtyWidth}%`,
        color: Colors.ORANGE,
      };
    }
    if (length >= 8 && !/[A-ZА-Я]+/g.test(value)) {
      return {
        width: `${thirtyWidth}%`,
        color: Colors.RED,
      };
    }
    if (length >= 12 && /\W+/g.test(value) && /[A-ZА-Я]+/g.test(value)) {
      return {
        width: `${fullWidth}%`,
        color: Colors.GREEN,
      };
    }
    if (length >= 12 && !/\W+/g.test(value) && /[A-ZА-Я]+/g.test(value)) {
      return {
        width: `${sixtyWidth}%`,
        color: Colors.ORANGE,
      };
    }
  }
};
