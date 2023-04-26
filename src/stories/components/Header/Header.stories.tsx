import { Meta, StoryFn } from "@storybook/react";

import Header from "../../../components/Header";

export default {
  title: "components/Header",
  component: Header,
  argTypes: {},
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args}></Header>;

export const header = Template.bind({});
header.args = {};
