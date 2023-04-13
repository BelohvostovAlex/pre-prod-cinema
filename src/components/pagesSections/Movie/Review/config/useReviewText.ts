import { useTranslation } from "react-i18next";

export const useReviewText = () => {
  const { t } = useTranslation();

  return {
    title: t("Review.title"),
    from: t("Review.from"),
    readMore: t("Review.readMore"),
    hide: t("Review.hide"),
  };
};
