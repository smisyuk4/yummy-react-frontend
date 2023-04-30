import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalDiv } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ close, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => document.removeEventListener('keydown', closeModal);
  });

  const closeModal = ({ target, code }) => {
    if (target.id === 'modalClose' || code === 'Escape') {
      close(false);
    }
  };

  return createPortal(
    <ModalDiv id="modalClose" onClick={closeModal}>
      <div>{children}</div>
    </ModalDiv>,
    modalRoot
  );
};
