import styled from '@emotion/styled';

export const DivStyled = styled.div`
	background-color: ${({ theme }) => theme.colors.buttonLightBG};
	margin-top: 50px;
	margin-bottom: 100px;

	@media screen and (min-width: 768px) {
		margin-top: 72px;
		margin-bottom: 305px;
	}
	@media screen and (min-width: 1440px) {
		margin-top: 100px;
		margin-bottom: 200px;
	}
`;

export const SearchByBox = styled.div`
	margin-top: 24px;
	margin-left: auto;
	margin-right: auto;
	width: 223px;
	height: 34px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TitleSearch = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.24px;
	margin: 0;

	color: #001833;
`;

export const SelectStyled = styled.select`
	width: 146px;
	height: 34px;
	margin-left: 15px;
	padding-left: 14px;
	background: #7575751f;
	border-radius: 6px;

	/* убираем стандартную стрелку */
	/* appearance: none;
	overflow: hidden; */
`;

export const OptionStyled = styled.option`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: -0.02em;
	color: #000000;
	opacity: 0.5;
`;

export const CardList = styled.ul`
	padding: 0;
	/* display: grid; */
	display: flex;
	flex-wrap: wrap;

	gap: 28px;
	margin-bottom: 191px;
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
