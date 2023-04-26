import {createPortal} from "react-dom";
import { DivStyled, ModalProfil, LabelAvatar, InputAvatar,  ImgAvatar, OvarlayImg, IconPerson, IconPlus, Input, FormUpdateUser, LabelInput, IconEdit, IconPersonInput, BtnModalUser, IconCross } from './ModalUserProfil.styled';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userUpdate, userUpdateAvatar } from 'redux/auth/operations';


const modalRoot = document.getElementById('modal-root');

export const ModalUserProfil = ({isOpen, close}) => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const user = auth.user
  const isGravatar = user.avatarURL.includes('gravatar')

  const [nameUser, setNameUser] = useState('')
  const [userImage, setUserImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  
useEffect(() => {
  document.addEventListener("keydown", closeModal);
  return () => document.removeEventListener("keydown", closeModal)
});

useEffect(() => {
  if (userImage) {
      const photoUrl = window.URL.createObjectURL(userImage)
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
    const dataFile = new FormData();
    dataFile.set('avatar', formEl.files[0]);
 
    const newName = {
      name: nameUser
    }
    dispatch(userUpdate(newName));
    dispatch(userUpdateAvatar(dataFile));
  }
 
    
if(!isOpen) return null;

  return createPortal(
    <DivStyled onClick={closeModal}>
            <ModalProfil>
            <FormUpdateUser method="post" encType="multipart/form-data" onSubmit={handleSubmitForm}>
                <LabelAvatar htmlFor="form-user-change" onChange={e => setUserImage(e.target.files[0])} > 
                <InputAvatar id="form-user-change" name="avatar" type="file" accept="image/*" onChange={e => setUserImage(e.target.files)} />
                    <OvarlayImg>
                      {isGravatar && <IconPerson id="icon-person" />}
                      {imageUrl && <ImgAvatar src={imageUrl} alt="avatar"/>}
                    <IconPlus id="icon-plus" />
                    </OvarlayImg>
                </LabelAvatar>
                <LabelInput>
                  <Input value={nameUser} type="text" placeholder="name" onChange={handleChangeName} />
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