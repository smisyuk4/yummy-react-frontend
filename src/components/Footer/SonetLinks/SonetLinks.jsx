import { DivStyled, SonetLinksList, SonetItem, SonetLink, IconSonetLink } from './SonetLinks.styled';
import { Icon } from 'components/Icon';

export const SonetLinks = () => {
  return <DivStyled>
      <SonetLinksList>
      <SonetItem>
        <SonetLink><IconSonetLink id="icon-facebook" /></SonetLink>
      </SonetItem>
      <SonetItem>
        <SonetLink><IconSonetLink id="icon-youtube" /></SonetLink>
      </SonetItem>
      <SonetItem>
        <SonetLink><IconSonetLink id="icon-twitter" /></SonetLink>
      </SonetItem>
      <SonetItem>
        <SonetLink><IconSonetLink id="icon-instagram" /></SonetLink>
      </SonetItem>
      </SonetLinksList>
  </DivStyled>;
};