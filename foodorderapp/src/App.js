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

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [open]);
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
