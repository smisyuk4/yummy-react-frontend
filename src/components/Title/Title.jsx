import { PropTypes } from 'prop-types';
import { TitleH } from './Title.styled';

export const Title = ({ className, title }) => {
  return <TitleH className={className}>{title}</TitleH>;
};

Title.propTypes = {
  title: PropTypes.string,
};
