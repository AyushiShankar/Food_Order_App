import { useRef, useState, useEffect } from "react";
import ModalCart from "./ModalCart";
import FormModal from "./FormModal";

export default function Button({ children, onClick, className, variant }) {
  const dialog = useRef();
  const dialogForm = useRef();

  const [activeModal, setActiveModal] = useState(null);

  function handleClick(variant) {
    if (variant === "cart-modal") {
      setActiveModal("cart");
    } else if (variant === "form-modal") {
      setActiveModal("form");
    } else {
      onClick();
    }
  }

  function closeModal() {
    dialog.current?.close();
    setActiveModal(null);
  }
  function proceedToForm() {
     dialog.current?.close();
    setActiveModal("form");
  }
  useEffect(() => {
    if (activeModal) {
      dialog.current?.open();
    }
  }, [activeModal]);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => handleClick(variant)}
      >
        {children}
      </button>
      {activeModal === "cart" && (
        <ModalCart
          ref={dialog}
          onClose={closeModal}
          onProceed={proceedToForm}
        />
      )}

      {activeModal === "form" && (
        <div className="modal-actions">
          <FormModal ref={dialog} onClose={closeModal} />
        </div>
      )}
    </>
  );
}
