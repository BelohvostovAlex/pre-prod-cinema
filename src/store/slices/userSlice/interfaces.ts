import { TThemeType } from "../../../constants/styles/theme";
import { IUser } from "../../../models/IUser";

export interface UserState {
  theme: TThemeType;
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  isError: string | null;
}
