import { RootState } from "../..";

export const isPortalOpenSelector = (state: RootState) => state.portal.isOpen;
export const portalVariantSelector = (state: RootState) => state.portal.type;
