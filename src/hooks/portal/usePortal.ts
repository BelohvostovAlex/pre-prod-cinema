import { useState } from "react";

export const usePortal = () => {
  const [state, setState] = useState<boolean>(false);

  const handlePortal = () => {
    setState((prev) => !prev);
  };

  return [state, handlePortal] as const;
};
