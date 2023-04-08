import { ReactNode } from "react";

export interface DrawerProps {
  isOpen: boolean;
  children: ReactNode;
  title: string;

  onClose: () => void;
}
