import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import RouterLink from "../UI/RouterLink";

import { APP_NAV_MENU } from "../../constants/nav";
import { TypographyVariant } from "../../constants/styles/typography";

import { Nav } from "./styles";

const Navigation: FunctionComponent = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <Nav>
      {APP_NAV_MENU.map(({ text, path }) => (
        <RouterLink
          key={path}
          text={t(`Nav_menu.${text}`)}
          to={path}
          typography={TypographyVariant.poppins_l}
          extra={":first-of-type {margin-right: 30px;}"}
          $active={location.pathname === path}
        />
      ))}
    </Nav>
  );
};

export default Navigation;
