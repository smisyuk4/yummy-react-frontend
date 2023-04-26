import styled from '@emotion/styled';
import { Icon } from 'components/Icon';
import { IconPerson } from './ModalUserProfil/ModalUserProfil.styled';


export const UserLogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;
export const AvatarUser = styled(IconPerson)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    stroke: #C4C4C4;
`
export const UserNameP = styled.p`
    margin-left: 14px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.7;
    @media ${props => props.theme.media.tablet} {
        font-size: 14px;
    }
    @media ${props => props.theme.media.desktop} {
        font-size: 14px;
    }
`
export const WrapperImg = styled.div`
    width: 34px;
    height: 34px;
    border: 1px solid grey;
    border-radius: 50%;
    overflow: hidden;
    @media ${props => props.theme.media.tablet} {
        width: 44px;
        height: 44px;
    }
    @media ${props => props.theme.media.desktop} {
        width: 44px;
        height: 44px;
    }

`
export const UserAvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const UserIcon = styled(Icon)`
    width: 100%;
    height: 100%;
    stroke: #C4C4C4;
    object-fit: cover;
`

export const BurgerMuneBtn = styled.button`
    width: 28px;
    height: 28px;
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    text-align: center;
    margin-left: 24px;
    @media ${props => props.theme.media.desktop} {
        margin-left: 54px;
    }
    @media ${props => props.theme.media.desktop} {
        display: none;
    }
`

export const BurgerMenuIcon = styled(Icon)`
    width: 28px;
    height: 28px;
    stroke: ${props => props.theme.colors.buttonDarkBG};
    border: none;
    &:hover {
        stroke: ${({ theme }) => theme.colors.primary};
    }
`
