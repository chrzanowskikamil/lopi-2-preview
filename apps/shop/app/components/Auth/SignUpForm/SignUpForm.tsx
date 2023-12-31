'use client';
import { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from '@lopi-2/common';
import { SignUpFormComponent } from './components/SignUpFormComponent/SignUpFormComponenet';

const SignUpForm: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  return (
    <>
      <Button onClick={handleShow}>Register</Button>
      <Modal
        title="REJESTRACJA"
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      >
        <SignUpFormComponent />
      </Modal>
    </>
  );
};

export default SignUpForm;
