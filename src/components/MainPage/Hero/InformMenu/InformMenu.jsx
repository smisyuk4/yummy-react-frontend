import {
  InformWrapperStyled,
  BtnWrapperStyled,
  TextfStyled,
  BtnTextStyled,
  IconStyled,
} from './InformMenu.styled';
import { Icon } from '../../../Icon';

export const InformMenu = () => {
  return (
    <InformWrapperStyled>
      <TextfStyled>
        <span style={{ color: '#8BAA36' }}>Delicious and healthy</span> way to
        enjoy a variety of fresh ingredients in one satisfying meal
      </TextfStyled>
      <BtnWrapperStyled to="/categories/Breakfast">
        <BtnTextStyled>See all recipes</BtnTextStyled>
        <IconStyled>
          <Icon id="icon-arrow-right" height="18" width="22" />
        </IconStyled>
      </BtnWrapperStyled>
    </InformWrapperStyled>
  );
};
