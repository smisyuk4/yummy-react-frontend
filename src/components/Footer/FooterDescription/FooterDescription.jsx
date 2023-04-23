import { UlStyled, DescriptionItem } from './FooterDescription.styled';

export const FooterDescription = () => {
  return <UlStyled>
            <DescriptionItem>Database of recipes that can be replenished </DescriptionItem>
            <DescriptionItem>Flexible search for desired and unwanted ingredients</DescriptionItem>
            <DescriptionItem>Ability to add your own recipes with photos</DescriptionItem>
            <DescriptionItem>Convenient and easy to use</DescriptionItem>
  </UlStyled>;
};