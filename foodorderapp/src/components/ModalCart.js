import { forwardRef, useImperativeHandle, useState } from "react";
import CartDetails from "./CartDetails";
import Button from "./Button";

const ModalCart = forwardRef(function ModalCart({ props, onClose }, ref) {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    },
  }));

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <dialog className="modal">
        <div className="modal-actions">
          <h2>Cart</h2>
          <Button className="text-button" onClick={onClose}>
            ✖
          </Button>
        </div>
        <CartDetails className="cart-items" />
      </dialog>
    </div>
  );
});

export default ModalCart;
