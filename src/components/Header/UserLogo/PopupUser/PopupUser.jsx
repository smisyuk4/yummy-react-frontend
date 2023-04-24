import { 
  // DivStyled, 
  OverlayDiv, ModalDiv, WrapperEdit, LogOutBtn } from './PopupUser.styled';
import {IditIcon} from './edit-01'
import { useState, useEffect } from 'react';
import { ModalUserProfil } from '../ModalUserProfil';


export const PopupUser = ({close}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return <OverlayDiv>
    {/* <ModalDiv> */}
      {/* <DivStyled> */}
      <WrapperEdit onClick={() => setIsOpenModal(true)}>
        <p>Edit profile</p>
        <IditIcon />
      </WrapperEdit>
      <LogOutBtn>Log out</LogOutBtn>
      <ModalUserProfil isOpen={isOpenModal} />
      {/* </DivStyled> */}
    {/* </ModalDiv> */}
  </OverlayDiv>
};