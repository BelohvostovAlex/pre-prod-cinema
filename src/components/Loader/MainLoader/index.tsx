import { FunctionComponent } from "react";

import "./index.css";
import { StyledLoader } from "./styles";

const MainLoader: FunctionComponent = () => {
  return (
    <StyledLoader>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoader>
  );
};

export default MainLoader;
