import { createContext, useState } from "react";

export const CartContext = createContext({
  cartOrder: [],
  addToCart: () => {},
  upMealCount: () => {},
  downMealCount: () => {},
  cartCount: 0,
});

export function CartContextProvider({ children }) {
  const [cartOrder, setCartOrder] = useState([]);

  function addToCart(meal) {
    let updatedCart;
    setCartOrder((prev) => {
      const existing = prev.find((item) => item.id === meal.id);

      if (existing) {
        updatedCart = prev.map((item) =>
          item.id === meal.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1 )* item.price,
                
              }
            : item,
        );
        return updatedCart;
      }
      updatedCart = [...prev, { ...meal, quantity: 1, totalPrice: meal.price }];
      return updatedCart;
    });
  }

  const cartCount = cartOrder.reduce((total, item) => total + item.quantity, 0);

  function upMealCount(id) {
    return setCartOrder((prev) =>
      prev.map((meal) =>
        meal.id === id
          ? {
              ...meal,
              quantity: meal.quantity + 1,
              totalPrice: ((meal.quantity + 1) * meal.price).toFixed(2),
            }
          : meal,
      ),
    );
  }

  function downMealCount(id) {
    return setCartOrder((prev) =>
      prev
        .map((meal) =>
          meal.id === id
            ? {
                ...meal,
                quantity: meal.quantity - 1,
                totalPrice: ((meal.quantity - 1) * meal.price).toFixed(2),
              }
            : meal,
        )
        .filter((meal) => meal.quantity > 0),
    );
  }


  const CartValue = {
    cartOrder: cartOrder,
    addToCart,
    upMealCount,
    downMealCount,
    cartCount,
    
  };

  return <CartContext value={CartValue}>{children}</CartContext>;
}
