import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

export const fetchOwnRecipes = createAsyncThunk(
	'ownRecipes',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('ownRecipes');
			console.log(response);
			return response.data;
		} catch (e) {
			console.log('error');
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteRecipe = createAsyncThunk(
	'ownRecipes/deleteRecipe',
	async (id, thunkAPI) => {
		try {
			const response = await axios.delete(`ownRecipes/${id}`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
