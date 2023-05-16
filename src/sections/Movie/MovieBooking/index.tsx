import { FunctionComponent, useEffect, useState } from "react";
import { BookSliderItem, Divider } from "cinema-ui-belohvostov";

import Slider from "cinema-components-lib/Slider";
import SliderItems from "cinema-components-lib/Slider/SliderItems";
import { useMovieText } from "@pages/Movie/hooks/useMovieText";
import { Colors } from "@constants/styles/colors";
import { SliderDirectionVariant } from "@constants/slider";
import { BookSliderItemWrapperWidth } from "@components/BookSliderItem/styles";
import { useActions } from "@hooks/useActionts";
import { useAppSelector } from "@hooks/useAppSelector";
import { useMediaQuery } from "@hooks/style/useMediaQuery";
import { userChoiceSelector } from "@store/slices/userChoiceSlice/selectors";
import { getAvailableDates } from "@helpers/date/getAvailableDates";
import { IDate } from "@interfaces/IDate";

import { MovieBookingTitle, MovieBookingWrapper } from "./styles";
import { dividerHeight, dividerWidthM, futureLimit } from "./config";

const MovieBooking: FunctionComponent = () => {
  const isMSize = useMediaQuery("m");
  const { bookingSectionTitle } = useMovieText();
  const [index, setIndex] = useState<number>(0);
  const [availableDays] = useState<IDate[]>(() =>
    getAvailableDates(new Date(), futureLimit),
  );

  const { setChosenDay, setCinemaMovieDay } = useActions();
  const { chosenMovie } = useAppSelector(userChoiceSelector);

  useEffect(() => {
    const currDate = availableDays[0];
    setChosenDay(currDate);
  }, []);

  useEffect(() => {
    const chosenDate = availableDays[index];
    if (chosenDate) {
      setChosenDay(chosenDate);
      setCinemaMovieDay({ chosenDay: chosenDate, movie: chosenMovie });
    }
  }, [index]);

  return (
    <MovieBookingWrapper>
      <MovieBookingTitle>{bookingSectionTitle}</MovieBookingTitle>
      <Divider
        width={isMSize ? dividerWidthM : `${BookSliderItemWrapperWidth}px`}
        height={dividerHeight}
        color={Colors.WHITE}
      />
      {availableDays.length > 0 && (
        <Slider
          direction={
            isMSize
              ? SliderDirectionVariant.VERTICAL
              : SliderDirectionVariant.HORIZONTAL
          }
          data={availableDays}
          index={index}
          setIndex={setIndex}
          children={
            <SliderItems
              data={availableDays}
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
      )}
      <Divider
        width={`${BookSliderItemWrapperWidth}px`}
        height={dividerHeight}
        color={Colors.WHITE}
      />
    </MovieBookingWrapper>
  );
};

export default MovieBooking;
