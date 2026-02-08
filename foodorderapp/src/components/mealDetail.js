import Button from "./Button";
import { useDispatch } from "react-redux";
import { downMealCount, upMealCount } from "../store";

export default function MealDetail({
  item: { id, name, quantity, totalPrice },
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-actions">
      <p>{name}</p>
      <Button
        className="button"
        onClick={() => dispatch(downMealCount(id))}
        variant=""
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        className="button"
        onClick={() => dispatch(upMealCount(id))}
        variant=""
      >
        +
      </Button>
      <p className="cart-total">${totalPrice}</p>
    </div>
  );
}
