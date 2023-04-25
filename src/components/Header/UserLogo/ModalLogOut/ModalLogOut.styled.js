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
`
export const BtnCancel = styled(BtnModalUser)`
    height: 50px;
`
