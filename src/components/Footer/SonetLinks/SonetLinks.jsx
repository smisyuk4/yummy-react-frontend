import { DivStyled, SonetLinksList, SonetItem, SonetLink, IconSonetLink } from './SonetLinks.styled';
import { Icon } from 'components/Icon';
import { Link } from 'react-router-dom';


export const SonetLinks = () => {
  return <DivStyled>
      <SonetLinksList>
      <SonetItem>
              <SonetLink to='https://www.facebook.com/'  target="_blank"><IconSonetLink id="icon-facebook" /></SonetLink>
      </SonetItem>
      <SonetItem>
        <SonetLink to='https://www.youtube.com/' target="_blank"><IconSonetLink id="icon-youtube" /></SonetLink>
      </SonetItem>
      <SonetItem>
        <SonetLink to='https://twitter.com/' target="_blank"><IconSonetLink id="icon-twitter" /></SonetLink>
      </SonetItem>
      <SonetItem>
        <SonetLink to='https://www.instagram.com/' target="_blank"><IconSonetLink id="icon-instagram" /></SonetLink>
      </SonetItem>
      </SonetLinksList>
  </DivStyled>;
};