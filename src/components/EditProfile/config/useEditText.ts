import { useTranslation } from "react-i18next";

export const useEditText = () => {
  const { t } = useTranslation();

  return {
    title: t("EditProfile.title"),
    titleSpan: t("EditProfile.titleSpan"),
    submitBtn: t("EditProfile.submitBtn"),
    male: t("EditProfile.male"),
    female: t("EditProfile.female"),
    uploadImg: t("EditProfile.uploadImg"),
    passPlaceholder: t("EditProfile.newPass"),
  };
};