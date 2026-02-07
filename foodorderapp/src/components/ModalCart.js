import { forwardRef, useImperativeHandle, useContext, useState } from "react";
import { CartContext } from "../utils/CartContextProvider";
import CartDetails from "./CartDetails";
import Button from "./Button";

const ModalCart = forwardRef(function ModalCart({ onClose }, ref) {
  const { cartOrder } = useContext(CartContext);
  // const dialog = useRef(null);

  const cartAmount = cartOrder.reduce(
    (total, item) => total + Number(item.totalPrice),
    0
  );
  console.log("cartAmount in CartDetails:", cartAmount);
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
      <div className="modal cart">
        <div className="modal-actions">
          <h2>Cart</h2>
          <Button className="text-button" onClick={onClose} variant="">
            ✖
          </Button>
        </div>
        <CartDetails className="cart-items" />

        <Button className="button" variant="form-modal" onClick={onClose}>
          Checkout ${cartAmount}
        </Button>
      </div>
    </div>
  );
});

export default ModalCart;
