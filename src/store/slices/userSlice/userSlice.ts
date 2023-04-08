import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "./interfaces";
import { ThemeTypes } from "../../../constants/styles/theme";

import { IUser } from "../../../models/IUser";

const initialState: UserState = {
  theme: ThemeTypes.DARK,
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  isError: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme =
        state.theme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.isAuth = true;
      state.isLoading = false;
      state.isError = null;
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isAuth = false;
      state.isLoading = action.payload;
      state.isError = null;
      state.user = {} as IUser;
    },
    setUserError: (state, action: PayloadAction<string>) => {
      state.isAuth = false;
      state.isLoading = false;
      state.isError = action.payload;
      state.user = {} as IUser;
    },
    removeUser: (state) => {
      state.isAuth = false;
      state.isLoading = false;
      state.isError = null;
      state.user = {} as IUser;
    },
  },
});

export const { changeTheme, setUser, removeUser, setLoading, setUserError } =
  userSlice.actions;

export default userSlice.reducer;
