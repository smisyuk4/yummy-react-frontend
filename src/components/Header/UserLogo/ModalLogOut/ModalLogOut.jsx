import {createPortal} from "react-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { DivStyledLogOut, Modal, WrapperBtns, BtnLogOut,  BtnCancel } from './ModalLogOut.styled';
import { IconCross } from '../ModalUserProfil/ModalUserProfil.styled';
import { logOut } from "redux/auth/operations";

const modalRoot = document.getElementById('modal-root');


export const ModalLogOut = ({isOpen, close}) => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const token = auth.token

  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    return () => document.removeEventListener("keydown", closeModal)
  });

  const closeModal = ({target, currentTarget, code}) => {
    if(target === currentTarget || code === "Escape") {
      console.log(target)
        close()
    }
  };


  if(!isOpen) return null;

  return createPortal(<DivStyledLogOut  onClick={closeModal}>
    <Modal>
        <IconCross id="icon-close" />
        <p>Are you sure you want to log out?</p>
        <WrapperBtns>
          <BtnLogOut type='submit' onClick={() => dispatch(logOut())}>Log out</BtnLogOut>
          <BtnCancel>Cancel</BtnCancel>
        </WrapperBtns>
    </Modal>
  </DivStyledLogOut>,
     modalRoot
     );
};