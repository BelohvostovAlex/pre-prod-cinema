import { useTranslation } from "react-i18next";

export const useHeaderText = () => {
  const { t } = useTranslation();

  return {
    signInBtn: t("AuthForm.signInBtn"),
    signUpBtn: t("AuthForm.signUpBtn"),
  };
};