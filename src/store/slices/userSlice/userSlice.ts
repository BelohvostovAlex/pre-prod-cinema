import { createSlice } from "@reduxjs/toolkit";
import { ThemeTypes } from "../../../constants/styles/theme";

import { UserState } from "./interfaces";

const initialState: UserState = {
  theme: ThemeTypes.LIGHT,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme =
        state.theme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT;
    },
  },
});

export const { changeTheme } = userSlice.actions;

export default userSlice.reducer;
