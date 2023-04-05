import { useActions } from "../useActionts";

import { PortalVariant } from "../../constants/portal";

export const useOpenPortal = (type: PortalVariant) => {
  const { setPortal } = useActions();
  const onOpenPortal = () => {
    setPortal({ type, isOpen: true });
  };

  return onOpenPortal;
};
