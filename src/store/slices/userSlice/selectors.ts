import { RootState } from "@store/index";

export const themeSelector = (state: RootState) => state.user.theme;
export const isAuthSelector = (state: RootState) => state.user.isAuth;
export const userTokenSelector = (state: RootState) => state.user.user.token;
export const userSelector = (state: RootState) => state.user.user;
export const userLoadingSelector = (state: RootState) => state.user.isLoading;
export const userIdSelector = (state: RootState) => state.user.user.id;
