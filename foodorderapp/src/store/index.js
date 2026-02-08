import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartOrder: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const meal = action.payload;
      const existing = state.cartOrder.find((item) => item.id === meal.id);

      if (existing) {
        existing.quantity += 1;
        existing.totalPrice = (
          existing.quantity * Number(existing.price)
        ).toFixed(2);
        return;
      }

      state.cartOrder.push({
        ...meal,
        quantity: 1,
        totalPrice: Number(meal.price).toFixed(2),
      });
    },
    upMealCount(state, action) {
      const id = action.payload;
      const meal = state.cartOrder.find((item) => item.id === id);
      if (!meal) return;
      meal.quantity += 1;
      meal.totalPrice = (meal.quantity * Number(meal.price)).toFixed(2);
    },
    downMealCount(state, action) {
      const id = action.payload;
      const meal = state.cartOrder.find((item) => item.id === id);
      if (!meal) return;
      meal.quantity -= 1;
      meal.totalPrice = (meal.quantity * Number(meal.price)).toFixed(2);
      state.cartOrder = state.cartOrder.filter((item) => item.quantity > 0);
    },
  },
});

export const { addToCart, upMealCount, downMealCount } = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;
