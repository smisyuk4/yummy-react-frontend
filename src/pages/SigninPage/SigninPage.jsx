import { DivStyled, NavLinkStyled } from './SigninPage.styled';
import { SigninForm } from 'components/Auth/SigninForm';
import { Image } from 'components/Auth/Image';
import { BackGround } from 'components/Auth/BackGround';

export const SigninPage = () => {
	return (
		<DivStyled>
			<Image />
			<SigninForm />
			<NavLinkStyled to="/register">Registration</NavLinkStyled>
			<BackGround />
		</DivStyled>
	);
};
