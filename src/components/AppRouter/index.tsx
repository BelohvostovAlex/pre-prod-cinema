import { FunctionComponent, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AppPathes } from "../../constants/routes";
import { publicRoutes } from "./routes";

const AppRouter: FunctionComponent = () => {
  // const isAuth = true;
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        {/* {isAuth && <Route path={AppPathes.BOOKINGS} element={<Bookings />}/>} */}
        <Route path="/*" element={<Navigate to={AppPathes.MAIN} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
