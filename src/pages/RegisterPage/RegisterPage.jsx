import { DivStyled, NavLinkStyled } from './RegisterPage.styled';
import { RegisterForm } from 'components/Auth/RegisterForm';
import { Image } from 'components/Auth/Image';
import { BackGround } from 'components/Auth/BackGround';

export const RegisterPage = () => {
	return (
		<DivStyled>
			<Image />
			<RegisterForm />
			<NavLinkStyled to="/login">Login</NavLinkStyled>
			<BackGround />
		</DivStyled>
	);
};
