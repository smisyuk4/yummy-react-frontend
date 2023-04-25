import styled from '@emotion/styled';

export const RecipeListStyled = styled.ul`
	display: grid;
	gap: 18px;
	margin-bottom: 40px;

	@media ${props => props.theme.media.tablet} {
		gap: 40px;
		margin-bottom: 50px;
	}

	@media ${props => props.theme.media.tablet} {
		gap: 50px;
	}
`;
