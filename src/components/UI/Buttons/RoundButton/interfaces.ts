import { ReactNode } from "react";

export interface RounduttonProps {
  icon: ReactNode;
  onClick: () => void;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
}

export type StyledRoundButtonProps = Omit<RounduttonProps, "icon" | "onClick">;
