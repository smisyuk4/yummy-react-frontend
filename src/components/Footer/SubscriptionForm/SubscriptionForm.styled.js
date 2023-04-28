import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
import { Icon } from 'components/Icon';
import { flexBox } from 'styles/mixins';

export const FormStyled = styled(Form)`
  width: 204px;
  ${flexBox};
  flex-direction: column;
  column-gap: 8px;
  background: transparent;
  padding: 0px;
  margin-top: 32px;

  @media ${props => props.theme.media.tablet} {
    width: 100%;
    height: 50px;
    flex-direction: row;
    column-gap: 12px;
    margin-bottom: 15px;
  }

  @media ${props => props.theme.media.desktop} {
    ${flexBox};
    flex-direction: column;
    column-gap: 8px;
    margin-top: 28px;
    margin-bottom: 0;
    height: auto;
    background: transparent;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  @media ${props => props.theme.media.desktop} {
    width: 100%;
  }
`;

export const InputForm = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  padding-left: 42px;
  padding-right: 25px;
  background-color: transparent;
  border: 1.2px solid rgba(250, 250, 250, 0.16);
  border-radius: 6px;
  text-overflow: clip;
  &::placeholder {
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.fontColor};
    @media ${props => props.theme.media.tablet} {
      font-size: 14px;
    }
    @media ${props => props.theme.media.desktop} {
      font-size: 18px;
    }
  }
  @media ${props => props.theme.media.tablet} {
    width: 100%;
    height: 50px;
    font-size: 18px;
    line-height: 27px;
  }
  @media ${props => props.theme.media.desktop} {
    width: 100%;
    height: 60px;
    padding-left: 51px;
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.fontColor};
    border-color: ${({ theme }) => theme.colors.fontColor};
  }
  &:hover {
    border: 1px solid #ffffff;
    outline: 1px solid ${({ theme }) => theme.colors.fontColor};
    color: #ffffff;
    opacity: 1;
  }
  .error & {
    border: 1px solid #e74a3b;
    outline: none;
  }
  .valid & {
    border: 1px solid #3cbc81;
    outline: none;
  }
`;

export const InputError = styled.span`
  font-size: 10px;
  line-height: 1, 5;
  letter-spacing: -0.02em;
  color: #e74a3b;
`;

export const IconStyled = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  stroke: ${({ theme }) => theme.colors.fontColor};
  width: 16px;
  height: 12px;

  .error & {
    stroke: #e74a3b;
  }
  .valid & {
    stroke: #3cbc81;
  }
`;

export const IconStatusStyled = styled(IconStyled)`
  right: 5px;
  left: unset;
  stroke: none;
  .error & {
    fill: #e74a3b;
  }
  .valid & {
    fill: #3cbc81;
  }
`;

export const BtnSybscribe = styled.button`
  ${flexBox};
  width: 204px;
  height: 38px;
  margin-top: 8px;
  line-height: 1.14;
  padding: 11px 71px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.buttonPrimaryBG};
  background-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
  color: ${({ theme }) => theme.colors.buttonLightBG};
  font-size: 14px;
  line-height: 1.14;
  transition: color 0.3s ease-in-out;
  border: transparent;

  &:hover {
    border: transparent;
    transition: color 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.textButtonPrimaryHover};
  }
  &:disabled {
    border: transparent;
    opacity: 0.8;
  }

  @media ${props => props.theme.media.tablet} {
    height: 50px;
    margin-top: 0px;
    font-size: 16px;
    padding: 16px 50px;
    border: transparent;
  }
  @media ${props => props.theme.media.desktop} {
    width: 100%;
    height: 60px;
    margin-top: 16px;
    font-size: 16px;
    padding: 16px 50px;
    border: transparent;
  }
`;

export const ErrorSpan = styled(ErrorMessage)`
  position: absolute;
  top: -15px;
  left: 0;
`;
