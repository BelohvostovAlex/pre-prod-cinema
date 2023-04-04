import { FunctionComponent, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/useAppSelector";
import { isAuthSelector } from "../../store/slices/userSlice/selectors";

import { AppPathes } from "../../constants/routes";
import { privateRoutes, publicRoutes } from "./routes";
import Loader from "../Loader";

const AppRouter: FunctionComponent = () => {
  const isAuth = useAppSelector(isAuthSelector);
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
        {isAuth &&
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
