import styled from '@emotion/styled';

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
		url('yummy-react-frontend/assets/welcomepage/mobile.png');
	color: ${props => props.theme.colors.fontColor};
	@media (min-width: 768px) {
		padding: 0 35px;
		background-image: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.6) 58.58%,
				rgba(0, 0, 0, 0.345172) 78.98%,
				rgba(0, 0, 0, 0) 100%
			),
			url('yummy-react-frontend/assets/welcomepage/tablet.png');
	}
	@media (min-width: 1024px) {
		padding: 0 35px;
		background-image: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.6) 58.58%,
				rgba(0, 0, 0, 0.345172) 78.98%,
				rgba(0, 0, 0, 0) 100%
			),
			url('yummy-react-frontend/assets/welcomepage/desktop.png');
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
