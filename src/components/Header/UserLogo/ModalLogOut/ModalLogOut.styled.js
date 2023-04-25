import styled from '@emotion/styled';
import { DivStyled, ModalProfil, BtnModalUser } from '../ModalUserProfil/ModalUserProfil.styled';
import { flexBox } from 'styles/mixins';


export const DivStyledLogOut = styled(DivStyled)`
`;
export const Modal = styled(ModalProfil)`
`

export const Cross = styled.span`
    width: 12px;
    height: 12px;
`
export const WrapperBtns = styled.div`
    width: 100%;
    ${flexBox};
    gap: 8px;
`
export const BtnLogOut = styled(BtnModalUser)`
    height: 50px;
    &:hover {
        background: #22252A;
        color: #FAFAFA;
    }
`
export const BtnCancel = styled(BtnModalUser)`
    height: 50px;
    background: #D9D9D9;
    color: #23262A;
    border: transparent;
    &:hover {
        border: 1px solid #23262A;
        border-radius: 6px;
        background: #ECECEC;

    }
`
