// import { createSelector } from "@reduxjs/toolkit";

export const selectRecipes = state => state.recipes.recipes;
export const selectIsLoading = state => state.recipes.isLoading;
export const selectError = state => state.recipes.error;
