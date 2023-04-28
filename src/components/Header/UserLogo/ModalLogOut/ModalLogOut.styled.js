import styled from '@emotion/styled';
import { DivStyled, ModalProfil, BtnModalUser } from '../ModalUserProfil/ModalUserProfil.styled';
import { flexBox } from 'styles/mixins';
import bgImgM from 'images/headerImges/burger-bg-m.png'

export const DivStyledLogOut = styled(DivStyled)`
    background: rgb(235,243,212) url(${bgImgM}) no-repeat right bottom;
`;
export const Modal = styled(ModalProfil)`
    font-size: 14px;
    line-height: 1.33;
    padding: 44px, 24px;
    background-color: ${({ theme }) => theme.colors.bgModal};
    @media ${props => props.theme.media.tablet} {
        padding: 50px, 40px;
        font-size: 18px;
        line-height: 1.33;
    }
    @media ${props => props.theme.media.desktop} {
        padding: 50px, 50px;
    }
`
export const TextLogOut = styled.p`
    color: ${({ theme }) => theme.colors.fontColorNavigation};
`
export const WrapperBtns = styled.div`
    width: 100%;
    ${flexBox};
    gap: 8px;
    margin-top: 24px;
    @media ${props => props.theme.media.tablet} {
        margin-top: 32px;
    }
`
export const BtnLogOut = styled(BtnModalUser)`
    height: 50px;
    background-color: ${({ theme }) => theme.colors.btnLogOutBg};
    color: ${({ theme }) => theme.colors.btnLogOutText};
    &:hover {
        background: ${({ theme }) => theme.colors.btnLogOutHoverBG};
        color: #FAFAFA;
    }
`
export const BtnCancel = styled(BtnModalUser)`
    height: 50px;
    background-color: ${({ theme }) => theme.colors.btnCancelBg};
    color: ${({ theme }) => theme.colors.btnCancelText};
    border: transparent;
    &:hover {
        border: 1px solid #23262A;
        border-radius: 6px;
        background-color: ${({ theme }) => theme.colors.btnCancelHoverBG};

    }
`
