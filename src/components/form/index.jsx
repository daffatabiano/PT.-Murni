import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = "Email should be filled";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please Input Correct Email";
    }

    if (!form.message) {
      newErrors.message = "Message Cannot Empty";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    alert(`Message Successly Sent!, Thank You ${form.email.split("@")[0]}`);
    setForm({ email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="email" className="font-semibold text-lg">
        E-mail Address
      </label>
      <input
        type="email"
        name="email"
        placeholder="Insert Your E-mail Address Here"
        value={form.email}
        onChange={handleChange}
        className={`px-6 py-4 w-full bg-transparent rounded-lg border ${
          errors.email ? "border-red-500" : "border-textGray"
        } focus:outline-none`}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <label htmlFor="message" className="font-semibold text-lg">
        Message
      </label>
      <textarea
        name="message"
        placeholder="Insert Your Message Here"
        value={form.message}
        onChange={handleChange}
        className={`px-6 py-4 w-full bg-transparent rounded-lg border ${
          errors.message ? "border-red-500" : "border-textGray"
        } h-32 resize-none focus:outline-none`}
      />
      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

      <button
        type="submit"
        className="w-full px-4 py-2 rounded bg-accent text-white hover:opacity-90 transition"
      >
        Send Message
      </button>
    </form>
  );
}
