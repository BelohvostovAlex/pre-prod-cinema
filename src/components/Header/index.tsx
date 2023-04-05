import { FunctionComponent, useState } from "react";

import Button from "../UI/Buttons/Button";
import Portal from "../Portal";
import Modal from "../Modal";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Profile from "../Profile";
import Navigation from "../Navigation";
import Drawer from "../Drawer";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useOpenPortal } from "../../hooks/portal/useOpenPortal";
import { useClosePortal } from "../../hooks/portal/useClosePortal";
import { isAuthSelector } from "../../store/slices/userSlice/selectors";
import {
  isPortalOpenSelector,
  portalVariantSelector,
} from "../../store/slices/portalSlice/selectors";
import { useHeaderText } from "./config/useHeaderText";

import { ButtonTypes } from "../../constants/buttons";
import { TypographyVariant } from "../../constants/styles/typography";
import { AppPathes } from "../../constants/routes";

import { ReactComponent as Logo } from "../../assets/svg/logo/logo.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg/tools/settings.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/profile/profile-small.svg";
import {
  HeaderButtonGroup,
  HeaderWrapper,
  LogoWrapper,
  NavWrapper,
  ProfileBtn,
  ProfileBtnText,
} from "./styles";
import { PortalVariant } from "../../constants/portal";
import EditProfile from "../EditProfile";
import Settings from "../Settings";

const Header: FunctionComponent = () => {
  const { signInBtn, signUpBtn, drawerTitle, profileBtnText } = useHeaderText();
  const isAuth = useAppSelector(isAuthSelector);
  const isPortalOpen = useAppSelector(isPortalOpenSelector);
  const portalVariant = useAppSelector(portalVariantSelector);
  const openSignInPortal = useOpenPortal(PortalVariant.SIGN_IN);
  const openSignUpPortal = useOpenPortal(PortalVariant.SIGN_UP);
  const closePortal = useClosePortal();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const onOpenSignUpModal = () => {
    openSignUpPortal();
    setIsSignUp(true);
  };
  const onOpenSignInModal = () => {
    openSignInPortal();
    setIsSignUp(false);
  };

  const onFormTypeChange = () => {
    if (isSignUp) {
      setIsSignUp(false);
    } else {
      setIsSignUp(true);
    }
  };

  const onOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <HeaderWrapper>
      <NavWrapper>
        <LogoWrapper to={AppPathes.MAIN}>
          <Logo />
        </LogoWrapper>
        <Navigation />
      </NavWrapper>
      {isAuth ? (
        <>
          <ProfileBtn onClick={onOpenDrawer}>
            <ProfileBtnText>{profileBtnText}</ProfileBtnText>
            <ProfileIcon />
          </ProfileBtn>
          <Drawer
            isOpen={isDrawerOpen}
            onClose={onCloseDrawer}
            title={drawerTitle}
          >
            <Profile />
          </Drawer>
        </>
      ) : (
        <HeaderButtonGroup>
          <Button
            typography={TypographyVariant.poppins_l}
            buttonType={ButtonTypes.SECONDARY}
            fontSize="14px"
            onClick={onOpenSignUpModal}
          >
            {signUpBtn}
          </Button>
          <Button
            typography={TypographyVariant.poppins_l}
            buttonType={ButtonTypes.PRIMARY}
            margin="0px 35px 0px 20px"
            fontSize="14px"
            onClick={onOpenSignInModal}
          >
            {signInBtn}
          </Button>
          <SettingsIcon height="25px" width="25px" cursor="pointer" />
        </HeaderButtonGroup>
      )}
      <Portal showContent={isPortalOpen}>
        <Modal onClose={closePortal} width="500px">
          {portalVariant === PortalVariant.SIGN_UP && (
            <SignUp onFormTypeChange={onFormTypeChange} signUp={isSignUp} />
          )}
          {portalVariant === PortalVariant.SIGN_IN && (
            <SignIn onFormTypeChange={onFormTypeChange} signUp={isSignUp} />
          )}
          {portalVariant === PortalVariant.EDIT_PROFILE && <EditProfile />}
          {portalVariant === PortalVariant.SETTING && <Settings />}
        </Modal>
      </Portal>
    </HeaderWrapper>
  );
};

export default Header;
