import { ReactNode } from "react";

import { ButtonTypes, ButtonVariants } from "../../../../constants/buttons";
import { TypographyVariant } from "../../../../constants/styles/typography";

export interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariants;
  buttonTypes?: ButtonTypes;
  width?: string;
  height?: string;
  margin?: string;
  typography: TypographyVariant;
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
  icon?: ReactNode;

  onClick?: () => void;
}

export type ButtonStyleProps = Omit<ButtonProps, "children" | "onClick">;
