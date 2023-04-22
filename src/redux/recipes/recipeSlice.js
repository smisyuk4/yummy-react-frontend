import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "./recipesThunk";

const initialState = {
    recipes: {
        recipes: null,
        ownRecipe: false,
        isLoading: false,
        error: null
    },
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,

    extraReducers: {
    [fetchRecipes.pending](state){
      state.isLoading = true;
    },
    [fetchRecipes.fulfilled](state, action){
      state.isLoading = false;
      state.error = null;
      state.recipes = action.payload[0];
    },
      [fetchRecipes.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      },
  },
});


export const recipesReducer = recipesSlice.reducer;