import { FunctionComponent } from "react";

import SecondaryButton from "../UI/Buttons/SecondaryButton";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useSignOut } from "../../hooks/authBySocial/useSignOut";
import { useProfileText } from "./config/useProfileText";

import { TypographyVariant } from "../../constants/styles/typography";

// import { ReactComponent as ProfileIcon } from "../../assets/svg/profile/profile-full.svg";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo/logo.svg";
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
import { useOpenPortal } from "../../hooks/portal/useOpenPortal";
import { PortalVariant } from "../../constants/portal";

const Profile: FunctionComponent = () => {
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
            // <ProfileIcon />
            ""
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
          extra={"margin-bottom: 14px"}
        />
        <SecondaryButton
          text={settingsText}
          typography={TypographyVariant.poppins_sb}
          onClick={openSettingPortal}
          extra={"margin-bottom: 14px"}
        />
        <SecondaryButton
          text={logOutText}
          typography={TypographyVariant.poppins_sb}
          extra={"margin-bottom: 14px"}
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
