import { PortalVariant } from "../../../constants/portal";

export interface PortalState {
  isOpen: boolean;
  type: PortalVariant | null;
}

export type PortalActionCreator = PortalState;
