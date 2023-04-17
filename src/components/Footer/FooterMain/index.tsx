import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";

import { AppPathes } from "../../../constants/routes";
import { ReactComponent as LogoIcon } from "../../../assets/svg/logo/logo.svg";
import { ReactComponent as TelegramIcon } from "../../../assets/svg/social/telegram.svg";
import { InputTypes } from "../../Input/interfaces";

import {
  FooterColumn,
  FooterColumnItem,
  FooterColumnSubscribeSubText,
  FooterColumnTitle,
  FooterLogo,
  FooterSubscribeInput,
  FooterSubscribeInputWrapper,
  FooterWrapper,
} from "./styles";
import { useFooterText } from "./config/useFooterText";

const FooterMain: FunctionComponent = () => {
  const { pathname } = useLocation();
  const {
    firstColumnTitle,
    firstColumnToMain,
    secondColumnTitle,
    secondColumnToMain,
    subscribe,
    subscribeInputPlaceholder,
    subscribeSubtext,
    thirdColumnTitle,
    thirdColumnToMain,
  } = useFooterText();

  const isFooterVisible = pathname !== AppPathes.MAIN;
  return (
    <FooterWrapper visible={isFooterVisible}>
      <FooterLogo>
        <LogoIcon />
      </FooterLogo>
      <FooterColumn>
        <FooterColumnTitle>{firstColumnTitle}</FooterColumnTitle>
        <FooterColumnItem>
          <Link to={AppPathes.MAIN}>{firstColumnToMain}</Link>
        </FooterColumnItem>
        <FooterColumnItem>
          <Link to={AppPathes.MAIN}>{firstColumnToMain}</Link>
        </FooterColumnItem>
        <FooterColumnItem>
          <Link to={AppPathes.MAIN}>{firstColumnToMain}</Link>
        </FooterColumnItem>
        <FooterColumnItem>
          <Link to={AppPathes.MAIN}>{firstColumnToMain}</Link>
        </FooterColumnItem>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>{secondColumnTitle}</FooterColumnTitle>
        <FooterColumnItem>
          <Link to={AppPathes.MAIN}>{secondColumnToMain}</Link>
        </FooterColumnItem>
        <FooterColumnItem>
          <Link to={AppPathes.MAIN}>{secondColumnToMain}</Link>
        </FooterColumnItem>
        <FooterColumnItem>
          <Link to={AppPathes.MAIN}>{secondColumnToMain}</Link>
        </FooterColumnItem>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>{thirdColumnTitle}</FooterColumnTitle>
        <FooterColumnItem>
          <Link to={AppPathes.MAIN}>{thirdColumnToMain}</Link>
        </FooterColumnItem>
        <FooterColumnItem>
          <Link to={AppPathes.MAIN}>{thirdColumnToMain}</Link>
        </FooterColumnItem>
        <FooterColumnItem>
          <Link to={AppPathes.MAIN}>{thirdColumnToMain}</Link>
        </FooterColumnItem>
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>{subscribe}</FooterColumnTitle>
        <FooterSubscribeInputWrapper>
          <FooterSubscribeInput
            type={InputTypes.EMAIL}
            placeholder={subscribeInputPlaceholder}
          />
          <TelegramIcon />
        </FooterSubscribeInputWrapper>
        <FooterColumnSubscribeSubText>
          {subscribeSubtext}
        </FooterColumnSubscribeSubText>
      </FooterColumn>
    </FooterWrapper>
  );
};

export default FooterMain;
