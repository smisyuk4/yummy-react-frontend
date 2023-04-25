import styled from '@emotion/styled';
import banner from '../../../images/MainPageImg/bm.png';
import bannerT from '../../../images/MainPageImg/bm2.png';
import banner1 from '../../../images/MainPageImg/bg-2.png';
import banner1T from '../../../images/MainPageImg/bg-2T.png';
import banner2 from '../../../images/MainPageImg/img-1.png';
import banner2T from '../../../images/MainPageImg/img-2.png';

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
	}
`;
export const SectionStyled = styled.div`
	position: relative;
	top: -132px;
	transform: translateX(61%) rotate(39deg);
	max-width: 100%;
	height: 542px;
	background-color: ${({ theme }) => theme.colors.primarySoft};

	@media screen and (min-width: 768px) {
		transform: translateX(69%) rotate(32deg);
		top: -386px;
		left: 49px;
		width: 753px;
		height: 730px;
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
	@media screen and (min-width: 768px) {
		background: url(${banner2T}) no-repeat top right;
		top: 175px;
		left: 0px;
		height: 351px;
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

	color: ${({ theme }) => theme.colors.buttonDarkBG};
	@media screen and (min-width: 768px) {
		font-weight: 400;
		font-size: 72px;
		line-height: 72px;
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
	color: #23262a;
	margin-top: 14px;
	// position: relative;
	// z-index: 4;
	@media screen and (min-width: 768px) {
		font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	}
	
`;
export const BoxStyled = styled.div`
	position: absolute;
	left: -6px;
	top: 140px;
	z-index: 4;
`;
