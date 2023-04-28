import styled from '@emotion/styled';
// import { Measure } from 'components/Shopping/IngredientsShoppingList/IngredientsShoppingList.styled';
import pick from 'images/recipeImg/pick.svg';

export const IngredientsListSection = styled.section`
	padding-top: 32px;
`;

export const ListStyled = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
`;

export const ListBar = styled.div`
	background: #8baa36;
	margin-bottom: 24px;
	height: 40px;
	/* width: 100%; */
	padding: 12px 14px;
	display: flex;
	align-items: center;
	gap: 18px;
	border-radius: 8px;

	@media screen and (min-width: 768px) {
		margin-bottom: 50px;
		height: 60px;
		padding: 21px 32px;
		gap: 38px;
	}
	@media screen and (min-width: 1440px) {
		/* max-width: 1240px; */
		padding: 21px 40px;
		gap: 110px;
	}
`;

export const ItemBar = styled.span`
	font-weight: 600;
	font-size: 10px;
	line-height: 15px;
	letter-spacing: 0.03em;
	color: #fafafa;
	&:first-of-type{
		margin-right: auto;
	}
	@media screen and (min-width: 768px) {
		font-size: 18px;
		line-height: 27px;
	}
	@media screen and (min-width: 1440px) {
	}
`;

export const IngedientsItem = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 14px 29px 14px 14px;
	background: ${({ theme }) => theme.colors.recipeListBackground};
	border-radius: 8px;
	@media ${props => props.theme.media.tablet} {
		padding: 21px 58px 21px 28px;
	}
	@media ${props => props.theme.media.desktop} {
		padding: 27px 70px 27px 34px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	& img {
		width: 57px;
		height: 57px;

		margin-right: 12px;
		@media ${props => props.theme.media.tablet} {
			width: 112px;
			height: 112px;
			margin-right: 40px;
		}
		@media ${props => props.theme.media.desktop} {
			width: 128px;
			height: 128px;
			margin-right: 66px;
		}
	}
`;

export const IngredientName = styled.p`
	color: ${({ theme }) => theme.colors.recipeColor};
`;

export const IngredientDiv = styled.div`
	max-width: 90px;
	@media ${props => props.theme.media.tablet} {
		max-width: 208px;
	}
	@media ${props => props.theme.media.desktop} {
		max-width: 547px;
	}
`;

export const MeasureWrapper = styled.div`
	display: flex;
	margin-left: auto;
	padding: 4px;
	min-width: 37px;
	max-width: 47px;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 4px;
	margin-right: 32px;
	background-color: ${({ theme }) => theme.colors.primary};
	@media ${props => props.theme.media.tablet} {
		min-width: 78px;
		max-width: 150px;
		margin-right: 70px;
	}
	@media ${props => props.theme.media.desktop} {
		margin-right: 143px;
	}
`;

export const IngMeasure = styled.p`
	justify-content: center;
	align-items: center;
	text-align: center;

	color: #3e4462;
	font-weight: 500;
	font-size: 10px;
	line-height: 1.5;

	color: ${({ theme }) => theme.colors.fontColor};

	@media ${props => props.theme.media.tablet} {
		font-size: 18px;

		line-height: 1.5;
	}
	@media ${props => props.theme.media.desktop} {
	}
`;

export const ImageStyled = styled.image`
	display: block;
	object-fit: contain;
`;

export const InputCheck = styled.input`
	appearance: none;
	width: 18px;
	height: 18px;
	cursor: pointer;
	margin-bottom: -3px;
	@media screen and (min-width: 768px) {
		width: 35px;
		height: 35px;
		border: 2px solid rgba(126, 126, 126, 0.5);
	}
	border: 1px solid rgba(126, 126, 126, 0.5);
	border-radius: 4px;
	position: relative;
	&:checked::after {
		content: '';
		display: block;
		width: 18px;
		height: 18px;
		border-radius: 4px;
		background-image: url(${pick});
		background-size: 10px, 10px;
		background-repeat: no-repeat;
		background-position: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		@media screen and (min-width: 768px) {
			width: 35px;
			height: 35px;
			background-size: 17px, 17px;
		}
	}
`;

export const CheckBoxWrap = styled.span`
	border: 1px solid rgba(126, 126, 126, 0.5);
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 18px;
	color: transparent;
	@media (min-width: 768px) {
		width: 35px;
		height: 35px;
	}
`;
