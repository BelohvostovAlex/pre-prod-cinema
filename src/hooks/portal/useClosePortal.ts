import { useActions } from "../useActionts";

export const useClosePortal = () => {
  const { setPortal } = useActions();
  const onClosePortal = () => {
    setPortal({ type: null, isOpen: false });
  };

  return onClosePortal;
};
