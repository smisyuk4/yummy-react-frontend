import { NavLink } from 'react-router-dom';
import { NavStyled } from './WelcomeNav.styled';

export const WelcomeNav = () => {
	return (
		<NavStyled>
			<NavLink to="/login">Login</NavLink>
			<NavLink to="/register">Register</NavLink>
		</NavStyled>
	);
};
