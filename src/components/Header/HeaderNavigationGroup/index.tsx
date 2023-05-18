import { FunctionComponent, useState } from "react";

import Logo from "@assets/svg/logo/logo.svg";
import BurgerIcon from "@assets/svg/tools/burger.svg";
import Drawer from "@components/Drawer";
import Navigation from "@components/Navigation";
import { AppPathes } from "@constants/routes";
import { useMediaQuery } from "@hooks/style/useMediaQuery";

import { useHeaderText } from "../hooks/useHeaderText";

import { BurgerWrapper, LogoWrapper, NavWrapper } from "./styles";

const HeaderNavigationGroup: FunctionComponent = () => {
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
      {!isSSize && <Navigation />}
      <BurgerWrapper>
        <BurgerIcon
          onClick={handleBurger}
          title={menuTitle}
          data-cy="burger-button"
        />
      </BurgerWrapper>
      <Drawer
        isOpen={isBurgerOpen}
        onClose={handleBurger}
        title={menuTitle}
        children={<Navigation />}
      />
    </NavWrapper>
  );
};

export default HeaderNavigationGroup;
