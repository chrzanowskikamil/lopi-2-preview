'use client';
import style from './Modal.module.scss';
import { Modal as BootstrapModal } from 'react-bootstrap';
import { ChildrenFC } from '../../models';

interface ModalComponentProps {
  title: string;
  isModalOpen: boolean;
  handleClose: VoidFunction;
}

export const Modal: ChildrenFC<ModalComponentProps> = ({
  title,
  children,
  isModalOpen,
  handleClose,
}) => {
  return (
    <BootstrapModal
      show={isModalOpen}
      onHide={handleClose}
      backdrop
      keyboard
      centered
      className={style.container}
      contentClassName={style.content}
    >
      <BootstrapModal.Header className={style.header}>
        <BootstrapModal.Title className={style.title}>
          {title}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body className={style.body}>
        {children}
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};
