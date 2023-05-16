import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  width?: string;
  height?: string;

  onClose: () => void;
}

export type ModalContainerProps = Pick<ModalProps, "height" | "width">;
