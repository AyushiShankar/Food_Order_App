import { useContext } from "react";
import { CartContext } from "../utils/CartContextProvider";
import MealDetail from "./mealDetail";
import Button from "./Button";

export default function CartDetails( ){
  const { cartOrder } = useContext(CartContext);

  const cartAmount = cartOrder.reduce(
   (total, item) => total + item.totalPrice,
    0,
  );
  console.log("cartAmount in CartDetails:", cartAmount);

  return (
    <>
      <ul>
        {cartOrder.length === 0 && <p>Your cart is empty</p>}
        {cartOrder.map((item) => {
          return (
            <li key={item.id} className="cart-item">
              <MealDetail item={item} />
            </li>
          );
        })}
      </ul>
      <div className="modal-actions">
         <Button>
          Checkout ₹{cartAmount}
        </Button>
      </div>
    </>
  );
}
