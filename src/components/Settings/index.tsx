import { FunctionComponent } from "react";
import { useSettingsText } from "./config/useSettingsText";

import {
  SettingsWrapper,
  BoxWrapper,
  BoxTitle,
  SettingsControlWrapper,
} from "./styles";
import i18n from "../../i18n";
import RoundButton from "../UI/Buttons/RoundButton";
import ModalTitle from "../Modal/ModalTitle";
import SecondaryButton from "../UI/Buttons/SecondaryButton";
import { TypographyVariant } from "../../constants/styles/typography";
import { useActions } from "../../hooks/useActionts";
import { Locales } from "../../constants/locales";

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
  const { changeTheme } = useActions();
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
          <RoundButton onClick={handleLangRu} extra={"margin-right: 10px"}>
            {ru}
          </RoundButton>
          <RoundButton onClick={handleLangEng}>{en}</RoundButton>
        </BoxWrapper>
        <BoxWrapper>
          <BoxTitle>{changeThemeText}: </BoxTitle>
          <SecondaryButton
            onClick={changeTheme}
            text={dark}
            typography={TypographyVariant.poppins_l}
            extra={"margin-right: 10px;"}
          />
          <SecondaryButton
            onClick={changeTheme}
            text={light}
            typography={TypographyVariant.poppins_l}
          />
        </BoxWrapper>
      </SettingsControlWrapper>
    </SettingsWrapper>
  );
};

export default Settings;
