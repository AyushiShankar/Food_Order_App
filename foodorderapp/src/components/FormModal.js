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
      <dialog className="control">
        <h2>Please fill the details:</h2>
        <UserForm onClose={onClose} />
      </dialog>
    </div>
  );
});

export default FormModal;
