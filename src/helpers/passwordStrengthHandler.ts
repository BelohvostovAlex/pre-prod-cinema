import { Colors } from "../constants/styles/colors";

export const passwordStrengthHandler = (value: string) => {
  const specialSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  if (!value) {
    return {
      width: "0%",
      color: "transparent",
    };
  }
  const length = value.length;
  if (length) {
    if (length < 4) {
      return {
        width: "10%",
        color: Colors.RED,
      };
    }
    if (length >= 4 && length < 8) {
      return {
        width: "30%",
        color: Colors.RED,
      };
    }
    if (length >= 8 && length < 12 && !!/^[a-zа-я\d]*$/.test(value)) {
      return {
        width: "30%",
        color: Colors.RED,
      };
    }
    if (length >= 8 && length < 12 && !/^[a-zа-я\d]*$/.test(value)) {
      return {
        width: "60%",
        color: Colors.ORANGE,
      };
    }
    if (
      length >= 12 &&
      length < 16 &&
      value.match(/[A-ZА-Я]/g) &&
      !specialSymbols.test(value)
    ) {
      return {
        width: "60%",
        color: Colors.ORANGE,
      };
    }
    if (
      length >= 12 &&
      length < 16 &&
      [/[a-zа-я\d]/, /[A-ZА-Я]/, /[0-9]/, /[^a-zа-яA-ZА-Я0-9]/].every(
        (pattern) => pattern.test(value),
      )
    ) {
      return {
        width: "100%",
        color: Colors.GREEN,
      };
    }
  }
};
