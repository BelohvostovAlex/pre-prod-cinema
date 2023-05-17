import { FunctionComponent, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppPathes } from "@constants/routes";
import PrivateRoutes from "@routes/PrivateRoutes";
import MainLoader from "cinema-components-lib/Loaders/MainLoader";

import { privateRoutes, publicRoutes } from "./routes";

const AppRouter: FunctionComponent = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route element={<PrivateRoutes />}>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
        <Route path="/*" element={<Navigate to={AppPathes.MAIN} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
