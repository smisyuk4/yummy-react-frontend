import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, refreshUser, logOut } from './operations';

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(registerUser.pending, state => {})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.token = action.payload.token;
				state.user = action.payload.user;
			})
			.addCase(registerUser.rejected, (state, action) => {})
			.addCase(loginUser.pending, state => {})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.token = action.payload.token;
				state.user = action.payload.user;
			})
			.addCase(loginUser.rejected, (state, action) => {})

			.addCase(logOut.fulfilled, (state, action) => {
				state.isLoggedIn = false;
				state.token = null;
				state.user = initialState.user;
			});
	},
});
export const authReducer = authSlice.reducer;
