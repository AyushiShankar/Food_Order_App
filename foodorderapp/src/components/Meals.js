import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../utils/CartContextProvider";
import MealItems from "./MealItems";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function availableMeals() {
      const res = await fetch("http://localhost:3000/meals");
      const data = await res.json();
      console.log("meals fetched", data);
      setMeals(data);
    }
    availableMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItems meal={meal} onClick={() => addToCart(meal)} />
        </li>
      ))}
    </ul>
  );
}
