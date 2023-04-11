import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

import { AppPathes } from "../../constants/routes";

import { FooterWrapper } from "./styles";

const Footer: FunctionComponent = () => {
  const { pathname } = useLocation();

  const isFooterVisible = pathname !== AppPathes.MAIN;
  return <FooterWrapper visible={isFooterVisible}>Footer</FooterWrapper>;
};

export default Footer;
