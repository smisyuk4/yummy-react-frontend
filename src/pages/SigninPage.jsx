import { NavLink } from 'react-router-dom';
import { SigninForm } from 'components/SigninForm';

export const SigninPage = () => {
	return (
		<div>
			SigninPage
			<SigninForm />
			<NavLink to="/register">Register</NavLink>
		</div>
	);
};
