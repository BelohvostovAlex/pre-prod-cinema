import { useTranslation } from "react-i18next";

export const useEditText = () => {
  const { t } = useTranslation();

  return {
    title: t("EditProfile.title"),
    titleSpan: t("EditProfile.titleSpan"),
  };
};
