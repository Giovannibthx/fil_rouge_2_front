import { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";

import { useLogin } from "../hooks/useAuth";

const  LoginModal = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { mutate, isLoading } = useLogin();

  const [form, setForm] = useState({
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
      <Button
        onPress={onOpen}
        variant="flat"
        color="primary"
        >
        Sign In
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleFormSubmit}>
                <ModalHeader className="flex flex-col gap-1 text-center">Sign in now !</ModalHeader>
                <ModalBody>
                    <Input size="md" type="email" label="Email" name="email" onChange={handleInputChange} isRequired />
                    <Input size="md" type="password" label="Password" name="password" onChange={handleInputChange} isRequired />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={!isLoading ? onClose : null} isLoading={isLoading} type="submit">
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
