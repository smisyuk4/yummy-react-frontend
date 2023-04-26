import styled from '@emotion/styled';
import { Icon } from 'components/Icon';


export const WrapperToggler = styled.button`
    display: none;
    @media ${props => props.theme.media.desktop} {
        display: block;
        margin-left: 50px;
        position: relative;
        border: transparent;
    }
    &.active > svg:nth-child(1) {
        fill: ${({ theme }) => theme.colors.primary};
        }
    &.active > svg:nth-child(2) {
            transform: translateX(35px);
        }
`;

export const TogglerOverlay = styled(Icon)`
    display: none;
    @media ${props => props.theme.media.desktop} {
        display: block;
        width: 62px;
        height: 27px;
        fill: #ffffff;
        background: #EFEFEF;
        box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
        border-radius: 50px;
        border: transparent;

        &:hover {
        fill: #EBF3D4;
    }
    }
`
export const TogglerBtn = styled(Icon)`
    display: none;
    @media ${props => props.theme.media.desktop} {
        display: block;
        position: absolute;
        top: 2px;
        left: 3px;
        transition: transform 0.5s ease-in;
        width: 25px;
        height: 25px;
        background: linear-gradient(180deg, #FFFFFF 0%, #E8EAEA 100%);
        border-radius: 50%;
        fill: #FFFFFF;
    }
`
// toggle btn for burger
export const TogglerBurger = styled(WrapperToggler)`
    display: block;
    position: absolute;
    bottom: 18px;
    left: 16px;
    z-index: 1050;
    border: transparent;
    @media ${props => props.theme.media.tablet} {
        bottom: 32px;
        left: 32px;
    }
`
export const TogglerOverlayBurger = styled(TogglerOverlay)`
display: block;
width: 62px;
        height: 27px;
        fill: #ffffff;
        background: #EFEFEF;
        box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
        border-radius: 50px;
        border: transparent;

        &:hover {
        fill: #EBF3D4;
    }
    @media ${props => props.theme.media.desktop} {
        display: none;
    }
`
export const TogglerBtnBurger = styled(Icon)`
        display: block;
        position: absolute;
        top: 2px;
        left: 3px;
        transition: transform 0.5s ease-in;
        width: 25px;
        height: 25px;
        background: linear-gradient(180deg, #FFFFFF 0%, #E8EAEA 100%);
        border-radius: 50%;
        fill: #FFFFFF;
    @media ${props => props.theme.media.desktop} {
        display: none;
    }
`