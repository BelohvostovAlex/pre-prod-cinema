import { ReactNode } from "react";

import { ButtonTypes } from "../../../../constants/buttons";
import { TypographyVariant } from "../../../../constants/styles/typography";

export interface ButtonProps {
  children?: ReactNode;
  buttonType?: ButtonTypes;
  onClick?: () => void;
  width?: string;
  height?: string;
  margin?: string;
  typography: TypographyVariant;
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
}

export type ButtonStyleProps = Omit<ButtonProps, "children" | "onClick">;
