import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);