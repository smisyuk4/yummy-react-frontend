import styled from '@emotion/styled';
import { useAuth } from 'hooks/useAuth';
import bgImgTopS from 'images/footerImgs/footer-bg-s-top.png';
import bgImgTopM from 'images/footerImgs/footer-bg-m-top.png';
import bgImgTopL from 'images/footerImgs/footer-bg-l-top.png';

export const DivStyled = styled.div`
	position: relative;
	body & {
		background-color: ${props => props.theme.colors.lightBG};
	}
	&::before {
		content: '';
		width: 315px;
		height: 487px;
		background: url(${bgImgTopS}) no-repeat right bottom;
		position: absolute;
		bottom: -219px;
		left: 0;
		transform: rotate(350deg);
		@media ${props => props.theme.media.tablet} {
			width: 500px;
			height: 710px;
			background: url(${bgImgTopM}) no-repeat right bottom;
			bottom: -352px;
			left: -2px;
			transform: rotate(355deg);
		}
		@media ${props => props.theme.media.desktop} {
			width: 696px;
			height: 1037px;
			background: url(${bgImgTopL}) no-repeat right bottom;
			bottom: -510px;
			left: -19px;
			transform: rotate(355deg);
		}
	}
	max-width: 2000px;
	padding: ${() => {
		const { isLoggedIn } = useAuth();
		return isLoggedIn ? '0 16px' : '0';
	}};
	min-height: calc(100vh - 82px - 569px);
	@media (min-width: 768px) {
		padding: ${() => {
			const { isLoggedIn } = useAuth();
			return isLoggedIn ? '0 32px' : '0';
		}};
		min-height: calc(100vh - 88px - 493px);
	}
	@media (min-width: 1440px) {
		padding: ${() => {
			const { isLoggedIn } = useAuth();
			return isLoggedIn ? '0 100px' : '0';
		}};
		min-height: calc(100vh - 88px - 464px);
	}
`;
