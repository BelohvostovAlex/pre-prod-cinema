import { useTranslation } from "react-i18next";

export const useProfileText = () => {
  const { t } = useTranslation();

  return {
    userIdText: t("Profile.userId"),
    editProfileText: t("Profile.editProfile"),
    logOutText: t("Profile.logOut"),
    settingsText: t("Profile.settings"),
    altImgText: t("Profile.altImgText"),
    logoTitle: t("Profile.logoTitle"),
  };
};
