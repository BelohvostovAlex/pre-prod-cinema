import { ButtonHTMLAttributes, ReactNode } from "react";

import { ButtonVariants } from "../../../../constants/buttons";
import { TypographyVariant } from "../../../../constants/styles/typography";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  width?: string;
  height?: string;
  margin?: string;
  typography: TypographyVariant;
  fontSize?: string;
  backgroundColor?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export type ButtonStyleProps = Pick<
  ButtonProps,
  | "typography"
  | "variant"
  | "width"
  | "height"
  | "margin"
  | "fontSize"
  | "backgroundColor"
  | "color"
>;
