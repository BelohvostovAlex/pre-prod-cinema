import {
  AuthFormInputsErrors,
  AuthFormInputsPossibleNames,
} from "../../../constants/authForm";

export const handleValidationType = (type: AuthFormInputsPossibleNames) => {
  switch (type) {
    case AuthFormInputsPossibleNames.EMAIL:
      return {
        required: {
          value: true,
          message: AuthFormInputsErrors.REQUIRED,
        },
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: AuthFormInputsErrors.INVALID_EMAIL,
        },
      };
    case AuthFormInputsPossibleNames.PASSWORD:
      return {
        required: {
          value: true,
          message: AuthFormInputsErrors.REQUIRED,
        },
        minLength: {
          value: 6,
          message: AuthFormInputsErrors.PASSWORD_MIN,
        },
        validate: (value: string) => {
          return (
            [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
              pattern.test(value),
            ) || AuthFormInputsErrors.PASSWORD_MUST_INCLUDE
          );
        },
      };
    case AuthFormInputsPossibleNames.SURNAME:
      return {
        pattern: {
          value: /^[A-Za-z]+$/i,
          message: AuthFormInputsErrors.TEXT_ONLY_LETTER,
        },
        required: {
          value: true,
          message: AuthFormInputsErrors.REQUIRED,
        },
        minLength: {
          value: 2,
          message: AuthFormInputsErrors.TEXT_MIN_LENGTH,
        },
        maxLength: { value: 20, message: AuthFormInputsErrors.TEXT_MAX_LENGTH },
      };
    case AuthFormInputsPossibleNames.USERNAME:
      return {
        pattern: {
          value: /^[A-Za-z]+$/i,
          message: AuthFormInputsErrors.TEXT_ONLY_LETTER,
        },
        required: {
          value: true,
          message: AuthFormInputsErrors.REQUIRED,
        },
        minLength: {
          value: 2,
          message: AuthFormInputsErrors.TEXT_MIN_LENGTH,
        },
        maxLength: { value: 20, message: AuthFormInputsErrors.TEXT_MAX_LENGTH },
      };
  }
};
