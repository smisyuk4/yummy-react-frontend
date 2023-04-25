import axios from "axios";

const URL = "https://yummy-rest-api.onrender.com";

const instance = axios.create({
    baseURL: URL
});


export const fetchLogout = async (token) => {
    try {
        const {data} = await instance.post('/user.logout', token)
        return data;
    }
    catch(error) {
        console.log(error)
    }
}

