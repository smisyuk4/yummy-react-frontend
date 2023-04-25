import { DivStyled, ModalProfil, LabelAvatar, InputAvatar, ImgAvatar, OvarlayImg, Figure, 
  // Figcaption, 
  // ImgDefault 
} from './ModalUserProfil.styled';
import { useState, useEffect } from 'react';
// import {LogoIcon} from '../../HeaderLogo/LogoIcon'

export const ModalUserProfil = ({open, close}) => {
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
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    console.log(fileField.files[0])
    formData.append("avatar", fileField.files[0]);
    const newName = {
      name: nameUser
    }
    dispatch(userUpdate(JSON.stringify(newName)));
    dispatch(userUpdateAvatar(formData));

  }

  const fetchRequest = async (searchName, page) => {
    const response = await axios.get('http://yummy-rest-api.onrender.com/user/update');
    return response.data;

  
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

if(!open) return null;

  return <DivStyled onClick={closeModal}>
    <ModalProfil>
      <form id="form-user-change" encType="multipart/data" onSubmit={handleSubmitForm}>
      <OvarlayImg>
        <LabelAvatar htmlFor="22" onChange={e => setUserImage(e.target.files[0])} > 
        <InputAvatar name="avatar" id="22" type="file" onChange={e => setUserImage(e.target.files[0])} multiple />
        <Figure>
        <ImgAvatar src={imageUrl} alt="avatar" />
          {/* <Figcaption>
            <ImgDefault src={LogoIcon} />
      </Figcaption> */}
    </Figure>
  </LabelAvatar>
</OvarlayImg>
        <input name="name" value={nameUser} type="text" onChange={handleChangeName} />
        <button type="submit">Save changes</button>
      </form>
    </ModalProfil>
  </DivStyled>
};