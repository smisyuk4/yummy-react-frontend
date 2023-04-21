import styled from '@emotion/styled';

const changeColorBtnType = color => {
    switch (color) {
      case "dark":
        return "color: #FAFAFA; background: #22252A";
      case "green":
        return "color: #FAFAFA; background: #8BAA36";;
      default:
        return "#fff";
    }
  };

  const changeSizeBtnType = size => {
    switch (size) {
      case "small":
        return "color: #03a9f3; background: #22252A";
      case "middle":
        return "color: #03a9f3; background: #8BAA36";;
      default:
        return "#fff";
    }
  };

export const ButtonStyled = styled.button`
color: #fff;
    width: ${props => props.width};
    height: ${props => props.height};
    ${({ color }) => changeColorBtnType(color)};

    border-radius: 24px 44px;
    cursor: pointer;
 
    &:hover {
        color: #8BAA36
    }
    

`;