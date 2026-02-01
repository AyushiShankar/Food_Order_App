import logo from "../assets/logo.jpg";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../utils/CartContextProvider";

export default function Header() {
  const { cartCount } = useContext(CartContext);

  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Food Order App Logo" />
        <h1>Zwiggy</h1>
      </div>
      <Button className="button" isModal={true}>
        Cart ({cartCount})
      </Button>
    </div>
  );
}
