import { useTranslation } from "react-i18next";

export const useMovieText = () => {
  const { t } = useTranslation();

  return {
    moveToNextMovieBtn: t("Movie.moveToNextMovieBtn"),
    releaseYear: t("Movie.releaseYear"),
    country: t("Movie.country"),
    genre: t("Movie.genre"),
    author: t("Movie.author"),
    actors: t("Movie.actors"),
    bookBtn: t("Movie.bookBtn"),
    watchTrailerTitle: t("Movie.watchTrailerTitle"),
    noReviewsTitle: t("Movie.noReviewsTitle"),
    notAuthBookBtn: t("Movie.notAuthBookBtn"),
    bookingSectionTitle: t("Movie.bookingSectionTitle"),
    footerSeats: t("Movie.footerSeats"),
    cantBookForPast: t("Movie.cantBookForPast"),
    bookedSeats: t("Movie.bookedSeats"),
  };
};
