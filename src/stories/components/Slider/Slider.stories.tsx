import { Meta, StoryFn } from "@storybook/react";

import Slider from "../../../components/Slider";
import { SliderDirectionVariant } from "../../../constants/slider";
import BookSliderItems from "../../../components/BookSliderItems";
import MovieSliderItems from "../../../components/MovieSliderItems";

import { index, sliderHorizontalData, sliderVerticalData } from "./mocks";

export default {
  title: "components/Slider",
  component: Slider,
  argTypes: {},
} as Meta<typeof Slider>;

const Template: StoryFn<typeof Slider> = (args) => <Slider {...args}></Slider>;

export const horizontalSlider = Template.bind({});
horizontalSlider.args = {
  direction: SliderDirectionVariant.HORIZONTAL,
  data: sliderHorizontalData,
  index,
  children: <BookSliderItems data={sliderHorizontalData} index={index} />,
  setIndex: () => "horizontalSlider",
};

export const verticalSlider = Template.bind({});
verticalSlider.args = {
  direction: SliderDirectionVariant.VERTICAL,
  data: sliderVerticalData,
  index,
  children: <MovieSliderItems data={sliderVerticalData} index={index} />,
  setIndex: () => "verticalSlider",
};
