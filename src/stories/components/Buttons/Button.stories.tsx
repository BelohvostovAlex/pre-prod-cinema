import { Meta, StoryFn } from "@storybook/react";

import Button from "../../../components/UI/Buttons/Button/index";
import { TypographyVariant } from "../../../constants/styles/typography";
import { ButtonVariants } from "../../../constants/buttons";
import {
  socialBtnHeight,
  socialBtnWidth,
} from "../../../components/AuthForm/config";
import { Colors } from "../../../constants/styles/colors";
import { ReactComponent as FacebookIcon } from "../../../assets/svg/social/facebook.svg";
import { ReactComponent as GithubIcon } from "../../../assets/svg/social/github.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/svg/social/google.svg";

const fontSize = "14px";
const socialBtnFontSize = "8px";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}></Button>;

export const primary = Template.bind({});
primary.args = {
  typography: TypographyVariant.poppins_l,
  fontSize,
  variant: ButtonVariants.PRIMARY,
  children: "Primary",
};

export const secondary = Template.bind({});
secondary.args = {
  typography: TypographyVariant.poppins_l,
  fontSize,
  variant: ButtonVariants.SECONDARY,
  children: "Secondary",
};

export const googleButton = Template.bind({});
googleButton.args = {
  typography: TypographyVariant.inter_sb,
  width: socialBtnWidth,
  height: socialBtnHeight,
  fontSize: socialBtnFontSize,
  backgroundColor: Colors.WHITE,
  color: Colors.BLACK,
  icon: <GoogleIcon />,
  children: "Continue with Google",
};

export const facebookButton = Template.bind({});
facebookButton.args = {
  typography: TypographyVariant.inter_sb,
  width: socialBtnWidth,
  height: socialBtnHeight,
  fontSize: socialBtnFontSize,
  backgroundColor: Colors.FACEBOOK,
  color: Colors.WHITE,
  icon: <FacebookIcon />,
  children: "Sign in with facebook",
};

export const githubButton = Template.bind({});
githubButton.args = {
  typography: TypographyVariant.inter_sb,
  width: socialBtnWidth,
  height: socialBtnHeight,
  fontSize: socialBtnFontSize,
  backgroundColor: Colors.BLACK,
  color: Colors.WHITE,
  icon: <GithubIcon />,
  children: "Sign in with Github",
};
