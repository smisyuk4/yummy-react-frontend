import { InformWrapperStyled,
	BtnWrapperStyled,
	TextfStyled,
	BtnTextStyled, } from './InformMenu.styled';
  import { Icon } from 'components/Icon';

export const InformMenu = () => {
  return <InformWrapperStyled>
  <TextfStyled>Delicious and healthy way to enjoy a variety of fresh ingredients in one satisfying meal</TextfStyled>
  <BtnWrapperStyled to="/categories/:categoryName">
    <BtnTextStyled>See all recipes</BtnTextStyled>
    <div style={{fill: '#3E4462', marginLeft: '7px'}}><Icon id="icon-arrow-right" height="9" width="12" /></div>
  </BtnWrapperStyled>
</InformWrapperStyled>
};