import styled from '@emotion/styled';
// import { NavLinkStyled } from 'components/ButtonNav/ButtonNav.styled';
import { FormButton } from 'components/ButtonNav/ButtonNav.styled';

export const AddRecipeFormWrapper = styled.div``;

export const WrapperAllInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 44px;

	@media ${props => props.theme.media.tablet} {
		gap: 100px;
	}
`;

// export const AddButton = styled(NavLinkStyled)`
// 	margin-top: 18px;
// 	cursor: pointer;
// 	display: inline-flex;
// 	z-index: 100;
// 	position: relative;
// 	background-color: ${props => props.theme.colors.buttonDarkBG};
// 	border: 1px solid ${props => props.theme.colors.buttonDarkBG};
// 	@media ${props => props.theme.media.tablet} {
// 		margin-top: 32px;
// 	}
// `;

export const AddButton = styled(FormButton)`
	margin-top: 18px;
	border-radius: 24px 44px;
	cursor: pointer;
	display: inline-flex;
	z-index: 100;
	position: relative;
	padding: 14px 64px;
	background-color: ${props => props.theme.colors.buttonDarkBG};
	border: none;
	&:hover {
		transition: background-color 0.3s ease-in-out;
		background-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
		color: ${({ theme }) => theme.colors.buttonLightBG};
	}
	@media ${props => props.theme.media.tablet} {
		margin-top: 32px;
	}
`;
