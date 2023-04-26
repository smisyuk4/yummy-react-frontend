import { WrapperToggler, TogglerOverlay, TogglerBtn } from './Toggler.styled';

export const Toggler = ({toggleTheme, darkTheme}) => {
  return <WrapperToggler type='button' className={(darkTheme ? 'active' : null)} onClick={toggleTheme} >
            <TogglerOverlay id="icon-switch-body" />
            <TogglerBtn id="icon-switch-button" />
          </WrapperToggler>
};