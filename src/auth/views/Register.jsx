import { useState } from "react";

import { Button, Input } from "@nextui-org/react";

import { useRegister } from "../hooks/useAuth";
import PasswordField from "../utils/PasswordField";

import Nav from "../../nav/views/Nav";

const Register = () => {
  const { mutate, isLoading } = useRegister();

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate(form);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-4xl mb-4">Register</h1>
        <form onSubmit={handleFormSubmit} className="w-full max-w-lg mt-4">
          <Input variant="faded" size="md" type="text" label="First name" name="first_name" onChange={handleInputChange} isRequired className="mb-3 w-full" />
          <Input variant="faded" size="md" type="text" label="Last name" name="last_name" onChange={handleInputChange} isRequired className="mb-3 w-full" />
          <Input variant="faded" size="md" type="email" label="Email" name="email" onChange={handleInputChange} isRequired className="mb-3 w-full" />
          <PasswordField variant="faded" onChange={handleInputChange} className="mb-3 w-full" isRequired />
          <Button color="primary" type="submit" className="w-full mt-2" isLoading={isLoading}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;