import { FunctionComponent, useEffect, useState } from "react";

import { useMovieText } from "../../../../pages/Movie/config/useMovieText";
import Divider from "../../../UI/Divider";
import Slider from "../../../Slider";
import BookSliderItems from "../../../BookSliderItems";
import { Colors } from "../../../../constants/styles/colors";
import { SliderDirectionVariant } from "../../../../constants/slider";
import { BookSliderItemWrapperWidth } from "../../../BookSliderItems/BookSliderItem/styles";
import { handleDays } from "../../../../helpers/handleDays";
import { createArrOfDaysFromNumber } from "../../../../helpers/createArrFromNumber";
import { useActions } from "../../../../hooks/useActionts";
import { useAppSelector } from "../../../../hooks/useAppSelector";

import {
  MovieBookingTitle,
  MovieBookingWrapper,
  MovieHallBadgeWrapper,
} from "./styles";
import MovieHallBadge from "./MovieHallBadge";
import { dividerHeight } from "./config";
import { createDefaultBookingInfo } from "./config/createDefaultBookingInfo";

const MovieBooking: FunctionComponent = () => {
  const { bookingSectionTitle } = useMovieText();
  const [index, setIndex] = useState<number>(0);
  const [badgeIndex, setBadgeIndex] = useState<number>(0);
  const { setBookings, setDays, setCurrDay, setSelect } = useActions();
  const { bookings } = useAppSelector((state) => state.booking);
  const { currDay, days } = useAppSelector((state) => state.days);

  useEffect(() => {
    const { day, days: monthDays } = handleDays();
    const monthDayArr = createArrOfDaysFromNumber(monthDays);
    setDays({ currDay: day, days: monthDayArr });
    setIndex(currDay - 1);
    const restDays = monthDayArr.slice(currDay - 1);
    setBookings(restDays.map((item) => createDefaultBookingInfo(item)));
  }, []);

  useEffect(() => {
    setCurrDay(index + 1);
  }, [index]);

  const handleActiveBadge = (badgeIdx: number) => () => {
    setBadgeIndex(badgeIdx);
  };

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
      <MovieHallBadgeWrapper>
        {bookings
          .find(({ day }) => day === currDay)
          ?.session?.map(({ available, hall, startTime }, i) => (
            <MovieHallBadge
              key={startTime}
              isActive={badgeIndex === i}
              hallNumber={hall}
              time={startTime}
              available={available.length}
              onClick={handleActiveBadge(i)}
            />
          ))}
      </MovieHallBadgeWrapper>
    </MovieBookingWrapper>
  );
};

export default MovieBooking;
