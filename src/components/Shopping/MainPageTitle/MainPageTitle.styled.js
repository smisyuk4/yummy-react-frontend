import styled from '@emotion/styled';

export const Tegline = styled.h1`
	position: relative;
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 1;

	letter-spacing: -0.02em;
	font-feature-settings: 'liga' off;

	color: ${({ theme }) => theme.colors.titleColor};
	padding-left: 8px;
	margin: 50px 0 50px 0;

	@media ${props => props.theme.media.tablet} {
		margin: 72px 0 72px 0;
		padding-left: 0;
		font-size: 32px;
	}
	@media ${props => props.theme.media.desktop} {
		margin: 100px 0 72px 0;
		font-size: 44px;
		min-width: 281px;
	}
`;
export const DivCenter = styled.div`
	z-index: -1;
	position: absolute;
	width: 6px;
	height: 6px;
	left: 247px;

	background-color: ${({ theme }) => theme.colors.buttonDarkBG};
	border-radius: 3px;
	transform: rotate(-25deg);
	@media ${props => props.theme.media.tablet} {
		width: 12px;
		height: 12px;
		left: 437px;
	}

	@media ${props => props.theme.media.desktop} {
		left: 707px;
		top: 44px;
	}
`;

export const DivRight = styled.div`
	z-index: -1;
	position: absolute;
	width: 8px;
	height: 8px;
	left: 349px;
	top: 0;

	background-color:${({ theme }) => theme.colors.primary};
	border-radius: 3px;
	transform: rotate(-25deg);

	@media ${props => props.theme.media.tablet} {
		width: 14px;
		height: 14px;
		left: 694px;
		top: -19px;
	}

	@media ${props => props.theme.media.desktop} {
		left: 1150px;
		top: -16.4px;
	}
`;

export const DivLeft = styled.div`
	z-index: -1;
	position: absolute;
	width: 8px;
	height: 8px;
	left: 120px;
	top: -27.37px;

	background: ${({ theme }) => theme.colors.primary};
	border-radius: 3px;
	transform: rotate(-25deg);

	@media ${props => props.theme.media.tablet} {
		width: 14px;
		height: 14px;
		left: 200px;
		top: -32.4px;
	}

	@media ${props => props.theme.media.desktop} {
		left: 221px;
		top: -29.4px;
	}
`;