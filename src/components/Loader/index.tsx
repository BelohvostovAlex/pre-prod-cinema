import { FunctionComponent } from "react";

import "./index.css";
import { StyledLoader } from "./styles";

const Loader: FunctionComponent = () => {
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

export default Loader;
