import axios from 'axios';
const URL = 'https://yummy-rest-api.onrender.com';

const instance = axios.create({
  baseURL: URL,
});

export const fetchChangeUserAvatar = async userInf => {
  try {
    const { data } = await instance.post('/user/avatars', userInf, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchChangeNameUser = async userInf => {
  try {
    const { data } = await instance.patch('/user/update', userInf, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
