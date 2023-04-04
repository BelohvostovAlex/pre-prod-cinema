import { RootState } from "../..";

export const themeSelector = (state: RootState) => state.user.theme;
export const isAuthSelector = (state: RootState) => state.user.isAuth;
