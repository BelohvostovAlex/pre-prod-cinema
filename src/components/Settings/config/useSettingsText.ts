import { useTranslation } from "react-i18next";

export const useSettingsText = () => {
  const { t } = useTranslation();

  return {
    title: t("Settings.title"),
    titleSpan: t("Settings.titleSpan"),
    chooseLangText: t("Settings.chooseLang"),
    ru: t("Settings.ru"),
    en: t("Settings.en"),
    changeThemeText: t("Settings.changeTheme"),
  };
};
