import { forwardRef, useImperativeHandle, useState } from "react";
import Button from "./Button";
import UserForm from "./UserForm";

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
    <div className="control">
      <h2>Please fill the details:</h2>
      <UserForm />
      <Button className="text-button" onClick={onClose}>
        Submit
      </Button>
    </div>
  );
});

export default FormModal;
