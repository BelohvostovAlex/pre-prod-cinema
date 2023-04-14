import { useTranslation } from "react-i18next";

export const useFooterText = () => {
  const { t } = useTranslation();

  return {
    firstColumnTitle: t("Footer.firstColumn.title"),
    secondColumnTitle: t("Footer.secondColumn.title"),
    thirdColumnTitle: t("Footer.thirdColumn.title"),
    firstColumnToMain: t("Footer.firstColumn.toMain"),
    secondColumnToMain: t("Footer.secondColumn.toMain"),
    thirdColumnToMain: t("Footer.thirdColumn.toMain"),
    subscribe: t("Footer.subscribe"),
    subscribeInputPlaceholder: t("Footer.subscribeInputPlaceholder"),
    subscribeSubtext: t("Footer.subscribeSubtext"),
  };
};
