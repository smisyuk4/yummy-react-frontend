import { DivStyled } from './FollowUs.styled';
import { Icon } from 'components/Icon';

export const FollowUs = ({ title }) => {
  return (
    <DivStyled>
      <h2>{title}</h2>
      <ul>
        <li key={1}>
          <a
            href="https://github.com/smisyuk4"
            rel="noopener noreferer"
            area-label="git"
          >
            <Icon id="icon-facebook" fill="red" width={50} height={50} />
          </a>
        </li>
        <li key={2}>
          <a
            href="https://github.com/smisyuk4"
            rel="noopener noreferer"
            area-label="git"
          >
            <Icon id="icon-youtube" fill="red" width={50} height={50} />
          </a>
        </li>
        <li key={3}>
          <a
            href="https://github.com/smisyuk4"
            rel="noopener noreferer"
            area-label="git"
          >
            <Icon id="icon-twitter" fill="red" width={50} height={50} />
          </a>
        </li>
        <li key={4}>
          <a
            href="https://github.com/smisyuk4"
            rel="noopener noreferer"
            area-label="git"
          >
            <Icon id="icon-instagram" fill="red" width={50} height={50} />
          </a>
        </li>
      </ul>
    </DivStyled>
  );
};
