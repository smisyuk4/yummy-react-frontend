import styled from '@emotion/styled';

export const DivStyled = styled.div`
	position: relative;
	font-family: 'Poppins';
	font-style: normal;
	overflow: hidden;
`;

export const TitleStyled = styled.h2`
	font-weight: 600;
	font-size: 28px;
	line-height: 28px;
	letter-spacing: -0.02em;

	margin: 0;
	color: ${({ theme }) => theme.colors.titleColor};
`;

export const JewelryBox = styled.div``;

export const JewelryBoxBig = styled.div`
	width: 8px;
	height: 8px;
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 3px;
	transform: rotate(-25deg);
`;

export const JewelryBoxSmall = styled.div`
	width: 6px;
	height: 6px;
	background: ${({ theme }) => theme.colors.buttonDarkBG};
	border-radius: 3px;
	transform: rotate(-25deg);
`;

export const CategoryList = styled.ul`
	display: flex;
	flex-direction: row;

	width: 100%;
	margin: 0;
	overflow-x: scroll;
	padding: 0;
	padding-bottom: 22px;

	::-webkit-scrollbar {
		width: 72px; /* ширина для горизонтального скролла */
		height: 3px; /* высота для горизонтального скролла */
		background-color: ${({ theme }) => theme.colors.fontColorPassive};
	}

	/* ползунок скроллбара */
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.primary};
	}
`;

export const CategoryItem = styled.li`
	font-weight: 400;
	font-size: 14px;
	line-height: 14px;

	color: #e0e0e0;
	padding: 10px;
`;
