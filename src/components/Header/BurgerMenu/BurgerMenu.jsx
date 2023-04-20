import { useState } from 'react';
import { Modal } from 'components/Modal';
import { BurgerMenuDiv, BtnCloseModal } from './BurgerMenu.styled';
import { HeaderNavigation } from '../HeaderNavigation';
import CloseModalImg from 'images/headerImges/x.png'
const modalRoot = document.getElementById('modal-root');


export const BurgerMenu = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (modalContent) => {
    setModalOpen(true);
  }
  const closeModal = ()=> {
      setModalOpen(false);
  }

  return (
    <BurgerMenuDiv>
      {modalOpen && (<Modal close={closeModal}>
        <BtnCloseModal onClick={closeModal} className={styles.close}>
          <CloseModalImg src={searchImg} alt='cross'></CloseModalImg>
        </BtnCloseModal>
      <HeaderNavigation />
      </Modal>)}
    </BurgerMenuDiv>
  ) 
};