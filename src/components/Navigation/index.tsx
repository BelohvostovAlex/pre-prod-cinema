import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { APP_NAV_MENU } from "../../constants/nav";
import { AppPathes } from "../../constants/routes";
import { TypographyVariant } from "../../constants/styles/typography";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userTokenSelector } from "../../store/slices/userSlice/selectors";
import RouterLink from "../../ui/RouterLink";

import { Nav } from "./styles";
import { extraStylesRouterLink } from "./config";
import { NavigationProps } from "./interfaces";

const Navigation: FunctionComponent<NavigationProps> = ({
  handlePortalOpen,
}) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const token = useAppSelector(userTokenSelector);

  const onClick = (to: string) => {
    if (!token && to === AppPathes.BOOKING) {
      handlePortalOpen();
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
