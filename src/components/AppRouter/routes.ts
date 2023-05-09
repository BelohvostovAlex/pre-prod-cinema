import { lazy } from "react";

import { AppPathes } from "@constants/routes";

import { IRoute } from "./interfaces";

const Main = lazy(() => import("@pages/Main"));
const Movie = lazy(() => import("@pages/Movie"));
const Booking = lazy(() => import("@pages/Booking"));

export const publicRoutes: IRoute[] = [
  { path: AppPathes.MAIN, element: Main },
  { path: AppPathes.MOVIE, element: Movie },
];

export const privateRoutes: IRoute[] = [
  { path: AppPathes.BOOKING, element: Booking },
];
