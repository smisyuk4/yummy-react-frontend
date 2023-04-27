import styled from '@emotion/styled';
import { Icon } from 'components/Icon';

export const DivContainer = styled.div`
	display: block;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
	padding: 10px;
	margin: 0 -8px 32px;
	min-width: 359px;
	max-width: 1240px;
	@media ${props => props.theme.media.tablet} {
		margin: 0 0 50px 0;
		padding: 20px;
	}
	@media ${props => props.theme.media.desktop} {
		padding: 21px 40px;
	}
`;
export const ListBar = styled.ul`
	display: grid;
	grid-template-columns: 63% 22% 15%;
	min-width: 339px;
	max-width: 663px;
	align-content: center;

	@media ${props => props.theme.media.tablet} {
		min-width: 664px;
		max-width: 1160px;
	}
	@media ${props => props.theme.media.desktop} {
		min-width: 1160px;
	}
`;
export const ItemBar = styled.li`
	font-weight: 600;
	font-size: 12px;
	line-height: 1.5;
	letter-spacing: 0.03em;
	color: ${({ theme }) => theme.colors.buttonLightBG};
	/* margin-right: 24px; */
	&:nth-of-type(2) {
		margin-left: auto;
		margin-right: auto;
	}
	&:first-of-type {
		/* margin-right: 167px; */
	}
	&:last-of-type {
		/* margin-right: 0; */
	}
	@media ${props => props.theme.media.tablet} {
		font-size: 18px;
		/* margin-right: 78px; */

		&:first-of-type {
			/* margin-right: 318px; */
		}
		&:last-of-type {
			/* margin-right: 0; */
		}
	}

	@media ${props => props.theme.media.desktop} {
		/* margin-right: 142px; */

		&:first-of-type {
			/* margin-right: 750px; */
		}
		&:last-of-type {
			/* margin-right: 0; */
		}
	}
`;

export const ShoppingList = styled.ul`
	display: grid;
	min-width: 343px;
	max-width: 704px;
	margin-bottom: 100px;
	justify-content: center;

	@media ${props => props.theme.media.tablet} {
		min-width: 704px;
		max-width: 1160px;
		margin-bottom: 200px;
	}
	@media ${props => props.theme.media.desktop} {
		min-width: 1160px;
		margin-bottom: 195px;
	}
`;

export const ItemShoppingList = styled.li`
	/* outline: 1px red solid; */

	border-bottom: 1px solid ${({ theme }) => theme.colors.fontColorPassive};
	min-height: 84px;

	min-width: 343px;
	max-width: 704px;
	margin-bottom: 24px;

	display: grid;
	align-items: start;
	grid-template-columns: 20.4% 45.8% 24.2% 9.6%;

	&:last-of-type {
		margin-bottom: 0;
	}
	@media ${props => props.theme.media.tablet} {
		min-width: 704px;
		max-width: 1160px;
	}
	@media ${props => props.theme.media.desktop} {
		min-width: 1160px;
	}
`;
export const ContainerImg = styled.div`
	background-color: ${({ theme }) => theme.colors.primarySoft};
	border-radius: 6px;
	width: 48px;
	height: 48px;
	padding: 6px;
	@media ${props => props.theme.media.tablet} {
		width: 81px;
		height: 81px;
		padding: 8px 6px;
	}
`;

export const Image = styled.img`
	background-size: cover;
	/* width: 48px;
height: 48px; */
`;
export const TaglineP = styled.p`
	font-weight: 500;
	font-size: 10px;
	line-height: 1.2;

	color: ${({ theme }) => theme.colors.fontColorDark};
	/* margin-right: 108px; */
`;

export const Measure = styled.p`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.fontColor};
	font-weight: 600;
	font-size: 10px;
	line-height: 1.2;
	border-radius: 5px;
	min-width: 37px;

	/* margin-right: 46px; */
	padding: 4px;
	text-align: center;
	margin-right: auto;
	margin-left: auto;
`;

export const CloseBtn = styled.button`
	background-color: transparent;
	border: none;
	height: 14px;
	width: 14px;
	margin-right: auto;
	margin-left: auto;
`;
export const CloseIcon = styled(Icon)`
	height: 14px;
	width: 14px;
	stroke: ${({ theme }) => theme.colors.addRecipeFormFieldsDeleteButton};
`;

export const EmptyList = styled.p`
	font-weight: 600;
	font-size: 28px;
	line-height: 28px;
	letter-spacing: -0.02em;
	margin: 0;
	color: ${({ theme }) => theme.colors.primary};
	text-align: center;
	margin-bottom: 132px;
	@media screen and (min-width: 768px) {
		font-size: 32px;
		line-height: 32px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 44px;
		line-height: 44px;
	}
`;
export const ContainerEmpty = styled.div`
position: relative;
`
export const ShopBag = styled(Icon)`
	height: 50px;
	width: 50px;
	fill: ${({ theme }) => theme.colors.primary};

	position: absolute;
	top: -80px;
	left: 47%;
	@media screen and (min-width: 768px) {
		height: 75px;
		width: 75px;
		top: -140px;
	}
	@media screen and (min-width: 1440px) {
		height: 85px;
		width: 85px;
	}
`;
