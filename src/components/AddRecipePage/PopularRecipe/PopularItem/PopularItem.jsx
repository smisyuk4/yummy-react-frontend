import { PropTypes } from 'prop-types';

import {
  NavLinkStyled,
  ImgStyled,
  HStyled,
  EllipsisTextStyled,
} from './PopularItem.styled';

export const PopularItem = ({ _id, title, description, preview }) => {
  return (
    <NavLinkStyled to={`/recipes/${_id}`} replace={true} area-label={title}>
      <ImgStyled src={preview} alt={title} width={100} height={100} />

      <div>
        <HStyled>{title}</HStyled>
        <EllipsisTextStyled text={description} length={70} />
      </div>
    </NavLinkStyled>
  );
};

PopularItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};
