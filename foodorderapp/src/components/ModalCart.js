import { forwardRef, useImperativeHandle, useState } from "react";
import { useSelector } from "react-redux";
import CartDetails from "./CartDetails";
import Button from "./Button";

const ModalCart = forwardRef(function ModalCart({ onClose }, ref) {
  const cartOrder = useSelector((state) => state.cartOrder);

  const cartAmount = cartOrder.reduce(
    (total, item) => total + Number(item.totalPrice),
    0
  );
  const formattedCartAmount = cartAmount.toFixed(2);

  console.log("cartAmount in CartDetails:", formattedCartAmount);
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

        <Button
          className="button"
          variant="form-modal"
          onClick={() => onClose("form")}
        >
          Checkout ${cartAmount}
        </Button>
      </div>
    </div>
  );
});

export default ModalCart;
