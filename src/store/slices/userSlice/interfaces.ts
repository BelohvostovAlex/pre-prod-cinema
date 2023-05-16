import { TThemeType } from "../../../constants/styles/theme";
import { IUser } from "../../../interfaces/IUser";

export interface UserState {
  theme: TThemeType;
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  isError: string | null;
}

export type UpdateUserPayload = Partial<IUser>;
