import { useRef, useState } from "react";
import ModalCart from "./ModalCart";

export default function Button({ children, isModal, onClick }) {
  const dialog = useRef();
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="button"
        onClick={isModal ? openModal : onClick}
      >
        {children}
      </button>

      {isModal && open && (
       
          <ModalCart ref={dialog} onClose={closeModal} />

      )}
    </>
  );
}
