import styled from '@emotion/styled';
import { Icon } from 'components/Icon';
import MBG1 from 'images/welcomepage/mobile.png';
import MBG2 from 'images/welcomepage/mobile@2x.png';
import TBG1 from 'images/welcomepage/tablet.png';
import TBG2 from 'images/welcomepage/tablet@2x.png';
import DBG1 from 'images/welcomepage/desktop.png';
import DBG2 from 'images/welcomepage/desktop@2x.png';

export const DivStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	min-height: 100vh;
	padding: 0 35px;
	background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.6) 58.58%,
			rgba(0, 0, 0, 0.345172) 78.98%,
			rgba(0, 0, 0, 0) 100%
		),
		image-set(url(${MBG1}) 1x, url(${MBG2}) 2x);
	color: ${props => props.theme.colors.fontColor};
	@media (min-width: 768px) {
		padding: 0 35px;
		background-image: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.6) 58.58%,
				rgba(0, 0, 0, 0.345172) 78.98%,
				rgba(0, 0, 0, 0) 100%
			),
			image-set(url(${TBG1}) 1x, url(${TBG2}) 2x);
	}
	@media (min-width: 1024px) {
		padding: 0 35px;
		background-image: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.6) 58.58%,
				rgba(0, 0, 0, 0.345172) 78.98%,
				rgba(0, 0, 0, 0) 100%
			),
			image-set(url(${DBG1}) 1x, url(${DBG2}) 2x);
	}
	background-size: cover;
`;

export const H1Styled = styled.h1`
	font-size: 24px;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: -0.02em;
	@media (min-width: 768px) {
		font-size: 28px;
		line-height: 28px;
	}
`;

export const PStyled = styled.p`
	font-size: 14px;
	line-height: 18px;
	letter-spacing: -0.02em;
	margin-bottom: 44px;
	margin-top: 14px;
	@media (min-width: 768px) {
		font-size: 18px;
		line-height: 24px;
		max-width: 505px;
	}
	@media (min-width: 1024px) {
		max-width: 540px;
	}
`;

export const IconStyled = styled(Icon)`
	width: 54px;
	height: 54px;
	background-color: ${props => props.theme.colors.primary};
	border-radius: 12px;
	padding: 13px;
	stroke: ${props => props.theme.colors.fontColor};
	margin-bottom: 28px;
	@media (min-width: 768px) {
		margin-bottom: 44px;
		width: 68px;
		height: 68px;
	}
`;
