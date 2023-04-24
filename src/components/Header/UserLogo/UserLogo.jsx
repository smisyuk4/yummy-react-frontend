import { useState } from 'react';
import { UserLogoDiv, UserNameP, WrapperImg, UserAvatarImg, BurgerMuneBtn, BurgerMenuImg } from './UserLogo.styled';
import { PopupUser } from './PopupUser/PopupUser'
import { useSelector } from 'react-redux';


export const UserLogo = ({ onOpenModal }) => {
 const [openPopUp, setOpenPopUp] = useState(false)

 const onClosePopUp = () => {
  setOpenPopUp(false)
}

  const auth = useSelector(state => state.auth)
  const user = auth.user
  console.log(auth.isLoggedIn)

  return <UserLogoDiv >
          <WrapperImg >
            <UserAvatarImg onClick={() => setOpenPopUp(true)} src={user.avatarURL} alt="avatar"></UserAvatarImg>
            {/* <UserIcon id="icon-person"/>       */}
          </WrapperImg>
          <UserNameP>{user.name}</UserNameP>
          <BurgerMuneBtn onClick={onOpenModal}>
          <BurgerMenuImg id='icon-burger' />
        </BurgerMuneBtn>
        <PopupUser 
          openPopUp={openPopUp}
          closePopUp={onClosePopUp}
        />
  </UserLogoDiv>;
};