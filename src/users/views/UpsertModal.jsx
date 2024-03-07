import { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { Icon } from '@iconify/react';

const  UpsertModal = ({ mutate, isLoading }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
      <Button
        onPress={onOpen}
        color="primary"
        radius="full"
        size="sm"
        endContent={<Icon icon="lucide:user-plus" style={{ fontSize: '16px'}} />}
        >
        Add user
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleFormSubmit}>
                <ModalHeader className="flex flex-col gap-1">Add user</ModalHeader>
                <ModalBody>
                    <Input size="md" type="text" label="Fist name" name="first_name" onChange={handleInputChange} isRequired />
                    <Input size="md" type="text" label="Last name" name="last_name" onChange={handleInputChange} isRequired />
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

export default UpsertModal;
