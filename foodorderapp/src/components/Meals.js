import { useEffect, useState } from "react";
import MealItems from "./MealItems";

export default function Meals() {
  const [meals, setMeals] = useState([]);

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
        <li key={meal.id} className="meal-item">
          <MealItems meal={meal} />
        </li>
      ))}
    </ul>
  );
}
