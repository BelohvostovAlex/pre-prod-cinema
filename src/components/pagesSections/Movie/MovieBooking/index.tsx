import { FunctionComponent, useEffect, useState } from "react";

import { useMovieText } from "../../../../pages/Movie/config/useMovieText";
import Divider from "../../../UI/Divider";
import Slider from "../../../Slider";
import BookSliderItems from "../../../BookSliderItems";
import { Colors } from "../../../../constants/styles/colors";
import { SliderDirectionVariant } from "../../../../constants/slider";
import { BookSliderItemWrapperWidth } from "../../../BookSliderItems/BookSliderItem/styles";
import { useActions } from "../../../../hooks/useActionts";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { userChoiceSelector } from "../../../../store/slices/userChoiceSlice/selectors";
import { daysSelector } from "../../../../store/slices/daysSlice/selectors";
import { getAvailableDates } from "../../../../helpers/date/getAvailableDates";

import { MovieBookingTitle, MovieBookingWrapper } from "./styles";
import { dividerHeight, futureLimit } from "./config";

const MovieBooking: FunctionComponent = () => {
  const { bookingSectionTitle } = useMovieText();
  const [index, setIndex] = useState<number>(0);

  const { setDays, setCurrDay, setChosenDay, setCinemaMovieDay } = useActions();
  const { days } = useAppSelector(daysSelector);
  const { chosenMovie } = useAppSelector(userChoiceSelector);

  useEffect(() => {
    const availableDays = getAvailableDates(new Date(), futureLimit);
    const currDate = availableDays[0];
    setCurrDay(currDate);
    setChosenDay(currDate);
    setDays(availableDays);
  }, []);

  useEffect(() => {
    const chosenDate = days[index];
    if (chosenDate) {
      setChosenDay(chosenDate);
      setCinemaMovieDay({ chosenDay: chosenDate, movie: chosenMovie });
    }
  }, [index, days]);

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
        data={days}
        index={index}
        setIndex={setIndex}
        children={<BookSliderItems data={days} index={index} />}
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
