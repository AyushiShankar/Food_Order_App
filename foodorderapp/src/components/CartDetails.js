import { useSelector } from "react-redux";
import MealDetail from "./mealDetail";


export default function CartDetails({ onClick }) {
  const cartOrder = useSelector((state) => state.cartOrder);

  return (
    <>
      <ul>
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
