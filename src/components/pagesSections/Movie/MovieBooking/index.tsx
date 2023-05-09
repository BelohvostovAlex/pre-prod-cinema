import { FunctionComponent, useEffect, useState } from "react";
import {
  BookSliderItem,
  Divider,
  Slider,
  SliderItems,
} from "cinema-ui-belohvostov";
import { useTheme } from "styled-components";

import { BookSliderItemWrapperWidth } from "@components/BookSliderItem/styles";
import { SliderDirectionVariant } from "@constants/slider";
import { Colors } from "@constants/styles/colors";
import { getAvailableDates } from "@helpers/date/getAvailableDates";
import { useMediaQuery } from "@hooks/style/useMediaQuery";
import { useActions } from "@hooks/useActionts";
import { useAppSelector } from "@hooks/useAppSelector";
import { useMovieText } from "@pages/Movie/config/useMovieText";
import { daysSelector } from "@store/slices/daysSlice/selectors";
import { userChoiceSelector } from "@store/slices/userChoiceSlice/selectors";

import { dividerHeight, dividerWidthM, futureLimit } from "./config";
import { MovieBookingTitle, MovieBookingWrapper } from "./styles";

const MovieBooking: FunctionComponent = () => {
  const { breakPoints } = useTheme();
  const isMSize = useMediaQuery(`(max-width: ${breakPoints.m}px)`);
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
        width={isMSize ? dividerWidthM : `${BookSliderItemWrapperWidth}px`}
        height={dividerHeight}
        color={Colors.WHITE}
      />
      <Slider
        direction={
          isMSize
            ? SliderDirectionVariant.VERTICAL
            : SliderDirectionVariant.HORIZONTAL
        }
        data={days}
        index={index}
        setIndex={setIndex}
        children={
          <SliderItems
            data={days}
            index={index}
            renderItem={(
              item,
              top,
              center,
              bot,
              left,
              right,
              prevLeft,
              prevRight,
            ) => (
              <BookSliderItem
                item={item.date}
                top={top}
                center={center!}
                bot={bot}
                left={left!}
                right={right!}
                prevLeft={prevLeft!}
                prevRight={prevRight!}
                key={item.fullDateInfo}
                direction={
                  isMSize
                    ? SliderDirectionVariant.VERTICAL
                    : SliderDirectionVariant.HORIZONTAL
                }
                month={item.month}
              />
            )}
          />
        }
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
