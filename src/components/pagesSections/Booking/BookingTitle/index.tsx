import { FunctionComponent } from "react";

import { BookingTitleProps } from "./interfaces";
import { BookingTitleWrapper } from "./styles";

const BookingTitle: FunctionComponent<BookingTitleProps> = ({ title }) => {
  return <BookingTitleWrapper>{title}</BookingTitleWrapper>;
};

export default BookingTitle;
