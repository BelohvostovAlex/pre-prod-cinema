import { FunctionComponent } from "react";
import { createPortal } from "react-dom";

import { PortalProps } from "./interfaces";
import { PortalContainer } from "./styles";

const Portal: FunctionComponent<PortalProps> = ({
  element = document.body,
  showContent,
  children,
}) => {
  if (!showContent) {
    return null;
  }
  return createPortal(<PortalContainer>{children}</PortalContainer>, element);
};

export default Portal;
