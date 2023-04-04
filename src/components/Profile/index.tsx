import { FunctionComponent } from "react";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useSignOut } from "../../hooks/authBySocial/useSignOut";

import { ReactComponent as ProfileIcon } from "../../assets/svg/profile/profile-full.svg";
import {
  ProfileGender,
  ProfileIconWrapper,
  ProfileId,
  ProfileInfo,
  ProfileMenu,
  ProfileName,
  ProfileWrapper,
} from "./styles";
import RouterLink from "../UI/RouterLink";
import { TypographyVariant } from "../../constants/styles/typography";

const Profile: FunctionComponent = () => {
  const user = useAppSelector((state) => state.user.user);
  const signOut = useSignOut();

  return (
    <ProfileWrapper>
      <ProfileInfo>
        <ProfileIconWrapper>
          <ProfileIcon />
        </ProfileIconWrapper>
        <ProfileName>{user.username}</ProfileName>
        <ProfileId>user id: {user.id}</ProfileId>
        <ProfileGender>{user.gender}</ProfileGender>
      </ProfileInfo>
      <ProfileMenu>
        <RouterLink
          text="Edit profile"
          to="/profile"
          typography={TypographyVariant.poppins_sb}
          extra="font-size: 21px"
          borderBottom
        />
      </ProfileMenu>
      <button onClick={signOut}>Sign out</button>
    </ProfileWrapper>
  );
};

export default Profile;
