import { FunctionComponent } from "react";

import { Locales } from "../../constants/locales";
import { TypographyVariant } from "../../constants/styles/typography";
import { useActions } from "../../hooks/useActionts";
import i18n from "../../i18n";
import ModalTitle from "../Modal/ModalTitle";
import RoundButton from "../UI/Buttons/RoundButton";
import SecondaryButton from "../UI/Buttons/SecondaryButton";

import {
  BoxTitle,
  BoxWrapper,
  SettingsControlWrapper,
  SettingsWrapper,
} from "./styles";
import { useSettingsText } from "./config/useSettingsText";
import { extraStylesRoundButton, extraStylesSecondaryButton } from "./config";

const Settings: FunctionComponent = () => {
  const {
    changeThemeText,
    chooseLangText,
    dark,
    en,
    light,
    ru,
    title,
    titleSpan,
  } = useSettingsText();
  const { changeDarkTheme, changeLightTheme } = useActions();
  const handleLangRu = () => {
    i18n.changeLanguage(Locales.RU);
  };
  const handleLangEng = () => {
    i18n.changeLanguage(Locales.EN);
  };
  return (
    <SettingsWrapper>
      <ModalTitle text={title} spanText={titleSpan} />
      <SettingsControlWrapper>
        <BoxWrapper>
          <BoxTitle>{chooseLangText}: </BoxTitle>
          <RoundButton onClick={handleLangRu} extra={extraStylesRoundButton}>
            {ru}
          </RoundButton>
          <RoundButton onClick={handleLangEng}>{en}</RoundButton>
        </BoxWrapper>
        <BoxWrapper>
          <BoxTitle>{changeThemeText}: </BoxTitle>
          <SecondaryButton
            onClick={changeDarkTheme}
            text={dark}
            typography={TypographyVariant.poppins_l}
            extra={extraStylesSecondaryButton}
          />
          <SecondaryButton
            onClick={changeLightTheme}
            text={light}
            typography={TypographyVariant.poppins_l}
          />
        </BoxWrapper>
      </SettingsControlWrapper>
    </SettingsWrapper>
  );
};

export default Settings;
