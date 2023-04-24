import styled from '@emotion/styled';
import banner from '../../../images/MainPageImg/bm.png';
import banner1 from '../../../images/MainPageImg/bg-2.png';
import banner2 from '../../../images/MainPageImg/img-1.png';
import bannerT from '../../../images/MainPageImg/img-2.png';

export const WrapperStyled = styled.div`
	/* background-color: #fafafa; */
	position: relative;
	/* overflow-x: hidden; */
	margin-right: -16px;
	margin-left: -16px;
	padding: 0;
	max-width: 100%;
`;
export const SectionStyled = styled.div`
	position: relative;
	top: -132px;
	transform: translateX(61%) rotate(39deg);
	max-width: 100%px;
	height: 542px;
	background-color: #ebf3d4;
	overflow-x: hidden;
`;
export const TopImgStyled = styled.div`
	max-width: 100%;
	height: 184px;
	background-size: contain;
	background: url(${banner}) no-repeat top left;
	position: relative;
`;
export const DivStyled = styled.div`
	width: 100%;
	height: 792px;
	background-size: contain;
	background: url(${banner1}) no-repeat top right;
	position: absolute;
	top: 0px;
	z-index: 2;
`;
export const DishStyled = styled.div`
	width: 100%;
	height: 296px;
	background-size: contain;
	background: url(${banner2}) no-repeat top right;
	position: absolute;
	top: 280px;
	left: -17px;
	z-index: 3;
	border: none;
	@media screen and (min-width: 768px) {
		background: url(${bannerT}) no-repeat top right;
	}
`;
export const InformFieldStyled = styled.div`
	width: 100%;
	top: -1297px;
	left: -20px;
	z-index: 5;
`;
export const TitleStyled = styled.h1`
	font-family: Poppins, sans-serif;
	font-size: 60px;
	font-weight: 700;
	text-align: center;
	position: absolute;
	margin-top: 71px;
	color: #22252a;
	z-index: 4;
`;
export const ParagrafStyled = styled.div`
	font-family: Poppins, sans-serif;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: -0.02em;
	text-align: center;
	letter-spacing: -2%;
	margin-top: -15px;
	padding-left: 64px;
	padding-right: 64px;
	color: #23262a;
	position: relative;
	z-index: 4;
`;
export const BoxStyled = styled.div`
	display: flex;
	align-items: center;
    justify-content: center;
`;


