import { FunctionComponent } from "react";

import { ContainerProps } from "./interfaces";
import { ContainerWrapper } from "./styles";

const AppContainer: FunctionComponent<ContainerProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default AppContainer;
