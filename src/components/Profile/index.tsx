import { FunctionComponent } from "react";

import { useProfileText } from "./config/useProfileText";
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
import SecondaryButton from "../UI/Buttons/SecondaryButton";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useSignOut } from "../../hooks/authBySocial/useSignOut";

import { TypographyVariant } from "../../constants/styles/typography";

import { ReactComponent as LogoIcon } from "../../assets/svg/logo/logo.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/profile/profile-big.svg";
import { useOpenPortal } from "../../hooks/portal/useOpenPortal";
import { PortalVariant } from "../../constants/portal";
import { useTheme } from "styled-components";

const Profile: FunctionComponent = () => {
  const { margin } = useTheme();
  const { editProfileText, logOutText, settingsText, userIdText, altImgText } =
    useProfileText();
  const { gender, id, photo, surname, username } = useAppSelector(
    (state) => state.user.user,
  );
  const openEditPortal = useOpenPortal(PortalVariant.EDIT_PROFILE);
  const openSettingPortal = useOpenPortal(PortalVariant.SETTING);

  const signOut = useSignOut();

  return (
    <ProfileWrapper>
      <ProfileInfo>
        <ProfileIconWrapper>
          {photo ? (
            <ProfileImg src={photo} alt={altImgText} />
          ) : (
            <ProfileIcon />
          )}
        </ProfileIconWrapper>
        <ProfileName>
          {username} {surname}
        </ProfileName>
        <ProfileId>
          {userIdText}: {id.slice(0, 7)}
        </ProfileId>
        <ProfileGender>{gender}</ProfileGender>
      </ProfileInfo>
      <ProfileMenu>
        <SecondaryButton
          text={editProfileText}
          typography={TypographyVariant.poppins_sb}
          onClick={openEditPortal}
          extra={`margin-bottom: ${margin.mb14}`}
        />
        <SecondaryButton
          text={settingsText}
          typography={TypographyVariant.poppins_sb}
          onClick={openSettingPortal}
          extra={`margin-bottom: ${margin.mb14}`}
        />
        <SecondaryButton
          text={logOutText}
          typography={TypographyVariant.poppins_sb}
          extra={`margin-bottom: ${margin.mb14}`}
          onClick={signOut}
        />
      </ProfileMenu>
      <ProfileLogoWrapper>
        <LogoIcon />
      </ProfileLogoWrapper>
    </ProfileWrapper>
  );
};

export default Profile;
