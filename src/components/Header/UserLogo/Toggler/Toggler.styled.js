import styled from '@emotion/styled';


export const WrapperToggler = styled.div`
  display: none;

  @media ${props => props.theme.media.desktop} {
    width: 61px;
    height: 27px;
    margin-left: 50px;
    position: relative;
    border: transparent;
    border-radius: 50px;
    background: #EFEFEF;
    box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 3px;
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 3px 3px 3px auto;
  }
  &.active > button {
    transform: translateX(36px);
  }
`;

export const TogglerOverlay = styled.button`
  display: none;
  
  @media ${props => props.theme.media.desktop} {
    display: block;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: red;
    border: transparent;
    background: linear-gradient(180deg, #FFFFFF 0%, #E8EAEA 100%);
    transition: transform 0.5s ease-in;
}
`;

// toggle btn for burger
export const TogglerBurger = styled.div`
  width: 61px;
  height: 27px;
  position: absolute;
  bottom: 18px;
  left: 16px;
  z-index: 1050;
  border-radius: 50px;
  background: #EFEFEF;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 3px;

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 3px 3px 3px auto;
  }
  &.active > button {
    transform: translateX(36px);
  }
  @media ${props => props.theme.media.tablet} {
    bottom: 32px;
    left: 32px;
  }
`;
export const TogglerOverlayBurger = styled.button`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: transparent;
  background: linear-gradient(180deg, #FFFFFF 0%, #E8EAEA 100%);
  transition: transform 0.5s ease-in;

  @media ${props => props.theme.media.desktop} {
    display: none;
  }
`;
