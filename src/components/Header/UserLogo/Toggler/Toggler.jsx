import { WrapperToggler, TogglerOverlay } from './Toggler.styled';

export const Toggler = ({ toggleTheme, darkTheme, themeToggler }) => {
  const onChangeTheme = () => {
    toggleTheme();
    themeToggler();
  };
  return (
    <WrapperToggler
      className={darkTheme ? 'active' : null}
      onClick={onChangeTheme}
    >
      <TogglerOverlay />
    </WrapperToggler>
  );
};
