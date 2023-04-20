import { useEffect } from "react";
import {createPortal} from "react-dom";
import { ModalDiv } from './Modal.styled';


const modalRoot = document.getElementById('modal-root');

export const Modal = ({close, children}) => {

  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    
    return () => document.removeEventListener("keydown", closeModal)
}, []);

  const closeModal = ({target, currentTarget, code}) => {
      if(target === currentTarget || code === "Escape") {
          close()
      }
  };

  return createPortal(
      <ModalDiv onClick={closeModal}>
        <div>
          {children}
        </div>
      </ModalDiv>,
      modalRoot
  );
};