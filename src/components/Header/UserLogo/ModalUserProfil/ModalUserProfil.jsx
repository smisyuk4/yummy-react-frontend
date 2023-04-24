import {createPortal} from "react-dom";
import { DivStyled, ModalProfil, LabelAvatar, InputAvatar,  ImgAvatar, OvarlayImg, Figure, ImgDefault, IconPerson, IconPlus, Input, FormUpdateUser, LabelInput, IconEdit, IconPersonInput, BtnModalUser, IconCross, FigureAvatar
} from './ModalUserProfil.styled';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const modalRoot = document.getElementById('modal-root');


export const ModalUserProfil = ({isOpen, close}) => {
  const auth = useSelector(state => state.auth)
  const user = auth.user

  console.log(user)
  const isGravatar = user.avatarURL.includes('gravatar')
  console.log(isGravatar)
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
    const formEl = document.getElementById('form-user-change')
    let formData = new FormData();
    formData.append("name", {nameUser});
    formData.append("avatarURL", {imageUrl});
  
    let response = await fetch('https://yummy-rest-api.onrender.com/user/update', {
      method: 'PATCH',
      body: formData
    });
    let result = await response.json();
    console.log(result)
    console.log(result.message);
    console.log(formData)
}

if(!isOpen) return null;

  return createPortal(
    <DivStyled onClick={closeModal}>
            <ModalProfil>
            <FormUpdateUser id="form-user-change" encType="multipart/data" onSubmit={handleSubmitForm}>
 
            <LabelAvatar htmlFor="22" onChange={e => setUserImage(e.target.files[0])} > 
            <InputAvatar name="avatar" id="22" type="file" onChange={e => setUserImage(e.target.files[0])} multiple />
            {/* <FigureAvatar> */}
                
                <OvarlayImg>
                  {isGravatar && <IconPerson id="icon-person" />}
                  {imageUrl && <ImgAvatar src={imageUrl} alt="avatar"/>}
                {/* <Figcaption> */}
                <IconPlus id="icon-plus" />
                {/* </Figcaption> */}
                </OvarlayImg>
            {/* </FigureAvatar> */}
            
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