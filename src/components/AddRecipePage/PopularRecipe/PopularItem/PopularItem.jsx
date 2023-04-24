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
        href={`https://yummy-rest-api.onrender.com/recipes/${_id}`}
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
