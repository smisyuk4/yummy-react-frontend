import styled from '@emotion/styled';
import {flexBox} from 'styles/mixins';
import { Icon } from 'components/Icon';

export const OverlayDiv = styled.div`
    box-sizing: border-box;
    width: 161px;
    height: 130px;
    padding: 18px;
    position: absolute;
    top: 12px;
    right: 60px;
    ${flexBox};
    flex-direction: column;
    gap: 28px;

    background-color: ${props => props.theme.colors.buttonLightBG};
    border: 1px solid #8BAA36;
    border-radius: 8px;

    transform: translateY(-300px);
    transition: transform 1s ease-in;
    z-index: 999;

    &.open {
        transform: translateY(72px);
        @media ${props => props.theme.media.tablet} {
            transform: translateY(78px);
    }
        @media ${props => props.theme.media.desktop} {
            transform: translateY(78px);
    }
    }
    &.close {
        transform: translateY(-300px);
    }
    @media ${props => props.theme.media.tablet} {
        top: 18px;
        right: 128px;
        width: 177px;
        height: 130px;
        gap: 32px;
        border: transparent;
    }
`
export const EditText = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.57;
    color: #23262A;
`
export const WrapperEdit = styled.div`
width: 100%;
    ${flexBox};
    justify-content: space-between;
    flex-direction: row;
    &:hover p {
    color: ${({ theme }) => theme.colors.primary};
}
    &:hover svg {
        fill: ${({ theme }) => theme.colors.primary};
    }
`
export const LogOutBtn = styled.button`
    width: 100%;
    height: 43px;
    text-align: center;
    cursor: pointer;
    border: transparent;
    border-radius: 24px 44px;
    background-color: #8BAA36;
    color: #fff;

    &:hover {
        background: #22252A;
        color: #FAFAFA;
    }
`
export const EditIcon = styled(Icon)`
    width: 12px;
    height: 12px;
`
