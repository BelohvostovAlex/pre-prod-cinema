import { FunctionComponent, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./routes";
import Loader from "../Loader";

import { useAppSelector } from "../../hooks/useAppSelector";
import { userTokenSelector } from "../../store/slices/userSlice/selectors";

import { AppPathes } from "../../constants/routes";

const AppRouter: FunctionComponent = () => {
  const token = useAppSelector(userTokenSelector);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        {token &&
          privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        <Route path="/*" element={<Navigate to={AppPathes.MAIN} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
