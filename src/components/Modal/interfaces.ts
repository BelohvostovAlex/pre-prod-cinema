import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
}

export type ModalContainerProps = Pick<ModalProps, "height" | "width">;
