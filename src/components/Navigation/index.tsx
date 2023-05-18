import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { APP_NAV_MENU_PRIVATE, APP_NAV_MENU_PUBLIC } from "@constants/nav";
import { TypographyVariant } from "@constants/styles/typography";
import { useAppSelector } from "@hooks/useAppSelector";
import { userTokenSelector } from "@store/slices/userSlice/selectors";
import RouterLink from "@ui/RouterLink";

import { extraStylesRouterLink } from "./config";
import { Nav } from "./styles";

const Navigation: FunctionComponent = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const token = useAppSelector(userTokenSelector);

  return (
    <Nav>
      {token
        ? APP_NAV_MENU_PRIVATE.map(({ text, path }) => (
            <RouterLink
              key={path}
              text={t(`Nav_menu.${text}`)}
              to={path}
              typography={TypographyVariant.poppins_l}
              extra={extraStylesRouterLink}
              $active={pathname === path}
            />
          ))
        : APP_NAV_MENU_PUBLIC.map(({ text, path }) => (
            <RouterLink
              key={path}
              text={t(`Nav_menu.${text}`)}
              to={path}
              typography={TypographyVariant.poppins_l}
              extra={extraStylesRouterLink}
              $active={pathname === path}
            />
          ))}
    </Nav>
  );
};

export default Navigation;
