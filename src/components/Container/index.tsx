import { FunctionComponent } from "react";

import { ContainerProps } from "./interfaces";
import { ContainerWrapper } from "./styles";

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
