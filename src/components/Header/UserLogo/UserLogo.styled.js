import styled from '@emotion/styled';
import { Icon } from 'components/Icon';


export const UserLogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;
export const UserNameP = styled.p`
    margin-left: 14px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.7;
`
export const WrapperImg = styled.div`
    width: 34px;
    height: 34px;
    border: 1px solid grey;
    border-radius: 50%;
    overflow: hidden;

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
        display: none;
    }
`
export const BurgerMenuImg = styled(Icon)`
    width: 28px;
    height: 28px;
    stroke: ${props => props.theme.colors.buttonDarkBG};

`