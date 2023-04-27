import { useState } from 'react';
import { HeaderStyled } from './Header.styled';
import { HeaderNavigation } from './HeaderNavigation';
import {UserLogo} from './UserLogo/UserLogo';
import { BurgerMenu } from './BurgerMenu';
import { HeaderLogo } from './HeaderLogo';

export const Header = ({themeToggler}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = ()=> {
      setModalOpen(false);
  }
  
  return <HeaderStyled>
    {modalOpen && <BurgerMenu closeModal={closeModal} />}
      <HeaderLogo />
    <HeaderNavigation />
    <UserLogo onOpenModal={openModal} themeToggler={themeToggler} />
  </HeaderStyled>;
};

