import { ReactNode } from "react";

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: null | Error;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}
