import Header from "./components/Header";
import Meals from "./components/Meals";
import ModalCart from "./components/ModalCart";
import Toaster from "./components/Toaster";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Header />
      <Meals />
      <ModalCart />
      {open && <Toaster />}
    </>
  );
}

export default App;
