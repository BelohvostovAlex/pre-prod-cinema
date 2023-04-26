import { Meta, StoryFn } from "@storybook/react";

import RoundButton from "../../../components/UI/Buttons/RoundButton/index";
import { ReactComponent as CloseIcon } from "../../../assets/svg/tools/Close.svg";
import { ReactComponent as PlayIcon } from "../../../assets/svg/tools/play.svg";
import { ReactComponent as PauseIcon } from "../../../assets/svg/tools/pause.svg";
import { Colors } from "../../../constants/styles/colors";
import { extraStylesForRoundBtn } from "../../../components/pagesSections/Main/TrailerBlock/TrailerItem/config";

export default {
  title: "components/RoundButton",
  component: RoundButton,
  argTypes: {},
} as Meta<typeof RoundButton>;

const Template: StoryFn<typeof RoundButton> = (args) => (
  <RoundButton {...args}></RoundButton>
);

export const closeModalButton = Template.bind({});
closeModalButton.args = {
  children: <CloseIcon />,
  background: Colors.EXTRA_DARK_GRAY,
};

export const primary = Template.bind({});
primary.args = {
  children: <CloseIcon />,
};

export const playButton = Template.bind({});
playButton.args = {
  children: <PlayIcon />,
  extra: extraStylesForRoundBtn,
};

export const pauseButton = Template.bind({});
pauseButton.args = {
  children: <PauseIcon />,
};
