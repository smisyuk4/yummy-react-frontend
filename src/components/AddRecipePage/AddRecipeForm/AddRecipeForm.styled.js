import styled from '@emotion/styled';
import { NavLinkStyled } from 'components/ButtonNav/ButtonNav.styled';

export const AddRecipeFormWrapper = styled.div``;

export const WrapperAllInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 44px;

	@media ${props => props.theme.media.tablet} {
		gap: 100px;
	}
`;

export const AddButton = styled(NavLinkStyled)`
	margin-top: 18px;
	background-color: ${props => props.theme.colors.buttonDarkBG};
	border: 1px solid ${props => props.theme.colors.buttonDarkBG};
	@media ${props => props.theme.media.tablet} {
		margin-top: 32px;
	}
`;
