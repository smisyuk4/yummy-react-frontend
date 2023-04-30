import styled from '@emotion/styled';

export const TitleStyled = styled.h2`
	font-weight: 600;
	font-size: 28px;
	line-height: 28px;
	letter-spacing: -0.02em;
	margin: 0;
	color: ${({ theme }) => theme.colors.titleColor};
	--animate-duration: 1s;
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
		top: -6px;
		@media screen and (min-width: 768px) {
			left: 220px;
			top: -3px;
		}
		@media screen and (min-width: 1440px) {
			left: 328px;
			top: 28px;
		}
	}
	&.right {
		right: 16px;
		top: 27px;
		@media screen and (min-width: 768px) {
			right: 24px;
			top: 10px;
		}
		@media screen and (min-width: 1440px) {
			right: 172px;
			top: 42px;
		}
	}
`;

export const JewelryBoxSmall = styled.div`
	position: absolute;
	width: 6px;
	height: 6px;
	background: ${({ theme }) => theme.colors.fontHero};
	border-radius: 3px;
	transform: rotate(-25deg);
	left: 248px;
	top: 60px;
	@media screen and (min-width: 768px) {
		width: 12px;
		height: 12px;
		left: 437px;
		top: 67px;
	}
	@media screen and (min-width: 1440px) {
		left: 807px;
		top: 112px;
	}
`;
