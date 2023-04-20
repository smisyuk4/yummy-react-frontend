import { FormStyled } from './SigninForm.styled';

export const SigninForm = () => {
	return (
		<FormStyled>
			<h1>Sign In</h1>
			<input type="email" placeholder="Email" />

			<input type="password" placeholder="Password" />

			<button type="submit">Sign In</button>
		</FormStyled>
	);
};
