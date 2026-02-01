import Button from "./Button";

export default function MealItems({ meal, onclick }) {
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
      </article>

      <p className="meal-item-price">${meal.price}</p>
      <p className="meal-item-description">{meal.description}</p>
      <div className="meal-item-actions">
        <Button onClick={onclick} isModal={false}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
