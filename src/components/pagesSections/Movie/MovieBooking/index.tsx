import { FunctionComponent, useState } from "react";

import { useMovieText } from "../../../../pages/Movie/config/useMovieText";
import Divider from "../../../UI/Divider";
import Slider from "../../../Slider";
import BookSliderItems from "../../../BookSliderItems";
import { Colors } from "../../../../constants/styles/colors";
import { SliderDirectionVariant } from "../../../../constants/slider";
import { BookSliderItemWrapperWidth } from "../../../BookSliderItems/BookSliderItem/styles";
import { seats } from "../../../../constants/booking";

import { MovieBookingTitle, MovieBookingWrapper } from "./styles";
import { dividerHeight } from "./config";

const MovieBooking: FunctionComponent = () => {
  const { bookingSectionTitle } = useMovieText();
  const [index, setIndex] = useState<number>(0);
  return (
    <MovieBookingWrapper>
      <MovieBookingTitle>{bookingSectionTitle}</MovieBookingTitle>
      <Divider
        width={`${BookSliderItemWrapperWidth}px`}
        height={dividerHeight}
        color={Colors.WHITE}
      />
      <Slider
        direction={SliderDirectionVariant.HORIZONTAL}
        data={seats}
        index={index}
        setIndex={setIndex}
        children={<BookSliderItems data={seats} index={index} />}
      />
      <Divider
        width={`${BookSliderItemWrapperWidth}px`}
        height={dividerHeight}
        color={Colors.WHITE}
      />
    </MovieBookingWrapper>
  );
};

export default MovieBooking;
