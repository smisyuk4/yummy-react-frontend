import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const auth = {
	set(token) {
		axios.defaults.headers.common.auth = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.auth = '';
	},
};

axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

export const registerUser = createAsyncThunk(
	'signup',
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.post('/user/register', credentials);
			auth.set(response.data.token);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);
export const loginUser = createAsyncThunk(
	'login',
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.post('/user/login', credentials);
			auth.set(response.data.token);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);
export const userUpdate = createAsyncThunk(
	'update',
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.patch('/user/update', credentials);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);
export const userUpdateAvatar = createAsyncThunk(
	'avatars',
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.post('/user/avatars', credentials, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);
export const logOut = createAsyncThunk('logout', async (_, thunkAPI) => {
	try {
		const response = await axios.post('/user/logout');
		auth.unset();
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});

export const syncUser = createAsyncThunk('sync', async (_, thunkAPI) => {
	const state = thunkAPI.getState();
	const persistedToken = state.auth.token;
	if (persistedToken === null) {
		return thunkAPI.rejectWithValue('Unable to fetch user');
	}
	try {
		auth.set(persistedToken);
		const response = await axios.get('/user/current');
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});
