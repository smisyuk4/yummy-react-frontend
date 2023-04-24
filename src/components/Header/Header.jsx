import { useState } from 'react';
import { HeaderStyled } from './Header.styled';
import {  } from './HeaderLogo';
import { HeaderNavigation } from './HeaderNavigation';
import {UserLogo} from './UserLogo/UserLogo';
import { BurgerMenu } from './BurgerMenu';
import { LogoHeader, HeaderLogoDiv } from './HeaderLogo/HeaderLogo.styled';

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = ()=> {
      setModalOpen(false);
  }

  return <HeaderStyled>
    {modalOpen && <BurgerMenu onCloseModal={closeModal} />}
    <HeaderLogoDiv>
      <LogoHeader />
    </HeaderLogoDiv>
    
    <HeaderNavigation />
    <UserLogo onOpenModal={openModal} />
  </HeaderStyled>;
};

