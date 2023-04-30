import { useState, useEffect } from 'react';
import {
  UserLogoDiv,
  UserNameP,
  WrapperImg,
  UserAvatarImg,
  AvatarUser,
  BurgerMuneBtn,
  BurgerMenuIcon,
} from './UserLogo.styled';
import { Toggler } from './Toggler';
import { PopupUser } from './PopupUser/PopupUser';
import { useSelector } from 'react-redux';

export const UserLogo = ({ onOpenModal, themeToggler }) => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'LightTheme') {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
  }, [darkTheme]);

  const onClosePopUp = () => {
    setOpenPopUp(false);
  };
  const togglePopUp = () => {
    openPopUp ? setOpenPopUp(false) : setOpenPopUp(true);
  };
  const togglerTheme = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  const auth = useSelector(state => state.auth);
  const user = auth.user;
  const isGravatar = user.avatarURL.includes('gravatar');

  return (
    <UserLogoDiv>
      <WrapperImg onClick={togglePopUp}>
        {isGravatar && <AvatarUser id="icon-person" />}
        {!isGravatar && (
          <UserAvatarImg src={user.avatarURL} alt="User avatar" />
        )}
      </WrapperImg>
      <UserNameP onClick={togglePopUp}>{user.name}</UserNameP>
      <BurgerMuneBtn onClick={onOpenModal} themeToggler={themeToggler}>
        <BurgerMenuIcon id="icon-burger" />
      </BurgerMuneBtn>
      <Toggler
        toggleTheme={togglerTheme}
        darkTheme={darkTheme}
        themeToggler={themeToggler}
      />
      <PopupUser openPopUp={openPopUp} closePopUp={onClosePopUp} />
    </UserLogoDiv>
  );
};
