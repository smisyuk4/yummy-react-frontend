import { PropTypes } from 'prop-types';
import {
  LiStyled,
  AStyled,
  ImgStyled,
  HStyled,
  PStyled,
} from './PopularItem.styled';

export const PopularItem = ({ _id, title, description, preview }) => {
  return (
    <LiStyled>
      <AStyled
        // href={`https://yummy-rest-api.onrender.com/recipes/${_id}`}
        href='https://www.youtube.com/watch?v=H5TuP6svrpo&ab_channel=%D0%A5%D0%B0%D1%89%D1%96'
        rel="noopener noreferer"
        area-label={title}
      >
        <ImgStyled src={preview} alt={title} width={100} height={100} />

        <div>
          <HStyled>{title}</HStyled>
          <PStyled>{description}</PStyled>
        </div>
      </AStyled>
    </LiStyled>
  );
};

PopularItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};
