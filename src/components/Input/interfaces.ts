import { RegisterOptions, UseFormRegister } from "react-hook-form/dist/types";

import { AuthFormInputsPossibleNames } from "../../constants/authForm";
import { AuthFormInputProps } from "../AuthForm/interfaces";

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
  placeholder?: string;
  htmlFor?: string;
  register: UseFormRegister<AuthFormInputProps>;
  inputName: AuthFormInputsPossibleNames;
  error?: string;
  defaultValue?: string;
  validateOptions?:
    | RegisterOptions<AuthFormInputProps, AuthFormInputsPossibleNames>
    | undefined;
}
