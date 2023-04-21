import styled from '@emotion/styled';
import banner from '../../../images/MainPageImg/bg-1.png';
import banner1 from '../../../images/MainPageImg/bg-2.png';
import banner2 from '../../../images/MainPageImg/img-1.png';

export const WrapperStyled = styled.div`
	position: absolute;
    width: 100%;
`;
export const SectionStyled = styled.div`
	width: 100%;
	height: 542px;
	background-size: contain;
	background: url(${banner}) no-repeat top center;
	position: relative;
    left: 14%;
`;
export const DivStyled = styled.div`
	width: 100%;
	height: 792px;
	background-size: contain;
	background: url(${banner1}) no-repeat top center;
	position: relative;
`;
export const DishStyled = styled.div`
	width: 100%;
	height: 296px;
	background-size: contain;
	background: url(${banner2}) no-repeat top center;
	position: relative;
	top: 50%;
	left: 50%;
`;
export const TitleStyled = styled.div`
	font-size: 60px;
	font-weight: 700;
	text-align: center;
	margin-top: 71px;
	color: #22252a;
`;
export const ParagrafStyled = styled.div`
	font-size: 14px;
	line-height: 18px;
	text-align: center;
	vertical-align: top;
	letter-spacing: -2%;
    margin-top: 14px;
	padding-left: 64px;
	padding-right: 64px;
	color: #23262a;
`;
