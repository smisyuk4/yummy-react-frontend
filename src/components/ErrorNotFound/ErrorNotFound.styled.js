import styled from '@emotion/styled';

export const DivStyled = styled.div`
	margin-top: 32px;
	margin-bottom: 100px;

	@media screen and (min-width: 768px) {
		margin-top: 52px;
		margin-bottom: 200px;
	}
	@media screen and (min-width: 1440px) {
		margin-top: 84px;
	}
`;

export const ImageStyled = styled.img`
	width: 259px;
	height: 170px;
	margin: 0 auto;
	margin-bottom: 14px;

	@media screen and (min-width: 768px) {
		width: 498px;
		height: 327px;
		margin-bottom: 32px;
	}
`;

export const TextBox = styled.div`
	padding: 0 42px;
`;

export const TitleStyled = styled.h2`
	font-weight: 600;
	font-size: 18px;
	line-height: 20px;
	letter-spacing: -0.02em;
	font-feature-settings: 'liga' off;
	margin-bottom: 8px;
	text-align: center;
	color: ${({ theme }) => theme.colors.placeHolderColor};

	@media screen and (min-width: 768px) {
		font-size: 24px;
		line-height: 24px;
		margin-bottom: 14px;
	}
`;

export const TextStyled = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	text-align: center;
	letter-spacing: -0.02em;
	font-feature-settings: 'liga' off;
	color: ${({ theme }) => theme.colors.placeHolderColor};
	opacity: 0.5;

	@media screen and (min-width: 768px) {
		font-size: 18px;
		line-height: 24px;
	}
`;
