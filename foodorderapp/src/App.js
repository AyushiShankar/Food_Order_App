import Header from "./components/Header";
import Meals from "./components/Meals";
import ModalCart from "./components/ModalCart";
import { CartContextProvider } from "./utils/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
      <ModalCart />
    </CartContextProvider>
  );
}

export default App;
