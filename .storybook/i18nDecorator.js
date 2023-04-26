import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import MainLoader from "../src/components/Loader/MainLoader/index";

import i18n from "../src/i18n";

export const i18nDecorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<MainLoader />}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
