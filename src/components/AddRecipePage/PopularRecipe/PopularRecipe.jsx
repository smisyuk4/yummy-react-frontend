import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';
import { Title } from 'components/Title';
import { fetchPopularRecipes } from './fetchPopularRecipes';
import { PopularItem } from './PopularItem';
import { DivStyled, UlStyled } from './PopularRecipe.styled';

export const PopularRecipe = ({ title }) => {
  const [popRecipes, setPopRecipes] = useState([]);
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth || 0);

  useEffect(() => {
    async function fetch() {
      try {
        const popular = await fetchPopularRecipes();

        setPopRecipes(prev => popular);
      } catch (error) {
        toast(error);
      } finally {
      }
    }

    fetch();
  }, []);

  // make responsive arr recipes
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const count = windowWidth <= 767 ? 4 : windowWidth <= 1439 ? 2 : 4;

  if (popRecipes?.length === 0) {
    return (
      <DivStyled>
        <Title title={title} className={'title-popular'} />
        <p>Sorry, but we are still preparing the collection for you</p>
      </DivStyled>
    );
  }

  if (popRecipes?.length > 0) {
    return (
      <DivStyled>
        <Title title={title} className={'title-popular'} />

        <UlStyled>
          {popRecipes
            .slice(0, count)
            .map(({ _id, title, description, preview }) => (
              <PopularItem
                key={_id}
                _id={_id}
                title={title}
                description={description}
                preview={preview}
              />
            ))}
        </UlStyled>
      </DivStyled>
    );
  }
};

PopularRecipe.propTypes = {
  title: PropTypes.string.isRequired,
};
