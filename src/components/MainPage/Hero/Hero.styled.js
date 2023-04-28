import styled from '@emotion/styled';
import banner from '../../../images/MainPageImg/bm.png';
import bannerT from '../../../images/MainPageImg/bm2.png';
import bannerD from '../../../images/MainPageImg/bm3D.png';
import banner1 from '../../../images/MainPageImg/bg-2.png';
import banner1T from '../../../images/MainPageImg/bg-2T.png';
import banner1D from '../../../images/MainPageImg/bg3D.png';
import banner2 from '../../../images/MainPageImg/img-1.png';
import banner2T from '../../../images/MainPageImg/img-2.png';
import banner2D from '../../../images/MainPageImg/img-3.png';
import banner3T from '../../../images/MainPageImg/arr.png';
import bannerbg from '../../../images/MainPageImg/bg2.png';
import bannerbg1 from '../../../images/MainPageImg/bg1.png';

export const WrapperStyled = styled.div`
	position: relative;
	overflow: hidden;
	margin-right: -16px;
	margin-left: -16px;
	margin-top: -102px;

	@media screen and (min-width: 768px) {
		margin-top: -106px;
		margin-right: -32px;
		margin-left: -32px;
		max-height: 764px;
	}
	@media screen and (min-width: 1440px) {
		max-height: 830px;
		margin-right: -100px;
		margin-left: -100px;
		margin-bottom: 100px;
	}
`;
export const SectionStyled = styled.div`
	position: relative;
	top: -132px;
	transform: translateX(69%) rotate(39deg);
	max-width: 100%;
	height: 542px;
	background-color: ${({ theme }) => theme.colors.primarySoft};

	@media screen and (min-width: 768px) {
		/* background: url(${bannerbg1}) no-repeat top left; */
		transform: translateX(64%) rotate(26deg);
		top: -335px;
		left: 49px;
		width: 753px;
		height: 730px;
	}
	@media screen and (min-width: 1024px) {
		width: 941px;
		height: 912px;
		transform: translateX(67%) rotate(0deg);
		top: -384px;
		left: -70px;
		background: url(${bannerbg}) no-repeat top left;
	}
	@media screen and (min-width: 818px) {
		transform: translateX(71%) rotate(26deg);
	}
	@media screen and (min-width: 867px) {
		transform: translateX(78%) rotate(26deg);
	}
	@media screen and (min-width: 920px) {
		transform: translateX(85%) rotate(26deg);
	}
	@media screen and (min-width: 973px) {
		transform: translateX(93%) rotate(26deg);
	}
	@media screen and (min-width: 1024px) {
		transform: translateX(67%) rotate(0deg);
	}
	@media screen and (min-width: 1200px) {
		transform: translateX(82%) rotate(0deg);
	}
	@media screen and (min-width: 1440px) {
		width: 941px;
		height: 912px;
		transform: translateX(79%) rotate(0deg);
		top: -470px;
		left: -42px;
		background: url(${bannerbg}) no-repeat top left;
	}
`;

export const TopImgStyled = styled.div`
	max-width: 100%;
	height: 184px;
	background-size: contain;
	background: url(${banner}) no-repeat top left;
	margin-top: 60px;
	@media screen and (min-width: 768px) {
		background: url(${bannerT}) no-repeat top left;
		height: 315px;
		top: 236px;
	}
	@media screen and (min-width: 1440px) {
		background: url(${bannerD}) no-repeat top left;
		margin-top: 13px;
		height: 474px;
	}
`;
export const DivStyled = styled.div`
	width: 100%;
	height: 792px;
	background-size: contain;
	background: url(${banner1}) no-repeat top right;
	position: absolute;
	top: 24px;
	z-index: 2;
	@media screen and (min-width: 768px) {
		background: url(${banner1T}) no-repeat top right;
		top: 63px;
	}
	@media screen and (min-width: 1440px) {
		background: url(${banner1D}) no-repeat top right;
		height: 944px;
		top: 23px;
	}
`;
export const DishStyled = styled.div`
	width: 100%;
	height: 296px;
	background-size: contain;
	background: url(${banner2}) no-repeat top right;
	position: absolute;
	top: 316px;
	left: -18px;
	z-index: 3;
	border: none;
	transform-origin: 57% center;
	animation: rotateArrRight 150s linear infinite;

	@media screen and (min-width: 456px) {
		background: url(${banner2T}) no-repeat top right;
		top: 280px;
		left: 0px;
		height: 351px;
		transform-origin: 60% center;
	}
	@media screen and (min-width: 520px) {
		background: url(${banner2T}) no-repeat top right;
		top: 294px;
		height: 351px;
		transform-origin: 60% center;
	}
	@media screen and (min-width: 576px) {
		background: url(${banner2T}) no-repeat top right;
		height: 351px;
		transform-origin: 68% center;
	}
	@media screen and (min-width: 768px) {
		background: url(${banner2T}) no-repeat top right;
		top: 222px;
		left: 0px;
		height: 351px;
		transform-origin: 76% center;
	}
	@media screen and (min-width: 973px) {
		background: url(${banner2T}) no-repeat top right;

		height: 351px;
		transform-origin: 82% center;
	}
	@media screen and (min-width: 1024px) {
		top: 216px;
		left: -100px;
		transform-origin: 83% center;
	}
	@media screen and (min-width: 1190px) {
		transform-origin: 85% center;
		left: -138px;
	}
	@media screen and (min-width: 1440px) {
		background: url(${banner2D}) no-repeat top right;
		height: 539px;
		top: 125px;
		left: -177px;
		transform-origin: 80% center;
	}
	@keyframes rotateArrRight {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
export const InformFieldStyled = styled.div`
	width: 100%;
	top: -1297px;
	left: -20px;
	z-index: 5;
`;
export const TitleStyled = styled.h1`
	font-size: 60px;
	font-weight: 700;
	text-align: center;

	color: ${({ theme }) => theme.colors.fontHero};
	@media screen and (min-width: 768px) {
		font-weight: 400;
		font-size: 72px;
		line-height: 72px;
		width: min-content;
	}
	@media screen and (min-width: 1440px) {
		font-size: 100px;
		line-height: 100px;
	}
`;
export const SpanTitle = styled.span`
	color: ${({ theme }) => theme.colors.primary};
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	@media screen and (min-width: 768px) {
		text-shadow: none;
	}
`;
export const ParagrafStyled = styled.div`
	font-size: 14px;
	line-height: 18px;
	letter-spacing: -0.02em;
	text-align: center;
	letter-spacing: -2%;
	margin-top: -15px;
	padding-left: 64px;
	padding-right: 64px;
	color: ${({ theme }) => theme.colors.fontColorNavigation};
	margin-top: 14px;
	@media screen and (min-width: 768px) {
		font-size: 14px;
		width: 362px;
		padding-left: 0;
		padding-right: 0;
		text-align: left;
	}
	@media screen and (min-width: 1440px) {
		font-size: 18px;
		line-height: 24px;
		width: 465px;
	}
`;

export const BoxStyled = styled.div`
	position: absolute;
	left: -6px;
	top: 140px;
	z-index: 4;
	@media screen and (min-width: 768px) {
		left: 33px;
		top: 257px;
	}
	@media screen and (min-width: 1440px) {
		left: 96px;
		top: 234px;
	}
`;

export const ArrRight = styled.div`
	@media screen and (min-width: 768px) {
		background: url(${banner3T}) no-repeat top right;
		width: 176px;
		height: 94px;
		position: absolute;
		top: 502px;
		left: 517px;
		z-index: 10;
	}
	@media screen and (min-width: 867px) {
		top: 526px;
		left: 622px;
	}
	@media screen and (min-width: 1024px) {
		left: 765px;
	}
	@media screen and (min-width: 1190px) {
		left: 919px;
	}
	@media screen and (min-width: 1440px) {
		top: 589px;
		left: 1046px;
	}
`;
