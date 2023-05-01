import { createSlice } from '@reduxjs/toolkit';
import {
	registerUser,
	loginUser,
	logOut,
	syncUser,
	userUpdate,
	userUpdateAvatar,
} from './operations';
import { toast } from 'react-toastify';
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

const toastParam = {
	position: 'top-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'colored',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(registerUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.token = action.payload.token;
				state.user = action.payload.user;
				state.isRefreshing = false;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isRefreshing = false;
				toast.error(
					`Register unsuccessful with error: ${action.payload.message}`,
					toastParam
				);
			})

			.addCase(loginUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.token = action.payload.token;
				state.user = action.payload.user;
				state.isRefreshing = false;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isRefreshing = false;
				toast.error(
					`Login unsuccessful with error: ${action.payload.message}`,
					toastParam
				);
			})

			.addCase(syncUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(syncUser.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.user = action.payload;
				state.isRefreshing = false;
			})
			.addCase(syncUser.rejected, (state, action) => {
				state.isRefreshing = false;
			})

			.addCase(userUpdate.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(userUpdate.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isRefreshing = false;
				toast.success(`Update user successful`, toastParam);
			})
			.addCase(userUpdate.rejected, (state, action) => {
				state.isRefreshing = false;
				toast.error(
					`Update user unsuccessful with error: ${action.payload.message}`,
					toastParam
				);
			})

			.addCase(userUpdateAvatar.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(userUpdateAvatar.fulfilled, (state, action) => {
				state.user.avatarURL = action.payload.avatarURL;
				state.isRefreshing = false;
				toast.success(`Update avatar successful`, toastParam);
			})
			.addCase(userUpdateAvatar.rejected, (state, action) => {
				state.isRefreshing = false;
				toast.error(
					`Update avatar unsuccessful with error: ${action.payload.message}`,
					toastParam
				);
			})

			.addCase(logOut.fulfilled, (state, action) => {
				state.isLoggedIn = false;
				state.token = null;
				state.user = initialState.user;
			})
			.addCase(logOut.rejected, (state, action) => {
				state.isLoggedIn = false;
				state.token = null;
				state.user = initialState.user;
			});
	},
});
export const authReducer = authSlice.reducer;
