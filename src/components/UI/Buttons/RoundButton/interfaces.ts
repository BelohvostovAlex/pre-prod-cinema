import { ReactNode } from "react";

export interface RounduttonProps {
  children?: ReactNode;
  onClick: () => void;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
  extra?: string;
}

export type StyledRoundButtonProps = Omit<
  RounduttonProps,
  "children" | "onClick"
>;
