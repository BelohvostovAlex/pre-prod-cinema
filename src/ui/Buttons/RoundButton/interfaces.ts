import { ReactNode } from "react";

export interface RounduttonProps {
  children?: ReactNode;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
  extra?: string;

  onClick: () => void;
}

export type StyledRoundButtonProps = Omit<
  RounduttonProps,
  "children" | "onClick"
>;
