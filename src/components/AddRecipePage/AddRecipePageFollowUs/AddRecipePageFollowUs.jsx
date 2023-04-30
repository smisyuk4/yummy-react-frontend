import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  SocialLinksContainer,
  SocialLinksIcons,
  SocialLinksList,
  SocialLinksTitle,
} from './AddRecipePageFollowUs.styled';

export const AddRecipePageFollowUs = ({ title }) => {
  return (
    <SocialLinksContainer>
      {title && <SocialLinksTitle>{title}</SocialLinksTitle>}
      <SocialLinksList>
        <li>
          <Link
            to="https://www.facebook.com/"
            rel="noopener noreferer"
            target="_blank"
          >
            <SocialLinksIcons
              id="icon-facebook"
              fill="#8BAA36"
              width={50}
              height={50}
            />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.youtube.com/"
            rel="noopener noreferer"
            target="_blank"
          >
            <SocialLinksIcons
              id="icon-youtube"
              fill="none"
              width={50}
              height={50}
            />
          </Link>
        </li>
        <li>
          <Link
            to="https://twitter.com/"
            rel="noopener noreferer"
            target="_blank"
          >
            <SocialLinksIcons
              id="icon-twitter"
              fill="#8BAA36"
              width={50}
              height={50}
            />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.instagram.com/"
            rel="noopener noreferer"
            target="_blank"
          >
            <SocialLinksIcons
              id="icon-instagram"
              fill="#8BAA36"
              width={50}
              height={50}
            />
          </Link>
        </li>
      </SocialLinksList>
    </SocialLinksContainer>
  );
};

AddRecipePageFollowUs.propTypes = {
  title: PropTypes.string,
};
