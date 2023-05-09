import { PortalVariant } from "@constants/portal";

import { useActions } from "../useActionts";

export const useOpenPortal = (type: PortalVariant) => {
  const { setPortal } = useActions();
  const onOpenPortal = () => {
    setPortal({ type, isOpen: true });
  };

  return onOpenPortal;
};
