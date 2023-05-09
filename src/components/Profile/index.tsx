import { FunctionComponent } from "react";
import { useTheme } from "styled-components";

import { ReactComponent as LogoIcon } from "@assets/svg/logo/logo.svg";
import { ReactComponent as ProfileIcon } from "@assets/svg/profile/profile-big.svg";
import { PortalVariant } from "@constants/portal";
import { TypographyVariant } from "@constants/styles/typography";
import { useSignOut } from "@hooks/auth/useSignOut";
import { useOpenPortal } from "@hooks/portal/useOpenPortal";
import { useAppSelector } from "@hooks/useAppSelector";

import SecondaryButton from "../UI/Buttons/SecondaryButton";

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
