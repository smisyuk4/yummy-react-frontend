import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// import {flexBox} from 'styles/mixins';


export const HeaderLogoStyled = styled(Link)`
    display: inline-block;
    width: 40px;
    height: 40px;

    @media (min-width: 480px) {
    width: 44px;
    height: 44px;
  }
`;

