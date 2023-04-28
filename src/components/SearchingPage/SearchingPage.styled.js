import styled from '@emotion/styled';

export const DivStyled = styled.div`
	/* background-color: ${({ theme }) => theme.colors.buttonLightBG}; */
	margin-top: 32px;
	margin-bottom: 100px;

	@media screen and (min-width: 768px) {
		margin-top: 52px;
		margin-bottom: 200px;
	}
	@media screen and (min-width: 1440px) {
		margin-top: 84px;
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
	@media screen and (min-width: 768px) {
		width: 265px;
		height: 41px;
		margin-top: 28px;
	}
	@media screen and (min-width: 768px) {
		width: 310px;
		height: 47px;
	}
`;

export const TitleSearch = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.24px;
	margin: 0;
	color: ${({ theme }) => theme.colors.titleColor};

	@media screen and (min-width: 768px) {
		font-size: 14px;
		line-height: 18px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 18px;
		line-height: 24px;
	}
`;

export const SelectStyled = styled.select`
	width: 146px;
	height: 34px;
	margin-left: 15px;
	padding-left: 14px;
	color: ${({ theme }) => theme.colors.titleColor};
	background: ${({ theme }) => theme.colors.addRecipeFormFieldsBackground};
	border-radius: 6px;
	/* убираем стандартную стрелку */
	/* appearance: none;
	overflow: hidden; */
	@media screen and (min-width: 768px) {
		margin-left: 18px;
	}
`;

export const OptionStyled = styled.option`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.titleColor};
	background: ${({ theme }) => theme.colors.searchFormBGbyTitle};
	opacity: 0.5;
	@media screen and (min-width: 768px) {
		font-size: 14px;
		line-height: 21px;
	}
`;

export const CardList = styled.ul`
	padding: 0;
	display: flex;
	flex-wrap: wrap;

	gap: 28px;
	margin-top: 42px;

	@media screen and (min-width: 768px) {
		margin-top: 40px;
		gap: 32px;
	}
	@media screen and (min-width: 1440px) {
		margin-top: 90px;
		gap: 14px;
		grid-row-gap: 100px;
	}
`;

export const CardItem = styled.li`
	position: relative;
	border-radius: 8px;
	overflow: hidden;
	width: 100%;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.03);
	}

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
	background: ${({ theme }) => theme.colors.bgModal};
	border-radius: 8px;
	width: calc(100% - 36px);
	left: 18px;
	bottom: 26px;
`;

export const CardTitle = styled.p`
	padding: 16px;
	margin: 0;
`;

export const DivNoResultsStyle = styled.div`
	margin-top: 50px;
`;
