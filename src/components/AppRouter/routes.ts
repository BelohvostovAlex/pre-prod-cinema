import { lazy } from "react";

import { AppPathes } from "../../constants/routes";
import { IRoute } from "./interfaces";

const Main = lazy(() => import("../../pages/Main/Main"));
const Movie = lazy(() => import("../../pages/Movie/Movie"));

export const publicRoutes: IRoute[] = [
  { path: AppPathes.MAIN, element: Main },
  { path: AppPathes.MOVIE, element: Movie },
];
