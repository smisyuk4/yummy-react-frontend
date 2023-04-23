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
	/* min-width: 320px; */

	@media screen and (min-width: 768px) {
		margin-top: 72px;
	}
	@media screen and (min-width: 1440px) {
		margin-top: 100px;
		/* margin-bottom: 200px; */
	}
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
	margin-right: 8px;

	@media screen and (min-width: 768px) {
		font-size: 18px;
		line-height: 18px;

		:not(:last-child) {
			margin-right: 35px;
		}
	}

	.nav-link {
		color: ${({ theme }) => theme.colors.fontColorPassive};
	}

	.nav-link:hover,
	.nav-link:active {
		color: ${({ theme }) => theme.colors.buttonPrimaryBG};
	}

	.isActive {
		color: ${({ theme }) => theme.colors.buttonPrimaryBG};
	}
`;

export const CardList = styled.ul`
	padding: 0;
	/* display: grid; */
	display: flex;
	flex-wrap: wrap;

	gap: 28px;
	margin-bottom: 100px;
	margin-top: 32px;

	@media screen and (min-width: 768px) {
		margin-top: 50px;
		gap: 32px;
	}
	@media screen and (min-width: 1440px) {
		gap: 14px;
		grid-row-gap: 100px;
	}
`;

export const CardItem = styled.li`
	position: relative;
	border-radius: 8px;
	overflow: hidden;
	width: 100%;

	.card-link {
		color: ${({ theme }) => theme.colors.fontColorDark};
	}

	@media screen and (min-width: 768px) {
		width: calc((100% - 32px) / 2);
	}
	@media screen and (min-width: 1440px) {
		width: calc((100% - 42px) / 4);
	}
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
