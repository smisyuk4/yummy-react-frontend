import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// import banner from '../../../images/MainPageImg/bgf.png';

export const Section = styled.section`
	padding: 0 16px;
	background-color: ${({ theme }) => theme.colors.fontColor};
`;

export const CardList = styled.ul`
	padding: 0;
	display: grid;
	gap: 28px;
	margin-top: 0;
    margin-bottom: 40px;
`;

export const CardItem = styled.li`
	position: relative;
`;

export const TitleCategory = styled.h3`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 28px;
	margin-top: 0;
	color: ${({ theme }) => theme.colors.titleColor};
`;

export const Image = styled.img`
	object-fit: cover;
	border-radius: 8px;
`;

export const CardBox = styled.div`
	z-index: 10;
	position: absolute;
	background: #ffffff;
	border-radius: 8px;
	width: calc(100% - 36px);
	left: 18px;
	bottom: 87px;
`;

export const CardTitle = styled.p`
	font-family: Poppins, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	padding: 16px;
	margin: 0;
`;

export const NavBox = styled.div`
	display: flex;
	flex-direction: row-reverse;
	margin-top: 24px;
`;

export const NavToCategory = styled(NavLink)`
	background-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
	color: ${({ theme }) => theme.colors.fontColor};
	border-radius: 6px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	padding: 10px 24px;
`;

export const BtnBox = styled.div`
	display: flex;
	justify-content: center;
    margin-bottom: 100px;
`;

/* export const ImgStyled = styled.div`
	width: 100%;
	height: 184px;
	background-size: contain;
	background: url(${banner}) no-repeat top left;
	position: relative; */