import { useTranslation } from "react-i18next";

export const useBookingText = () => {
  const { t } = useTranslation();

  return {
    missedTitle: t("Booking.title.missed"),
    pastTitle: t("Booking.title.past"),
    upcomingTitle: t("Booking.title.upcoming"),
    cancelBtn: t("Booking.cancelBtn"),
  };
};
