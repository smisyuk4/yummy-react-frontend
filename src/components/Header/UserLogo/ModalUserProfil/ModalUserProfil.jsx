import {createPortal} from "react-dom";
import { DivStyled, ModalProfil, LabelAvatar, InputAvatar,  ImgAvatar, OvarlayImg, Figure, ImgDefault, IconPerson, IconPlus, Input, FormUpdateUser, LabelInput, IconEdit, IconPersonInput, BtnModalUser, IconCross
  // Figcaption, 
  // ImgDefault 
} from './ModalUserProfil.styled';
import { useState, useEffect } from 'react';
// import {LogoIcon} from '../../HeaderLogo/LogoIcon'

const modalRoot = document.getElementById('modal-root');


export const ModalUserProfil = ({isOpen, close}) => {

  const [nameUser, setNameUser] = useState('')
  const [userImage, setUserImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

useEffect(() => {
  document.addEventListener("keydown", closeModal);
  return () => document.removeEventListener("keydown", closeModal)
});

useEffect(() => {
  if (userImage) {
      const photoUrl = URL.createObjectURL(userImage)
      setImageUrl(photoUrl);
  }  
},[userImage]);

const closeModal = ({target, currentTarget, code}) => {
  if(target === currentTarget || code === "Escape") {
    console.log(target)
      close()
  }
};

const handleChangeName = (e) => {
  const { value } = e.target;
  setNameUser(value);
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    // const formEl = document.getElementById('form-user-change')
    // let formData = new FormData(formEl)
  
    // let response = await fetch('https://yummy-rest-api.onrender.com/user/update', {
    //   method: 'PATCH',
    //   body: new FormData(formEl)
    // });
    // let result = await response.json();
    //  console.log(result.message);

       let formData = new FormData();
      formData.append("name", {nameUser});
      formData.append("avatarURL", {imageUrl});

    console.log(formData)
}

if(!isOpen) return null;

  return createPortal(
    <DivStyled onClick={closeModal}>
            <ModalProfil>
            <FormUpdateUser id="form-user-change" encType="multipart/data" onSubmit={handleSubmitForm}>
 
            <LabelAvatar htmlFor="22" onChange={e => setUserImage(e.target.files[0])} > 
            <InputAvatar name="avatar" id="22" type="file" onChange={e => setUserImage(e.target.files[0])} multiple />
            <OvarlayImg>
            {/* <Figcaption> */}
            <IconPerson id="icon-person" />
            <IconPlus id="icon-plus" />
            {/* </Figcaption> */}
            </OvarlayImg>
            </LabelAvatar>
            <LabelInput>
              <Input name="name" value={nameUser} type="text" placeholder="name" onChange={handleChangeName} />
              <IconPersonInput id="icon-person" />
              <IconEdit id="icon-edit" />
            </LabelInput>
            
            <BtnModalUser type="submit">Save changes</BtnModalUser>
            </FormUpdateUser>
            <IconCross id="icon-close" />
    </ModalProfil>
  </DivStyled>,
     modalRoot
     );
};