import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOut, syncUser } from './operations';

const initialState = {
	user: {
		name: null,
		email: null,
		avatarURL: null,
		registeredAt: null,
	},
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(registerUser.pending, state => {
				console.log('started');
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.token = action.payload.token;
				state.user = action.payload.user;
				console.log(state.user);
			})
			.addCase(registerUser.rejected, (state, action) => {
				console.log('rejected');
				console.log(action.payload);
			})

			.addCase(loginUser.pending, state => {})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.token = action.payload.token;
				state.user = action.payload.user;
			})
			.addCase(loginUser.rejected, (state, action) => {})

			.addCase(syncUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(syncUser.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.token = action.payload.token;
				state.user = action.payload.user;
				state.isRefreshing = false;
			})
			.addCase(syncUser.rejected, (state, action) => {})

			.addCase(logOut.fulfilled, (state, action) => {
				state.isLoggedIn = false;
				state.token = null;
				state.user = initialState.user;
			});
	},
});
export const authReducer = authSlice.reducer;
