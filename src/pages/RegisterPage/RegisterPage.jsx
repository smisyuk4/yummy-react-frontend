import { DivStyled } from './RegisterPage.styled';
import { NavLink } from 'react-router-dom';
import { RegisterForm } from 'components/Auth/RegisterForm';
import { Image } from 'components/Auth/Image';
import { BackGround } from 'components/Auth/BackGround';

export const RegisterPage = () => {
	return (
		<DivStyled>
			<Image />
			<RegisterForm />
			<NavLink to="/login">Login</NavLink>
			<BackGround />
		</DivStyled>
	);
};
