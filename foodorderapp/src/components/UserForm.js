import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Please enter the name")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff'-]*)$/gi,
      "Name can only contain Latin letters, spaces, hyphens, and apostrophes"
    )
    .min(3),
  email: yup
    .string()
    .required("Email address is required")
    .email("Please enter a valid Email Address"),

  street: yup.string().required("Street Name is required"),
  city: yup.string().required("City Name is required"),
  pincode: yup
    .string()
    .required("Pincode must be at least 6 characters")
    .max(6)
    .matches(
      /^[1-9][0-9]{5}$/,
      "Invalid pincode format (must be 6 digits, cannot start with 0)"
    ),
});

export default function UserForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData) => {
    const order = {
      orderData: {
        customer: {
          email: formData.email,
          name: formData.name,
          street: formData.street,
          pincode: formData.pincode,
          city: formData.city,
        },
      },
    };

    console.log(order);

    await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order }),
    });

    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="label">Name</label>
        <input type="text" className="input" {...register("name")} />
        <p>{errors?.name?.message}</p>
      </div>
      <div>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" {...register("email")} />
        <p>{errors?.email?.message}</p>
      </div>
      <div>
        <label className="label" htmlFor="street">
          Street
        </label>
        <input className="input" {...register("street")} />
        <p>{errors?.street?.message}</p>
      </div>
      <div>
        <label className="label" htmlFor="city">
          City
        </label>
        <input className="input" {...register("city")} />
        <p>{errors?.city?.message}</p>
      </div>
      <div>
        <label className="label" htmlFor="pincode">
          Pincode
        </label>
        <input className="input" {...register("pincode")} />
        <p>{errors?.pincode?.message}</p>
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
