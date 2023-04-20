import { NavLink } from 'react-router-dom';
import { RegisterForm } from 'components/RegisterForm';

export const RegisterPage = () => {
	return (
		<div>
			RegisterPage
			<RegisterForm />
			<NavLink to="/login">Login</NavLink>
		</div>
	);
};
