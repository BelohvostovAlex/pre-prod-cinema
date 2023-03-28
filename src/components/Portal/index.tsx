import { FunctionComponent } from "react";
import { createPortal } from "react-dom";

import { PortalContainer } from "./styles";
import { PortalProps } from "./interfaces";

const Portal: FunctionComponent<PortalProps> = ({
  element,
  showContent,
  children,
}) => {
  if (!showContent) {
    return null;
  }
  return createPortal(<PortalContainer>{children}</PortalContainer>, element);
};

export default Portal;
