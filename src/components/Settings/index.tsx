import { FunctionComponent } from "react";

import MoonIcon from "@assets/svg/theme/moon.svg";
import SunIcon from "@assets/svg/theme/sun.svg";
import ModalTitle from "@components/Modal/ModalTitle";
import i18n from "@config/i18n";
import { Locales } from "@constants/locales";
import { ThemeTypes } from "@constants/styles/theme";
import { useActions } from "@hooks/useActionts";
import RoundButton from "@ui/Buttons/RoundButton";

import {
  extraStylesRoundButtonLang,
  extraStylesRoundButtonTheme,
} from "./config";
import { useSettingsText } from "./hooks/useSettingsText";
import {
  BoxTitle,
  BoxWrapper,
  SettingsControlWrapper,
  SettingsWrapper,
} from "./styles";

const Settings: FunctionComponent = () => {
  const {
    changeThemeText,
    chooseLangText,
    en,
    ru,
    title,
    titleSpan,
    darkTitle,
    lightTitle,
  } = useSettingsText();
  const { changeTheme } = useActions();
  const handleLangRu = () => {
    i18n.changeLanguage(Locales.RU);
  };
  const handleLangEng = () => {
    i18n.changeLanguage(Locales.EN);
  };

  const handleChangeTheme = (theme: ThemeTypes) => () => changeTheme(theme);
  return (
    <SettingsWrapper data-cy="settings-block">
      <ModalTitle text={title} spanText={titleSpan} />
      <SettingsControlWrapper>
        <BoxWrapper data-cy="lang-buttons-wrapper">
          <BoxTitle data-cy="lang-text">{chooseLangText}: </BoxTitle>
          <RoundButton
            onClick={handleLangRu}
            extra={extraStylesRoundButtonLang}
          >
            {ru}
          </RoundButton>
          <RoundButton onClick={handleLangEng}>{en}</RoundButton>
        </BoxWrapper>
        <BoxWrapper data-cy="theme-buttons-wrapper">
          <BoxTitle>{changeThemeText}: </BoxTitle>
          <RoundButton
            onClick={handleChangeTheme(ThemeTypes.DARK)}
            extra={extraStylesRoundButtonTheme}
          >
            <MoonIcon title={darkTitle} />
          </RoundButton>
          <RoundButton onClick={handleChangeTheme(ThemeTypes.LIGHT)}>
            <SunIcon title={lightTitle} />
          </RoundButton>
        </BoxWrapper>
      </SettingsControlWrapper>
    </SettingsWrapper>
  );
};

export default Settings;
