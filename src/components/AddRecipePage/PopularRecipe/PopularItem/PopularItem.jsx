import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  LiStyled,
  ImgStyled,
  HStyled,
  PStyled,
} from './PopularItem.styled';

export const PopularItem = ({ _id, title, description, preview }) => {
  return (
    <LiStyled>
      <NavLink to={`/recipes/${_id}`} replace={true} area-label={title}>
        <ImgStyled src={preview} alt={title} width={100} height={100} />

        <div>
          <HStyled>{title}</HStyled>
          <PStyled>{description}</PStyled>
        </div>
      </NavLink>
    </LiStyled>
  );
};

PopularItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};
