import { useTranslation } from "react-i18next";

export const useDrawerText = () => {
  const { t } = useTranslation();

  return {
    closeTitle: t("Drawer.close"),
  };
};
