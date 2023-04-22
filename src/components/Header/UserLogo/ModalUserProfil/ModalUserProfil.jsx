import { DivStyled, ModalProfil, LabelAvatar, InputAvatar, ImgAvatar, OvarlayImg, Figure, Figcaption, ImgDefault } from './ModalUserProfil.styled';
import { useState, useEffect } from 'react';
import {LogoIcon} from '../../HeaderLogo/LogoIcon'

export const ModalUserProfil = ({open, close}) => {

  const [userImage, setUserImage] = useState(null);
const [imageUrl, setImageUrl] = useState('');

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



useEffect(() => {
  if (userImage) {
      const photoUrl = URL.createObjectURL(userImage)
      setImageUrl(photoUrl);
  }  
},[userImage])

if(!open) return null;

  return <DivStyled onClick={closeModal}>
    <ModalProfil>
      <form enctype="multipart/data">
      <OvarlayImg>
        <LabelAvatar htmlFor="22" onChange={e => setUserImage(e.target.files[0])} > 
        <InputAvatar id="22" type="file" />
        <Figure class="personal-figure">
        <ImgAvatar src={imageUrl} alt="avatar" />
          <Figcaption>
            <ImgDefault src={LogoIcon} />
      </Figcaption>
    </Figure>
  </LabelAvatar>
</OvarlayImg>
        <input type="text" />
        <button type="submit">Save changes</button>
      </form>
    </ModalProfil>
  </DivStyled>;
};