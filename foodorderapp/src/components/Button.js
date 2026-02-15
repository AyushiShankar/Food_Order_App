import { useRef, useState, useEffect } from "react";
import ModalCart from "./ModalCart";
import FormModal from "./FormModal";
import { useSelector } from "react-redux";

export default function Button({
  children,
  onClick = () => {},
  className,
  variant,
} = {}) {
  const dialog = useRef();
  const cartCount = useSelector((state) =>
    state.cartOrder.reduce((total, item) => total + item.quantity, 0)
  );

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

  function closeModal(next) {
    dialog.current?.close();
    setActiveModal(null);
    next === "form" && handleClick("form-modal");
    next === "cart" && handleClick("cart-modal");
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
      {activeModal === "cart" && cartCount > 0 && (
        <ModalCart ref={dialog} onClose={closeModal} />
      )}

      {activeModal === "form" && (
        <div className="modal-actions">
          <FormModal ref={dialog} onClose={closeModal} />
        </div>
      )}
    </>
  );
}
