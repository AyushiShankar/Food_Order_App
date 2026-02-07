import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\'-]*)$/gi,
      "Name can only contain Latin letters, spaces, hyphens, and apostrophes"
    )
    .min(3, "Name must be at least 3 characters")
    .required("Please enter the name"),

  email: yup
    .string()
    .email("Please enter a valid Email Address")
    .required("Email address is required"),

  street: yup.string().required("Street Name is required"),
  city: yup.string().required("City Name is required"),
  pincode: yup
    .string()
    .max(6)
    .min(6)
    .required("Pincode is required")
    .matches(
      /^[1-9][0-9]{5}$/,
      "Invalid pincode format (must be 6 digits, cannot start with 0)"
    ),
});

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData) => {
    console.log("Form data", formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input type="text" className="input" {...register("name")} />
        <p>{error?.name?.message}</p>
      </div>
      <div>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" {...register("email")} />
        <p>{error?.email?.message}</p>
      </div>
      <div>
        <label className="label" htmlFor="street">
          Street
        </label>
        <input className="input" {...register("street")} />
        <p>{error?.street?.message}</p>
      </div>
      <div>
        <label className="label" htmlFor="city">
          City
        </label>
        <input className="input" {...register("city")} />
        <p>{error?.city?.message}</p>
      </div>
      <div>
        <label className="label" htmlFor="pincode">
          Pincode
        </label>
        <input className="input" {...register("pincode")} />
        <p>{error?.pincode?.message}</p>
      </div>
    </form>
  );
}
