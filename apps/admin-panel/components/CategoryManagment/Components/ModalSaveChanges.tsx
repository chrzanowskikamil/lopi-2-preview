import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import React from 'react';
import { FC } from 'react';
type SaveChangesProps = {
  title: string;
  body: React.JSX.Element;
  handleInPopupSubmit: VoidFunction;
  others: { show: boolean; onHide: VoidFunction };
};

const SaveChanges: FC<SaveChangesProps> = ({
  others,
  handleInPopupSubmit,
  title,
  body,
}) => {
  return (
    <Modal
      {...others}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{title}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>1
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            others.onHide();
          }}
        >
          Take a step back
        </Button>
        <Button variant="primary" onClick={handleInPopupSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SaveChanges;
