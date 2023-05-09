import { FunctionComponent, useState } from "react";
import { useTheme } from "styled-components";

import { ReactComponent as Logo } from "@assets/svg/logo/logo.svg";
import { ReactComponent as ProfileIcon } from "@assets/svg/profile/profile-small.svg";
import { ReactComponent as BurgerIcon } from "@assets/svg/tools/burger.svg";
import { ReactComponent as SettingsIcon } from "@assets/svg/tools/settings.svg";
import { ReactComponent as SignInIcon } from "@assets/svg/tools/sign-in.svg";
import trailer from "@assets/video/Inception.mp4";
import { ButtonVariants } from "@constants/buttons";
import { PortalVariant } from "@constants/portal";
import { AppPathes } from "@constants/routes";
import { Colors } from "@constants/styles/colors";
import { TypographyVariant } from "@constants/styles/typography";
import { useClosePortal } from "@hooks/portal/useClosePortal";
import { useOpenPortal } from "@hooks/portal/useOpenPortal";
import { useMediaQuery } from "@hooks/style/useMediaQuery";
import { useAppSelector } from "@hooks/useAppSelector";
import {
  isPortalOpenSelector,
  portalVariantSelector,
} from "@store/slices/portalSlice/selectors";
import { isAuthSelector } from "@store/slices/userSlice/selectors";

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
import RoundButton from "../UI/Buttons/RoundButton";
import VideoPlayer from "../VideoPlayer";

import {
  BurgerWrapper,
  HeaderButtonGroup,
  HeaderWrapper,
  LogoWrapper,
  NavWrapper,
  ProfileBtn,
  ProfileBtnText,
} from "./styles";
import { useHeaderText } from "./config/useHeaderText";
import { onOpenSignInModalMargin, roundBtnExtra } from "./config";

const Header: FunctionComponent = () => {
  const { fontSize, breakPoints } = useTheme();
  const { signInBtn, signUpBtn, drawerTitle, profileBtnText, menuTitle } =
    useHeaderText();
  const isAuth = useAppSelector(isAuthSelector);
  const isPortalOpen = useAppSelector(isPortalOpenSelector);
  const portalVariant = useAppSelector(portalVariantSelector);
  const openSignInPortal = useOpenPortal(PortalVariant.SIGN_IN);
  const openSignUpPortal = useOpenPortal(PortalVariant.SIGN_UP);
  const openSettingsPortal = useOpenPortal(PortalVariant.SETTING);
  const closePortal = useClosePortal();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const isSSize = useMediaQuery(`(max-width: ${breakPoints.s}px)`);
  const isLSize = useMediaQuery(`(max-width: ${breakPoints.l}px)`);

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

  const onOpenBurger = () => {
    setIsBurgerOpen(true);
  };

  const onCloseBurger = () => {
    setIsBurgerOpen(false);
  };

  return (
    <HeaderWrapper>
      <NavWrapper>
        <LogoWrapper to={AppPathes.MAIN}>
          <Logo />
        </LogoWrapper>
        {!isSSize && <Navigation />}
        <BurgerWrapper>
          <BurgerIcon onClick={onOpenBurger} />
        </BurgerWrapper>
        <Drawer
          isOpen={isBurgerOpen}
          onClose={onCloseBurger}
          title={menuTitle}
          children={<Navigation />}
        />
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
          {isLSize ? (
            <RoundButton
              onClick={onOpenSignInModal}
              children={<SignInIcon />}
              extra={roundBtnExtra}
              background={Colors.DARK_GRAY}
            />
          ) : (
            <>
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
            </>
          )}
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
