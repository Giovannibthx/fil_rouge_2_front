import { useState } from "react";
import PropTypes from "prop-types";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";

import { useLogin, useLogout } from "../hooks/useAuth";
import PasswordField from "../utils/PasswordField";

const  LoginModal = ({ token }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { mutate, isLoading } = useLogin();
  const { mutate: logout, isLoading: isLogoutLoading } = useLogout();
  
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
    {token ? (
      <Button
      onPress={onOpen}
      variant="flat"
      color="primary"
      >
        Sign Out
      </Button>
    ) : (
      <Button
        onPress={onOpen}
        variant="flat"
        color="primary"
        >
        Sign In
      </Button>
    )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              {token ? (
                <>
                <ModalHeader className="flex flex-col gap-1 text-center">Are you sure you want to sign out ? 😭</ModalHeader>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={!isLogoutLoading ? onClose : null} isLoading={isLogoutLoading} onClick={logout}>
                    Yes
                  </Button>
                </ModalFooter>
                </>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <ModalHeader className="flex flex-col gap-1 text-center">Sign in now ! 🤘🏼</ModalHeader>
                  <ModalBody>
                      <Input variant="flat" size="md" type="email" label="Email" name="email" onChange={handleInputChange} isRequired />
                      <PasswordField variant="flat" onChange={handleInputChange} isRequired />
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
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

LoginModal.propTypes = {
  token: PropTypes.string
};

export default LoginModal;
