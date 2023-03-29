import { RootState } from "../..";

export const themeSelector = (state: RootState) => state.user.theme;
