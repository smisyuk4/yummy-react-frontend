import axios from 'axios';

export const fetchLogout = async token => {
  try {
    const { data } = await axios.post('/user.logout', token);
    return data;
  } catch (error) {
    console.log(error);
  }
};
