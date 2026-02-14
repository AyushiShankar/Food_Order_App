import { forwardRef, useImperativeHandle, useState } from "react";
import UserForm from "./UserForm";
import Button from "./Button";

const FormModal = forwardRef(function FormModal({ onClose }, ref) {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    },
  }));

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="control cart">
        <div className="modal-actions">
          <Button className="text-button" onClick={() => onClose("cart")}>
            <img src="/images/backBtn.svg" alt="backBtn" />
          </Button>
        <h2>Please fill the details:</h2>
          <Button className="text-button" onClick={onClose} variant="">
            ✖
          </Button>
        </div>
        <UserForm onClose={onClose} />
      </div>
    </div>
  );
});

export default FormModal;
