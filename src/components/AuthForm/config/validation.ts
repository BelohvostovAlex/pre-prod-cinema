import {
  AuthFormInputsErrors,
  AuthFormInputsPossibleNames,
} from "../../../constants/authForm";

export const handleValidationType = (
  type: AuthFormInputsPossibleNames,
  required = true,
) => {
  switch (type) {
    case AuthFormInputsPossibleNames.EMAIL:
      return {
        required: {
          value: required,
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
          value: required,
          message: AuthFormInputsErrors.REQUIRED,
        },
        minLength: {
          value: 6,
          message: AuthFormInputsErrors.PASSWORD_MIN,
        },
        maxLength: {
          value: 15,
          message: AuthFormInputsErrors.PASSWORD_MAX,
        },
        validate: (value: string) => {
          if (!required && !value) return;
          if (required) {
            return (
              [/[a-zа-я\d]/, /[A-ZА-Я]/, /[0-9]/, /[^a-zа-яA-ZА-Я0-9]/].every(
                (pattern) => pattern.test(value),
              ) || AuthFormInputsErrors.PASSWORD_MUST_INCLUDE
            );
          }
        },
      };
    case AuthFormInputsPossibleNames.SURNAME:
      return {
        pattern: {
          value: /^[a-zа-яA-ZА-Я]+$/i,
          message: AuthFormInputsErrors.TEXT_ONLY_LETTER,
        },
        required: {
          value: required,
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
          value: /^[a-zа-яA-ZА-Я]+$/i,
          message: AuthFormInputsErrors.TEXT_ONLY_LETTER,
        },
        required: {
          value: required,
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
