import { ReactNode } from "react";

export interface PortalProps {
  children: ReactNode;
  showContent: boolean;
  element: HTMLElement;
}
