import { useTranslation } from "react-i18next";

export const useMovieScreenText = () => {
  const { t } = useTranslation();

  return {
    screenTitle: t("Movie.screenTitle"),
    selected: t("Movie.selected"),
    reserved: t("Movie.reserved"),
    available: t("Movie.available"),
  };
};
