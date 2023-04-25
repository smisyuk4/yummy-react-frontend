import styled from '@emotion/styled';

export const TitleDiv = styled.div`
	padding-top: 29px;
	padding-bottom: 50px;
	width: 100%;

	@media ${props => props.theme.media.tablet} {
		padding-top: 51px;
		padding-bottom: 100px;
	}
	@media ${props => props.theme.media.desktop} {
		padding-top: 79px;
		padding-bottom: 100px;
	}
`;

export const TitleStyled = styled.h2`
	font-weight: 600;
	font-size: 28px;
	line-height: 28px;
	letter-spacing: -0.02em;

	margin: 0;
	color: ${({ theme }) => theme.colors.titleColor};

	@media screen and (min-width: 768px) {
		font-size: 32px;
		line-height: 32px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 44px;
		line-height: 44px;
	}
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

	@media screen and (min-width: 768px) {
		width: 14px;
		height: 14px;
	}

	&.left {
		left: 120px;
		top: 62px;

		@media screen and (min-width: 768px) {
			left: 220px;
			top: 74px;
		}
		@media screen and (min-width: 1440px) {
			left: 328px;
			top: 98px;
		}
	}

	&.right {
		right: 16px;
		top: 100px;

		@media screen and (min-width: 768px) {
			right: 24px;
			top: 100px;
		}
		@media screen and (min-width: 1440px) {
			right: 172px;
			top: 112px;
		}
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

	@media screen and (min-width: 768px) {
		width: 12px;
		height: 12px;
		left: 437px;
		top: 155px;
	}
	@media screen and (min-width: 1440px) {
		left: 807px;
		top: 182px;
	}
`;
