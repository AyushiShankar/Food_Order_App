import { forwardRef, useImperativeHandle, useState } from "react";
import UserForm from "./UserForm";

const FormModal = forwardRef(function FormModal({ ...props }, ref) {
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
      <dialog className="control" ref={ref}>
        <h2>Please fill the details:</h2>
        <UserForm />
      </dialog>
    </div>
  );
});

export default FormModal;
