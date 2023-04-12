import { useTranslation } from "react-i18next";

export const useValidationText = () => {
  const { t } = useTranslation();

  return {
    usernameText: {
      required: t("AuthForm.usernameField.required"),
    },
    surnameText: {
      required: t("AuthForm.surnameField.required"),
    },
    emailText: {
      required: t("AuthForm.emailField.required"),
      invalidEmail: t("AuthInputErrors.invalidEmail"),
    },
    passwordText: {
      required: t("AuthForm.passwordField.required"),
      passwordMin: t("AuthInputErrors.passwordMin"),
      passwordMustInclude: t("AuthInputErrors.passwordMustInclude"),
    },
    textOnlyLetter: t("AuthInputErrors.textOnlyLetter"),
    textMaxLength: t("AuthInputErrors.textMaxLength"),
    textMinLength: t("AuthInputErrors.textMinLength"),
  };
};
