export interface IUser {
  id: string;
  username: string;
  surname: string;
  email: string | null;
  gender: string;
  token: string | undefined;
  photo: string;
}
