import { WrapperToggler, TogglerOverlay, TogglerBtn } from './Toggler.styled';

export const Toggler = ({ toggleTheme, darkTheme, themeToggler }) => {
  const onChangeTheme = () => {
    toggleTheme();
    themeToggler();
  };
  return (
    <WrapperToggler
      type="button"
      className={darkTheme ? 'active' : null}
      onClick={onChangeTheme}
    >
      <TogglerOverlay id="icon-switch-body" />
      <TogglerBtn id="icon-switch-button" />
    </WrapperToggler>
  );
};
