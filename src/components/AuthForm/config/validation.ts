import { AuthFormInputsPossibleNames } from "../../../constants/authForm";

import { useValidationText } from "./useValidationText";

export const useValidationWithTranslate = () => {
  const {
    usernameText,
    surnameText,
    emailText,
    passwordText,
    textMinLength,
    textMaxLength,
    textOnlyLetter,
  } = useValidationText();

  const handleValidationType = (
    type: AuthFormInputsPossibleNames,
    required = true,
  ) => {
    switch (type) {
      case AuthFormInputsPossibleNames.EMAIL:
        return {
          required: {
            value: required,
            message: emailText.required,
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: emailText.invalidEmail,
          },
        };
      case AuthFormInputsPossibleNames.PASSWORD:
        return {
          required: {
            value: required,
            message: passwordText.required,
          },
          minLength: {
            value: 6,
            message: passwordText.passwordMin,
          },
          validate: (value: string) => {
            if (!required && !value) return;
            if (required) {
              return (
                [/[A-ZА-Я]/].every((pattern) => pattern.test(value)) ||
                passwordText.passwordMustInclude
              );
            }
          },
        };
      case AuthFormInputsPossibleNames.SURNAME:
        return {
          pattern: {
            value: /^[a-zа-яA-ZА-Я]+$/i,
            message: textOnlyLetter,
          },
          required: {
            value: required,
            message: surnameText.required,
          },
          minLength: {
            value: 2,
            message: textMinLength,
          },
          maxLength: {
            value: 20,
            message: textMaxLength,
          },
        };
      case AuthFormInputsPossibleNames.USERNAME:
        return {
          pattern: {
            value: /^[a-zа-яA-ZА-Я]+$/i,
            message: textOnlyLetter,
          },
          required: {
            value: required,
            message: usernameText.required,
          },
          minLength: {
            value: 2,
            message: textMinLength,
          },
          maxLength: {
            value: 20,
            message: textMaxLength,
          },
        };
    }
  };

  return handleValidationType;
};
