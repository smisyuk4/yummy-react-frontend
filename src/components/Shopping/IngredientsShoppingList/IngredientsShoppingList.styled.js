import styled from '@emotion/styled';
import { Icon } from 'components/Icon';

export const DivContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
	padding: 10px;
	margin: 0 0 32px 0;
	@media ${props => props.theme.media.tablet} {
		padding: 20px;
	}
	@media ${props => props.theme.media.desktop} {
		padding: 21px 40px;
	}
`;

export const ListBar = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 664px;
	min-width: 339px;
`;
export const ItemBar = styled.li`
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 1.5;
	letter-spacing: 0.03em;
	color: ${({ theme }) => theme.colors.buttonLightBG};
	margin-right: 24px;

	&:first-of-type {
		margin-right: 167px;
	}
	&:last-of-type {
		margin-right: 0;
	}
	@media ${props => props.theme.media.tablet} {
		font-size: 18px;
		margin-right: 78px;

		&:first-of-type {
			margin-right: 318px;
		}
		&:last-of-type {
			margin-right: 0;
		}
	}

	@media ${props => props.theme.media.desktop} {
		margin-right: 142px;

		&:first-of-type {
			margin-right: 750px;
		}
		&:last-of-type {
			margin-right: 0;
		}
	}
`;

export const ShoppingList = styled.ul`
	display: block;
	padding: 0;
	margin: 0;
	margin-left: auto;
	margin-right: auto;
`;

export const ItemShoppingList = styled.li`
	outline: 1px red solid;
	display: flex;
	align-content: flex-start;
	flex-wrap: nowrap;
	align-items: flex-start;
	gap: 10px;
	border-bottom: 1px solid #e0e0e0;
	min-height: 84px;
	min-width: 343px;
	margin-bottom: 24px;
	

	&:last-of-type {
		margin-bottom: 0;
	}
`;
export const ContainerImg = styled.div`
margin-right: 10px;
background-color: ${({ theme }) => theme.colors.primarySoft};
border-radius: 6px;
min-width: 60px;
min-height: 60px;
padding: 6px;
`

export const Image = styled.img`
width: 48px;
height: 48px;
`
export const TaglineP = styled.p`
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	line-height: 1.2;

	color: ${({ theme }) => theme.colors.fontColorDark};
	margin-right: 108px;
`;

export const Measure = styled.p`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.fontColor};
	border-radius: 5px;
	margin-right: 46px;
	padding: 4px;
	min-width: 37px;
`;

export const CloseBtn = styled.button`
	background-color: transparent;
	border: none;
	height: 14px;
	width: 14px;
	margin-right: 19px;
`;
export const CloseIcon = styled(Icon)`
	height: 14px;
	width: 14px;
	stroke: #333333;
`;
