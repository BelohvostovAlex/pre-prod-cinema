import { FunctionComponent } from "react";

import { BookingTitleWrapper } from "./styles";
import { BookingTitleProps } from "./interfaces";

const BookingTitle: FunctionComponent<BookingTitleProps> = ({ title }) => {
  return <BookingTitleWrapper>{title}</BookingTitleWrapper>;
};

export default BookingTitle;
