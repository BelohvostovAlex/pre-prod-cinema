import { UseFormRegister, RegisterOptions } from "react-hook-form/dist/types";

import { AuthFormInputProps } from "../AuthForm/interfaces";
import { AuthFormInputsPossibleNames } from "../../constants/authForm";

export enum InputTypes {
  BUTTON = "button",
  EMAIL = "email",
  TEXT = "text",
  PASSWORD = "password",
}

export interface InputProps {
  type?: InputTypes;
  label?: string;
  id?: string;
  placeholder: string;
  htmlFor?: string;
  register: UseFormRegister<AuthFormInputProps>;
  inputName: AuthFormInputsPossibleNames;
  validateOptions?:
    | RegisterOptions<AuthFormInputProps, AuthFormInputsPossibleNames>
    | undefined;
}
