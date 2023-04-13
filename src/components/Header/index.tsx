import { FunctionComponent, useState } from "react";
import { useTheme } from "styled-components";

import { ReactComponent as Logo } from "../../assets/svg/logo/logo.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/profile/profile-small.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg/tools/settings.svg";
import trailer from "../../assets/video/Inception.mp4";
import { ButtonVariants } from "../../constants/buttons";
import { PortalVariant } from "../../constants/portal";
import { AppPathes } from "../../constants/routes";
import { TypographyVariant } from "../../constants/styles/typography";
import { useClosePortal } from "../../hooks/portal/useClosePortal";
import { useOpenPortal } from "../../hooks/portal/useOpenPortal";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  isPortalOpenSelector,
  portalVariantSelector,
} from "../../store/slices/portalSlice/selectors";
import { isAuthSelector } from "../../store/slices/userSlice/selectors";
import Drawer from "../Drawer";
import EditProfile from "../EditProfile";
import Modal from "../Modal";
import Navigation from "../Navigation";
import Portal from "../Portal";
import Profile from "../Profile";
import Settings from "../Settings";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Button from "../UI/Buttons/Button";
import VideoPlayer from "../VideoPlayer";

import {
  HeaderButtonGroup,
  HeaderWrapper,
  LogoWrapper,
  NavWrapper,
  ProfileBtn,
  ProfileBtnText,
} from "./styles";
import { useHeaderText } from "./config/useHeaderText";
import { onOpenSignInModalMargin } from "./config";

const Header: FunctionComponent = () => {
  const { fontSize } = useTheme();
  const { signInBtn, signUpBtn, drawerTitle, profileBtnText } = useHeaderText();
  const isAuth = useAppSelector(isAuthSelector);
  const isPortalOpen = useAppSelector(isPortalOpenSelector);
  const portalVariant = useAppSelector(portalVariantSelector);
  const openSignInPortal = useOpenPortal(PortalVariant.SIGN_IN);
  const openSignUpPortal = useOpenPortal(PortalVariant.SIGN_UP);
  const openSettingsPortal = useOpenPortal(PortalVariant.SETTING);
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
            variant={ButtonVariants.SECONDARY}
            fontSize={fontSize[14]}
            onClick={onOpenSignUpModal}
          >
            {signUpBtn}
          </Button>
          <Button
            typography={TypographyVariant.poppins_l}
            variant={ButtonVariants.PRIMARY}
            margin={onOpenSignInModalMargin}
            fontSize={fontSize[14]}
            onClick={onOpenSignInModal}
          >
            {signInBtn}
          </Button>
          <SettingsIcon onClick={openSettingsPortal} />
        </HeaderButtonGroup>
      )}
      <Portal showContent={isPortalOpen}>
        <Modal onClose={closePortal}>
          {portalVariant === PortalVariant.SIGN_UP && (
            <SignUp onFormTypeChange={onFormTypeChange} signUp={isSignUp} />
          )}
          {portalVariant === PortalVariant.SIGN_IN && (
            <SignIn onFormTypeChange={onFormTypeChange} signUp={isSignUp} />
          )}
          {portalVariant === PortalVariant.EDIT_PROFILE && <EditProfile />}
          {portalVariant === PortalVariant.SETTING && <Settings />}
          {portalVariant === PortalVariant.VIDEO_TRAILER && (
            <VideoPlayer src={trailer} />
          )}
        </Modal>
      </Portal>
    </HeaderWrapper>
  );
};

export default Header;
