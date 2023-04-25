import axios from 'axios';

export const fetchUpdateSubscribe = async (email) => {
	const responce = await axios.post(`/user/subscribe`, email);
	return responce;
};

