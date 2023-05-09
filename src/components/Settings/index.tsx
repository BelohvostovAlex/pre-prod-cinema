import { FunctionComponent } from "react";

import { ReactComponent as MoonIcon } from "@assets/svg/theme/moon.svg";
import { ReactComponent as SunIcon } from "@assets/svg/theme/sun.svg";
import { Locales } from "@constants/locales";
import { ThemeTypes } from "@constants/styles/theme";
import { useActions } from "@hooks/useActionts";

import i18n from "../../i18n";
import ModalTitle from "../Modal/ModalTitle";
import RoundButton from "../UI/Buttons/RoundButton";

import {
  extraStylesRoundButtonLang,
  extraStylesRoundButtonTheme,
} from "./config";
import { useSettingsText } from "./config/useSettingsText";
import {
  BoxTitle,
  BoxWrapper,
  SettingsControlWrapper,
  SettingsWrapper,
} from "./styles";

const Settings: FunctionComponent = () => {
  const { changeThemeText, chooseLangText, en, ru, title, titleSpan } =
    useSettingsText();
  const { changeTheme } = useActions();
  const handleLangRu = () => {
    i18n.changeLanguage(Locales.RU);
  };
  const handleLangEng = () => {
    i18n.changeLanguage(Locales.EN);
  };

  const handleChangeTheme = (theme: ThemeTypes) => () => changeTheme(theme);
  return (
    <SettingsWrapper>
      <ModalTitle text={title} spanText={titleSpan} />
      <SettingsControlWrapper>
        <BoxWrapper>
          <BoxTitle>{chooseLangText}: </BoxTitle>
          <RoundButton
            onClick={handleLangRu}
            extra={extraStylesRoundButtonLang}
          >
            {ru}
          </RoundButton>
          <RoundButton onClick={handleLangEng}>{en}</RoundButton>
        </BoxWrapper>
        <BoxWrapper>
          <BoxTitle>{changeThemeText}: </BoxTitle>
          <RoundButton
            onClick={handleChangeTheme(ThemeTypes.DARK)}
            extra={extraStylesRoundButtonTheme}
          >
            <MoonIcon />
          </RoundButton>
          <RoundButton onClick={handleChangeTheme(ThemeTypes.LIGHT)}>
            <SunIcon />
          </RoundButton>
        </BoxWrapper>
      </SettingsControlWrapper>
    </SettingsWrapper>
  );
};

export default Settings;
