import styled from '@emotion/styled';

export const RecipeIngredientsFieldset = styled.fieldset`
	padding-bottom: 100px;
	width: 100%;
	border: none;
	@media ${props => props.theme.media.tablet} {
		width: 704px;
	}
	@media ${props => props.theme.media.desktop} {
		width: 617px;
	}
`;

export const HeadingStyledContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0;
	margin-bottom: 28px;
	@media ${props => props.theme.media.tablet} {
		margin-bottom: 32px;
		justify-content: space-between;
	}
	@media ${props => props.theme.media.desktop} {
		margin-bottom: 36px;
		justify-content: space-between;
	}
`;

export const RecipeIngredientsHeading = styled.h2`
	line-height: 1;
	font-size: 24px;
	font-weight: 600;
	margin: 0 116px 0 0;
	@media ${props => props.theme.media.tablet} {
		margin: 0;
	}
	@media ${props => props.theme.media.desktop} {
		margin: 0;
	}
`;

export const RecipeIngredientsUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding: 0;
	@media ${props => props.theme.media.tablet} {
		gap: 24px;
	}
	@media ${props => props.theme.media.desktop} {
		gap: 24px;
	}
`;
