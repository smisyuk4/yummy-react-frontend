import styled from '@emotion/styled';

export const DivStyled = styled.div`
	background-color: ${({ theme }) => theme.colors.buttonLightBG};
	margin-top: 50px;
	margin-bottom: 100px;

	@media screen and (min-width: 768px) {
		margin-top: 72px;
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
