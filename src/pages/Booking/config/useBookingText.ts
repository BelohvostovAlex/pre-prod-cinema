import { useTranslation } from "react-i18next";

export const useBookingText = () => {
  const { t } = useTranslation();

  return {
    missedTitle: t("Booking.title.missed"),
    pastTitle: t("Booking.title.past"),
    upcomingTitle: t("Booking.title.upcoming"),
    noBookingsTitle: t("Booking.title.noBookingsTitle"),
    cancelBtn: t("Booking.ticket.cancelBtn"),
    timeText: t("Booking.ticket.time"),
    dateText: t("Booking.ticket.date"),
    seatsText: t("Booking.ticket.seats"),
    seatText: t("Booking.ticket.seat"),
  };
};
