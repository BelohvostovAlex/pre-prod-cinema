import { FunctionComponent, useState } from "react";

import ProfileIcon from "@assets/svg/profile/profile-small.svg";
import Drawer from "@components/Drawer";
import Modal from "@components/Modal";
import Profile from "@components/Profile";
import SignIn from "@components/SignIn";
import SignUp from "@components/SignUp";
import { usePortal } from "@hooks/portal/usePortal";
import { useAppSelector } from "@hooks/useAppSelector";
import { isAuthSelector } from "@store/slices/userSlice/selectors";

import HeaderButtonsGroup from "./HeaderButtonsGroup";
import HeaderNavigationGroup from "./HeaderNavigationGroup";
import { useHeaderText } from "./hooks/useHeaderText";
import { HeaderWrapper, ProfileBtn, ProfileBtnText } from "./styles";

const Header: FunctionComponent = () => {
  const { drawerTitle, profileBtnText, profileTitle } = useHeaderText();
  const isAuth = useAppSelector(isAuthSelector);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const [isAuthPortalOpen, handleAuthPortalOpen] = usePortal();

  const onFormTypeChange = () => {
    if (isSignUp) {
      setIsSignUp(false);
    } else {
      setIsSignUp(true);
    }
  };

  const handleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderNavigationGroup />
        {isAuth ? (
          <>
            <ProfileBtn onClick={handleDrawer} data-cy="profile">
              <ProfileBtnText>{profileBtnText}</ProfileBtnText>
              <ProfileIcon title={profileTitle} />
            </ProfileBtn>
            <Drawer
              isOpen={isDrawerOpen}
              onClose={handleDrawer}
              title={drawerTitle}
            >
              <Profile />
            </Drawer>
          </>
        ) : (
          <HeaderButtonsGroup
            handleAuthPortalOpen={handleAuthPortalOpen}
            setIsSignUp={setIsSignUp}
          />
        )}
      </HeaderWrapper>
      <Modal onClose={handleAuthPortalOpen} isOpen={isAuthPortalOpen}>
        {isSignUp ? (
          <SignUp
            onFormTypeChange={onFormTypeChange}
            signUp={isSignUp}
            handlePortal={handleAuthPortalOpen}
          />
        ) : (
          <SignIn
            onFormTypeChange={onFormTypeChange}
            signUp={isSignUp}
            handlePortal={handleAuthPortalOpen}
          />
        )}
      </Modal>
    </>
  );
};

export default Header;
