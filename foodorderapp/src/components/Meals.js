import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";
import MealItems from "./MealItems";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const dispatch = useDispatch();

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
          <MealItems meal={meal} onClick={() => dispatch(addToCart(meal))} />
        </li>
      ))}
    </ul>
  );
}
