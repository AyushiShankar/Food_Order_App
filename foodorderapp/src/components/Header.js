import logo from "../assets/logo.jpg";
import Button from "./Button";
import { useSelector } from "react-redux";

export default function Header() {
  const cartCount = useSelector((state) =>
    state.cartOrder.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Food Order App Logo" />
        <h1>Zwiggy</h1>
      </div>
      <Button className="button" variant="cart-modal" cartCount={cartCount}>
        Cart ({cartCount})
      </Button>
    </div>
  );
}
