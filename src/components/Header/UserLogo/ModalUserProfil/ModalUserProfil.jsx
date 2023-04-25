import {createPortal} from "react-dom";
import { DivStyled, ModalProfil, LabelAvatar, InputAvatar,  ImgAvatar, OvarlayImg, Figure, ImgDefault, IconPerson, IconPlus, Input, FormUpdateUser, LabelInput, IconEdit, IconPersonInput, BtnModalUser, IconCross, FigureAvatar
} from './ModalUserProfil.styled';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
// import { fetchChangeUserAvatar, fetchChangeNameUser } from "./fetchApiChangeUserProfil";

const URL = "https://yummy-rest-api.onrender.com/user/update";
const url = 'http://localhost:3001/user/update'

const modalRoot = document.getElementById('modal-root');


export const ModalUserProfil = ({isOpen, close}) => {
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

useEffect(() => {
  const fetchImages = async (data) => {
        try {
          const result = await fetchRequest(data);
          console.log(result)
      } catch (error) {
          console.log(error.message);
      }
  };
  fetchImages(nameUser)
}, []);


const handleChangeName = (e) => {
  const { value } = e.target;
  setNameUser(value);
  }

  const formEl = document.getElementById('form-user-change')
  console.log(auth.token)

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append("name", {nameUser});
    formData.append("avatarURL", {imageUrl});
    return formData;
  }

  const fetchRequest = async (searchName, page) => {
    const response = await axios.get('http://yummy-rest-api.onrender.com/user/update');
    return response.data;

  
    // let response = await fetchChangeNameUser(nameUser)

    // fetch('http://yummy-rest-api.onrender.com/user/update', {
    //   method: 'PATCH',
    //   body: formData,
    //   headers: {
    //     'Authorization': `Bearer ${auth.token}`, 
    //     'Content-Type': 'application/x-www-form-urlencoded'
    // }, 
    // });
    // let result = await response.json();
    // console.log(response)
    // console.log(response.message);
    // console.log(formData)
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