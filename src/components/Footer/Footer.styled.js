import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {flexBox} from 'styles/mixins';
import { HeaderLogoIcon } from 'components/Header/HeaderLogo/HeaderLogo.styled'; 
import bgImgTopS from 'images/footerImgs/footer-bg-s-top.png'
import bgImgTopM from 'images/footerImgs/footer-bg-m-top.png'
import bgImgTopL from 'images/footerImgs/footer-bg-l-top.png'
import bgImgDownS from 'images/footerImgs/footer-bg-s-bottom.png'
import bgImgDownM from 'images/footerImgs/footer-bg-m-bottom.png'
import bgImgDownL from 'images/footerImgs/footer-bg-l-bottom.png'


export const WrapperFooter = styled.footer`
    box-sizing: border-box;
    max-width: 2000px;
    ${flexBox};
    flex-direction: column;
    text-align: center;
    margin-top: auto;
`
export const FooterStyled = styled.div`
    position: relative;
    width: 100%;
    padding-top: 28px;
    padding-bottom: 20px;
    background-color: ${props => props.theme.colors.buttonDarkBG};
    ${flexBox};
    flex-direction: column;
    gap: 32px;
    align-items: center;

    &::before {
        content: "";
        width: 315px;
        height: 487px;
        background: url(${bgImgTopS}) no-repeat right bottom;
        position: absolute;
        bottom: 300px;
        left: 0px;
        transform: rotate(350deg);
        z-index: -100;
        @media ${props => props.theme.media.tablet}  {
            width: 500px;
            height: 710px;
            background: url(${bgImgTopM}) no-repeat right bottom;
            bottom: 50px;
            left: 0px;
            transform: rotate(355deg);
	}
        @media ${props => props.theme.media.desktop} {
            width: 696px;
            height: 1037px;
            background: url(${bgImgTopL}) no-repeat right bottom;
            bottom: -120px;
            left: 100px;
            transform: rotate(355deg);
        }
    }
   @media ${props => props.theme.media.tablet}  {
        gap: 0px;
	}
    @media ${props => props.theme.media.desktop} {
        padding-left: 100px;
        padding-right: 100px;
	}
  
`
export const IconFooter = styled(HeaderLogoIcon)`
    stroke: ${props => props.theme.colors.primary};
    background-color: #EBF3D4;
    
`
export const WrapperDiscr = styled.div`
        margin-bottom: 32px;

    @media screen and (min-width: 768px) {
        margin: 0px;
        align-items: left;
	}
`
export const WrapDiscrSubscrForm = styled.div`
    @media screen and (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        gap: 200px;
}
`

export const FotterUpDiv = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: start;
        flex-direction: row;
        gap: 175px;
        margin-bottom: 72px;
	    }

    @media screen and (min-width: 1440px) {
        width: 66%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 120px;
	    }
`
export const WrapperTitle = styled.div`
    ${flexBox};
    gap: 8px;
    @media screen and (min-width: 768px) {
        justify-content: left;
        margin-bottom: 24px;
	}
`

export const Title = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 1.0;
    letter-spacing: 0.015em;
    color: ${props => props.theme.colors.fontColor};

    @media ${props => props.theme.media.tablet} {
        font-size: 28px;
        }
    @media ${props => props.theme.media.desktop} {
        font-size: 28px;
        }
`

export const FooterNav = styled.div`
    ${flexBox};
    flex-direction: column;
    gap: 14px;
`

export const FooterNavlink = styled(NavLink)`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.fontColor};
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
    &.active {
        color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterTeam = styled.div`
    width: 100%;
    ${flexBox};
    flex-direction: row;
    text-align: center;
    gap: 14px;

    font-weight: 500;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.01em;
    color: rgba(34,37,42, 0.5);

    padding-top: 32px;
    padding-bottom: 32px;
      
    background: url(${bgImgDownS}) no-repeat right bottom;
    overflow: hidden;
    @media ${props => props.theme.media.tablet} {
        font-size: 14px;
        background: url(${bgImgDownM}) no-repeat right bottom;
        }
    @media ${props => props.theme.media.desktop} {
        padding-top: 50px;
        padding-bottom: 50px;
        background: url(${bgImgDownL}) no-repeat right bottom;
        }
`