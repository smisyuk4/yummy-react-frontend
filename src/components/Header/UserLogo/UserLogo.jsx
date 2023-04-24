import { useState } from 'react';
import { UserLogoDiv, UserNameP, WrapperImg, UserAvatarImg, UserIcon, BurgerMuneBtn, BurgerMenuImg } from './UserLogo.styled';
import burgerMenuImg from 'images/menu-03.png'
import userImg from 'images/user.png'
import { PopupUser } from './PopupUser/PopupUser'
import { useSelector } from 'react-redux';


export const UserLogo = ({ onOpenModal }) => {

  const auth = useSelector(state => state.auth)
  const user = auth.user
  console.log(auth.isLoggedIn)

  return <UserLogoDiv >
          <WrapperImg >
            <UserAvatarImg src={user.avatarURL} alt="avatar"></UserAvatarImg>
            {/* <UserIcon id="icon-person"/>       */}
          </WrapperImg>
          <UserNameP>{user.name}</UserNameP>
          <BurgerMuneBtn onClick={onOpenModal}>
          <BurgerMenuImg id='icon-burger' />
        </BurgerMuneBtn>
        <PopupUser />
  </UserLogoDiv>;
};