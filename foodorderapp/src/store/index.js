import { createStore } from "redux";

const ADD_TO_CART = "cart/addToCart";
const UP_MEAL_COUNT = "cart/upMealCount";
const DOWN_MEAL_COUNT = "cart/downMealCount";

const initialState = {
  cartOrder: [],
};

function mealCount(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const meal = action.payload;
      const existing = state.cartOrder.find((item) => item.id === meal.id);

      if (existing) {
        const updatedCart = state.cartOrder.map((item) =>
          item.id === meal.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * Number(item.price),
              }
            : item,
        );
        return { ...state, cartOrder: updatedCart };
      }

      const newItem = {
        ...meal,
        quantity: 1,
        totalPrice: Number(meal.price),
      };
      return { ...state, cartOrder: [...state.cartOrder, newItem] };
    }
    case UP_MEAL_COUNT: {
      const id = action.payload;
      const updatedCart = state.cartOrder.map((meal) =>
        meal.id === id
          ? {
              ...meal,
              quantity: meal.quantity + 1,
              totalPrice: (meal.quantity + 1) * Number(meal.price),
            }
          : meal,
      );
      return { ...state, cartOrder: updatedCart };
    }
    case DOWN_MEAL_COUNT: {
      const id = action.payload;
      const updatedCart = state.cartOrder
        .map((meal) =>
          meal.id === id
            ? {
                ...meal,
                quantity: meal.quantity - 1,
                totalPrice: (meal.quantity - 1) * Number(meal.price),
              }
            : meal,
        )
        .filter((meal) => meal.quantity > 0);
      return { ...state, cartOrder: updatedCart };
    }
    default:
      return state;
  }
}

export const addToCart = (meal) => ({ type: ADD_TO_CART, payload: meal });
export const upMealCount = (id) => ({ type: UP_MEAL_COUNT, payload: id });
export const downMealCount = (id) => ({ type: DOWN_MEAL_COUNT, payload: id });

const store = createStore(mealCount);

export default store;
