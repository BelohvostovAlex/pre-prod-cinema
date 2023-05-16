import { FunctionComponent } from "react";

import Loader from "../Loader";

import { StyledLoader } from "./styles";

const MainLoader: FunctionComponent = () => {
  return (
    <StyledLoader>
      <Loader />
    </StyledLoader>
  );
};

export default MainLoader;
