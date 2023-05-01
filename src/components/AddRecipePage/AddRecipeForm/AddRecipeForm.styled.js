import styled from '@emotion/styled';
import { FormButton } from 'components/ButtonNav/ButtonNav.styled';

export const WrapperAllInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddButton = styled(FormButton)`
  margin-top: 0;
  border-radius: 24px 44px;
  cursor: pointer;
  display: inline-flex;
  z-index: 80;
  position: relative;
  padding: 14px 64px;
  background-color: ${props => props.theme.colors.buttonDarkBG};
  border: none;
  box-sizing: border-box;
  &:hover {
    transition: background-color 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
    color: ${({ theme }) => theme.colors.buttonLightBG};
    border: 1px solid #8baa36;
    padding: 12.56px 62.56px;
  }
  @media ${props => props.theme.media.tablet} {
  }
`;
