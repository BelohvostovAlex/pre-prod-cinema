import { useTranslation } from "react-i18next";

export const useErrorTranslation = () => {
  const { t } = useTranslation();

  return {
    userAlreadyExistsViaSocialError: t("Errors.userAlreadyExistsViaSocial"),
    popupClosedByUser: t("Errors.popupClosedByUser"),
    emailAlreadyInUse: t("Errors.emailAlreadyInUse"),
    wrongPassword: t("Errors.wrongPassword"),
    userNotFound: t("Errors.userNotFound"),
    requiresRecentLogin: t("Errors.requiresRecentLogin"),
  };
};
