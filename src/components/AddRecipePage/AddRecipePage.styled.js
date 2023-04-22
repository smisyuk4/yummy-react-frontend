import styled from '@emotion/styled';

export const AddRecipeDivStyled = styled.AddRecipeDiv`
	width: 100vw;
	height: 100vh;
	position: absolute;
	bottom: 0;
	right: 0;

	@media ${props => props.theme.media.tablet} {
	}
	@media ${props => props.theme.media.desktop} {
	}
`;
