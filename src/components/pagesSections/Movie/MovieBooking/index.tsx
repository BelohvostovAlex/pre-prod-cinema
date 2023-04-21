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
import { getCurrDay } from "../../../../helpers/date/getCurrDay";
import { getMonthDays } from "../../../../helpers/date/getMonthDays";
import { createArrOfDaysFromNumber } from "../../../../helpers/createArrFromNumber";
import { AlertTypes } from "../../../../constants/alert";
import { userChoiceSelector } from "../../../../store/slices/userChoiceSlice/selectors";
import { daysSelector } from "../../../../store/slices/daysSlice/selectors";

import { MovieBookingTitle, MovieBookingWrapper } from "./styles";
import { dividerHeight } from "./config";

const MovieBooking: FunctionComponent = () => {
  const { bookingSectionTitle, cantBookForPast } = useMovieText();
  const [index, setIndex] = useState<number>(() => getCurrDay() - 1);

  const {
    setDays,
    setCurrDay,
    setChosenDay,
    setCinemaMovieDay,
    setIsAlertOpen,
    removePrevMovies,
  } = useActions();
  const { days, currDay } = useAppSelector(daysSelector);
  const { chosenMovie } = useAppSelector(userChoiceSelector);

  useEffect(() => {
    const day = getCurrDay();
    const monthDays = getMonthDays();
    const monthDaysArr = createArrOfDaysFromNumber(monthDays);
    setCurrDay(day);
    setDays(monthDaysArr);
    setIndex(day - 1);
    removePrevMovies({ day, movieTitle: chosenMovie });
  }, []);

  useEffect(() => {
    const incrementedIndex = index + 1;
    setChosenDay(incrementedIndex);
    if (incrementedIndex < currDay) {
      setIsAlertOpen({
        isOpen: true,
        text: cantBookForPast,
        type: AlertTypes.ERROR,
      });
    } else {
      setCinemaMovieDay({ chosenDay: incrementedIndex, movie: chosenMovie });
    }
  }, [index]);

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
