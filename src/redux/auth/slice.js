import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOut, syncUser } from './operations';
import { toast } from 'react-toastify';
const initialState = {
	user: {
		name: null,
		email: null,
		avatarURL: null,
		registeredAt: null,
	},
	token: null,
	isLoggedIn: true,
	isRefreshing: false,
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
			.addCase(registerUser.rejected, (state, action) => {
				toast.error(
					`Register unsuccessful with error: ${action.payload.message}`,
					{
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored',
					}
				);
			})

			.addCase(loginUser.pending, state => {})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.token = action.payload.token;
				state.user = action.payload.user;
			})
			.addCase(loginUser.rejected, (state, action) => {
				toast.error(
					`Login unsuccessful with error: ${action.payload.message}`,
					{
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored',
					}
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

			.addCase(logOut.fulfilled, (state, action) => {
				state.isLoggedIn = false;
				state.token = null;
				state.user = initialState.user;
			});
	},
});
export const authReducer = authSlice.reducer;
