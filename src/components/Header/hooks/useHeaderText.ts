import { useTranslation } from "react-i18next";

export const useHeaderText = () => {
  const { t } = useTranslation();

  return {
    signInBtn: t("AuthForm.signInBtn"),
    signUpBtn: t("AuthForm.signUpBtn"),
    drawerTitle: t("Drawer.title"),
    profileBtnText: t("Profile.headerBtnText"),
    menuTitle: t("Nav_menu.Title"),
    logoTitle: t("Profile.logoTitle"),
    settingsTitle: t("Settings.iconTitle"),
    profileTitle: t("Profile.headerBtnText"),
  };
};
