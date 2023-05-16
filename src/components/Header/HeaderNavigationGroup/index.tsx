import { FunctionComponent, useState } from "react";

import { AppPathes } from "../../../constants/routes";
import { useMediaQuery } from "../../../hooks/style/useMediaQuery";
import { useHeaderText } from "../hooks/useHeaderText";
import Navigation from "../../Navigation";
import { ReactComponent as BurgerIcon } from "../../../assets/svg/tools/burger.svg";
import { ReactComponent as Logo } from "../../../assets/svg/logo/logo.svg";
import Drawer from "../../Drawer";

import { BurgerWrapper, LogoWrapper, NavWrapper } from "./styles";
import { HeaderNavigationGroupProps } from "./interfaces";

const HeaderNavigationGroup: FunctionComponent<HeaderNavigationGroupProps> = ({
  handleAuthPortalOpen,
}) => {
  const { menuTitle, logoTitle } = useHeaderText();
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const isSSize = useMediaQuery("s");

  const handleBurger = () => {
    setIsBurgerOpen((prev) => !prev);
  };
  return (
    <NavWrapper>
      <LogoWrapper to={AppPathes.MAIN}>
        <Logo title={logoTitle} />
      </LogoWrapper>
      {!isSSize && <Navigation handlePortalOpen={handleAuthPortalOpen} />}
      <BurgerWrapper>
        <BurgerIcon onClick={handleBurger} title={menuTitle} />
      </BurgerWrapper>
      <Drawer
        isOpen={isBurgerOpen}
        onClose={handleBurger}
        title={menuTitle}
        children={<Navigation handlePortalOpen={handleAuthPortalOpen} />}
      />
    </NavWrapper>
  );
};

export default HeaderNavigationGroup;
