import { FormStyled } from './RegisterForm.styled';

export const RegisterForm = () => {
	return (
		<FormStyled>
			<h1>Register</h1>
			<input type="text" placeholder="Username" />

			<input type="password" placeholder="Password" />

			<input type="email" placeholder="Email" />

			<button type="submit">Register</button>
		</FormStyled>
	);
};
