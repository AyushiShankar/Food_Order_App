import { useDispatch, useSelector } from "react-redux";
import { addToCart, upMealCount, downMealCount } from "../store/index";

export default function MealItems({ meal }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cartOrder.find((item) => meal.id === item.id)
  );

  return (
    <div className="">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
      </article>
      <p className="meal-item-price">${meal.price}</p>
      <p className="meal-item-description">{meal.description}</p>
      {!cartItem ? (
        <div className="meal-item-actions">
          <button
            onClick={() => dispatch(addToCart(meal))}
            className="button"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <div className="meal-item-actions">
          <button
            onClick={() => dispatch(downMealCount(meal.id))}
            className="button"
            type="button"
          >
            -
          </button>
          <span>{cartItem.quantity}</span>
          <button
            onClick={() => dispatch(upMealCount(meal.id))}
            className="button"
            type="button"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
