import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/useAppSelector";
import { isAuthSelector } from "../../store/slices/userSlice/selectors";

const Bookings: FunctionComponent = () => {
  const isAuth = useAppSelector(isAuthSelector);

  if (!isAuth) {
    <Navigate to={"/"} />;
  }
  return <div>Bookings</div>;
};

export default Bookings;
