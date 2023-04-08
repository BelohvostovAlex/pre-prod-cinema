import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { Nav } from "./styles";
import RouterLink from "../UI/RouterLink";

import { APP_NAV_MENU } from "../../constants/nav";
import { TypographyVariant } from "../../constants/styles/typography";

import { useAppSelector } from "../../hooks/useAppSelector";
import { userTokenSelector } from "../../store/slices/userSlice/selectors";
import { useOpenPortal } from "../../hooks/portal/useOpenPortal";
import { PortalVariant } from "../../constants/portal";
import { AppPathes } from "../../constants/routes";

const Navigation: FunctionComponent = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const token = useAppSelector(userTokenSelector);
  const openSignUpPortal = useOpenPortal(PortalVariant.SIGN_UP);

  const onClick = (to: string) => {
    if (!token && to === AppPathes.BOOKINGS) {
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
          extra={":first-of-type {margin-right: 30px;}"}
          $active={pathname === path}
          onClick={onClick}
        />
      ))}
    </Nav>
  );
};

export default Navigation;
