import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { APP_NAV_MENU } from "@constants/nav";
import { PortalVariant } from "@constants/portal";
import { AppPathes } from "@constants/routes";
import { TypographyVariant } from "@constants/styles/typography";
import { useOpenPortal } from "@hooks/portal/useOpenPortal";
import { useAppSelector } from "@hooks/useAppSelector";
import { userTokenSelector } from "@store/slices/userSlice/selectors";

import RouterLink from "../UI/RouterLink";

import { extraStylesRouterLink } from "./config";
import { Nav } from "./styles";

const Navigation: FunctionComponent = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const token = useAppSelector(userTokenSelector);
  const openSignUpPortal = useOpenPortal(PortalVariant.SIGN_UP);

  const onClick = (to: string) => {
    if (!token && to === AppPathes.BOOKING) {
      openSignUpPortal();
    }
  };
  return (
    <Nav>
      {APP_NAV_MENU.map(({ text, path }) => (
        <RouterLink
          key={path}
          text={t(`Nav_menu.${text}`)}
          to={path}
          typography={TypographyVariant.poppins_l}
          extra={extraStylesRouterLink}
          $active={pathname === path}
          onClick={onClick}
        />
      ))}
    </Nav>
  );
};

export default Navigation;
