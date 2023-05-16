import { FunctionComponent } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AppPathes } from "../../constants/routes";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userTokenSelector } from "../../store/slices/userSlice/selectors";

const PrivateRoutes: FunctionComponent = () => {
  const token = useAppSelector(userTokenSelector);
  return token ? <Outlet /> : <Navigate to={AppPathes.MAIN} />;
};

export default PrivateRoutes;
