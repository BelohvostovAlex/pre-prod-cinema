import { FunctionComponent, useCallback, useState } from "react";

import Modal from "../../components/Modal";
import Portal from "../../components/Portal";

const Main: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => setOpen(false), []);
  const onOpenModal = () => setOpen(true);
  return (
    <div>
      Main
      <button onClick={onOpenModal}>open modal</button>
      <Portal element={document.body} showContent={open}>
        <Modal onClose={onClose}>kyky</Modal>
      </Portal>
    </div>
  );
};

export default Main;
