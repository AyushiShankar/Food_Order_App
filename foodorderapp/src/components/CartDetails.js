import { useSelector } from "react-redux";
import MealDetail from "./mealDetail";
import Button from "./Button";

export default function CartDetails({ onClick }) {
  const cartOrder = useSelector((state) => state.cartOrder);

  const cartAmount = cartOrder.reduce(
    (total, item) => total + Number(item.totalPrice),
    0
  );
  console.log("cartAmount in CartDetails:", cartAmount);

  return (
    <>
      <ul>
        {cartOrder.length === 0 && <h2>Your cart is empty</h2>}
        {cartOrder.map((item) => {
          return (
            <li key={item.id}>
              <MealDetail item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
