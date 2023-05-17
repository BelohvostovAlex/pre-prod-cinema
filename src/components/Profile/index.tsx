import { FunctionComponent } from "react";

import { useTheme } from "styled-components";

import LogoIcon from "@assets/svg/logo/logo.svg";
import ProfileIcon from "@assets/svg/profile/profile-big.svg";
import EditProfile from "@components/EditProfile";
import Modal from "@components/Modal";
import Settings from "@components/Settings";
import { TypographyVariant } from "@constants/styles/typography";
import { useSignOut } from "@hooks/auth/useSignOut";
import { usePortal } from "@hooks/portal/usePortal";
import { useAppSelector } from "@hooks/useAppSelector";
import SecondaryButton from "@ui/Buttons/SecondaryButton";

import { useProfileText } from "./hooks/useProfileText";
import {
  ProfileGender,
  ProfileIconWrapper,
  ProfileId,
  ProfileImg,
  ProfileInfo,
  ProfileLogoWrapper,
  ProfileMenu,
  ProfileName,
  ProfileWrapper,
} from "./styles";

const Profile: FunctionComponent = () => {
  const { margin } = useTheme();
  const {
    editProfileText,
    logOutText,
    settingsText,
    userIdText,
    altImgText,
    logoTitle,
  } = useProfileText();
  const { gender, id, photo, surname, username } = useAppSelector(
    (state) => state.user.user,
  );
  const [isEditPortalOpen, handleEditPortal] = usePortal();
  const [isSettingPortalOpen, handleSettingPortal] = usePortal();

  const signOut = useSignOut();

  const buttons = [
    {
      text: editProfileText,
      typography: TypographyVariant.poppins_sb,
      onClick: handleEditPortal,
      extra: `margin-bottom: ${margin.mb14}`,
    },
    {
      text: settingsText,
      typography: TypographyVariant.poppins_sb,
      onClick: handleSettingPortal,
      extra: `margin-bottom: ${margin.mb14}`,
    },
    {
      text: logOutText,
      typography: TypographyVariant.poppins_sb,
      onClick: signOut,
      extra: `margin-bottom: ${margin.mb14}`,
    },
  ];

  return (
    <>
      <ProfileWrapper>
        <ProfileInfo>
          <ProfileIconWrapper>
            {photo ? (
              <ProfileImg src={photo} alt={altImgText} title={altImgText} />
            ) : (
              <ProfileIcon title={altImgText} />
            )}
          </ProfileIconWrapper>
          <ProfileName>
            {username} {surname}
          </ProfileName>
          <ProfileId>
            {userIdText}: {id.substring(0, 7)}
          </ProfileId>
          <ProfileGender>{gender}</ProfileGender>
        </ProfileInfo>
        <ProfileMenu>
          {buttons.map(({ extra, onClick, text, typography }, idx) => (
            <SecondaryButton
              key={idx}
              extra={extra}
              onClick={onClick}
              text={text}
              typography={typography}
            />
          ))}
        </ProfileMenu>
        <ProfileLogoWrapper>
          <LogoIcon title={logoTitle} />
        </ProfileLogoWrapper>
      </ProfileWrapper>
      <Modal isOpen={isEditPortalOpen} onClose={handleEditPortal}>
        <EditProfile />
      </Modal>
      <Modal isOpen={isSettingPortalOpen} onClose={handleSettingPortal}>
        <Settings />
      </Modal>
    </>
  );
};

export default Profile;
