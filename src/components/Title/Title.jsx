import { TitleDiv, TitleH } from './Title.styled';

export const Title = ({title}) => {
  return <TitleDiv>
          <TitleH>{title}</TitleH>
        </TitleDiv>;
};