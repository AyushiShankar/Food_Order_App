import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../utils/CartContextProvider";

export default function MealDetail({
  item: { id, name, quantity, totalPrice },
}) {
  const { upMealCount, downMealCount } = useContext(CartContext);
  return (
    <div className="cart-item-actions">
      <p>{name}</p>

      <Button className="button" onclick={() => downMealCount(id)}>
        -
      </Button>
      <span>{quantity}</span>
      <Button className="button" onclick={() => upMealCount(id)}>
        +
      </Button>
      <p className="cart-total">${totalPrice}</p>
    </div>
  );
}
