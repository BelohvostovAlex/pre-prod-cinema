import { AuthFormInputsPossibleNames } from "../../../constants/authForm";

export const handleValidationType = (type: AuthFormInputsPossibleNames) => {
  switch (type) {
    case AuthFormInputsPossibleNames.EMAIL:
      return {
        required: "Required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address",
        },
      };
    case AuthFormInputsPossibleNames.PASSWORD:
      return {
        required: "required",
        minLength: {
          value: 6,
          message: "must be 6 chars",
        },
        validate: (value: string) => {
          return (
            [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
              pattern.test(value),
            ) || "must include lower, upper, number, and special chars"
          );
        },
      };
    case AuthFormInputsPossibleNames.SURNAME:
      return {
        pattern: /^[A-Za-z]+$/i,
        required: true,
        minLength: 2,
        maxLength: 20,
      };
    case AuthFormInputsPossibleNames.USERNAME:
      return {
        pattern: /^[A-Za-z]+$/i,
        required: true,
        minLength: 2,
        maxLength: 20,
      };
  }
};
