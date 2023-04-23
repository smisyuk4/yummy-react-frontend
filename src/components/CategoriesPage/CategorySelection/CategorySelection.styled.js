import styled from '@emotion/styled';
import imageBG from '../../../images/MainPageImg/bg-2.png';

export const DivStyled = styled.div`
	/* position: relative; */
	font-family: 'Poppins';
	font-style: normal;
	/* overflow: hidden; */
	background-color: ${({ theme }) => theme.colors.buttonLightBG};
	margin-top: 50px;
	margin-bottom: 100px;
`;

export const TitleStyled = styled.h2`
	font-weight: 600;
	font-size: 28px;
	line-height: 28px;
	letter-spacing: -0.02em;

	margin: 0;
	color: ${({ theme }) => theme.colors.titleColor};
`;

export const JewelryBox = styled.div`
	z-index: 100;
`;

export const JewelryBoxBig = styled.div`
	position: absolute;
	width: 8px;
	height: 8px;
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 3px;
	transform: rotate(-25deg);

	&.left {
		left: 120px;
		top: 62px;
	}

	&.right {
		right: 16px;
		top: 100px;
	}
`;

export const JewelryBoxSmall = styled.div`
	position: absolute;
	width: 6px;
	height: 6px;
	background: ${({ theme }) => theme.colors.buttonDarkBG};
	border-radius: 3px;
	transform: rotate(-25deg);
	left: 248px;
	top: 126px;
`;

export const CategoryList = styled.ul`
	display: flex;
	flex-direction: row;

	width: calc(100% - 32px);
	margin: 0;
	margin-top: 50px;
	overflow-x: scroll;
	padding-left: 19px;
	padding-bottom: 22px;

	::-webkit-scrollbar {
		width: 72px; /* ширина для горизонтального скролла */
		height: 4px; /* высота для горизонтального скролла */
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

	padding: 10px;

	.nav-link {
		color: ${({ theme }) => theme.colors.fontColorPassive};
	}

	.nav-link:hover {
		color: ${({ theme }) => theme.colors.buttonPrimaryBG};
	}

	.isActive {
		color: ${({ theme }) => theme.colors.buttonPrimaryBG};
	}
`;

export const CardList = styled.ul`
	padding: 0;
	display: grid;
	gap: 28px;
	margin-bottom: 100px;
	margin-top: 32px;
`;

export const CardItem = styled.li`
	position: relative;
	border-radius: 8px;
	overflow: hidden;
`;

export const Image = styled.img`
	object-fit: cover;
`;

export const CardBox = styled.div`
	z-index: 10;
	position: absolute;
	background: #ffffff;
	border-radius: 8px;
	width: calc(100% - 36px);
	left: 18px;
	bottom: 26px;
`;

export const CardTitle = styled.p`
	padding: 16px;
	margin: 0;
`;

export const DivPositionen = styled.div`
	position: relative;
`;

export const ImageBG = styled.div`
	width: 375px;
	height: 814px;
	background-size: cover;
	background: url(${imageBG}) no-repeat bottom left;
	position: absolute;
	top: -426px;
	left: -34px;
	transform: rotate(90deg);
	filter: blur(4.5px);
	z-index: -5;
`;
