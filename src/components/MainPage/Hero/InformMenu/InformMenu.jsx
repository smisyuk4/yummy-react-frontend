import { InformWrapperStyled,
	BtnWrapperStyled,
	TextfStyled,
	BtnTextStyled, } from './InformMenu.styled';
  import { Icon } from '../../../Icon';

export const InformMenu = () => {
  return <InformWrapperStyled>
  <TextfStyled><span style={{color: '#8BAA36'}}>Delicious and healthy</span> way to enjoy a variety of fresh ingredients in one satisfying meal</TextfStyled>
  <BtnWrapperStyled to="/categories/Beef">
    <BtnTextStyled>See all recipes</BtnTextStyled>
    <div style={{stroke: '#3E4462', marginLeft: '7px', display: 'flex', alignItems: 'center'}}><Icon id="icon-arrow-right" height="18" width="22" /></div>
  </BtnWrapperStyled>
</InformWrapperStyled>
};