import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';
import { fetchPopularRecipes } from './fetchPopularRecipes';
import { PopularItem } from './PopularItem';
import { Title } from 'components/Title';
import { DivStyled, UlStyled } from './PopularRecipe.styled';

export const PopularRecipe = ({ title }) => {
  const [popRecipes, setPopRecipes] = useState([]);

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

  if (popRecipes?.length === 0) {
    return (
      <DivStyled>
        <Title title={title} />
        <p>Sorry, but we are still preparing the collection for you</p>
      </DivStyled>
    );
  }

  if (popRecipes?.length > 0) {
    return (
      <DivStyled>
        <Title title={title} />
		
        <UlStyled>
          {popRecipes.map(({ _id, title, description, preview }) => (
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

//+++++ "Компонент виконує запит на бекенд за популярними рецептами
//++++++ В разі успішної відповіді компонент рендерить список відповідних елементів
// В разі помилки компонент рендерить повідомлення про відсутність популярних рецептів в даний момент.

// Кожен рецепт потрібно реалізувати як посилання. По кліку на будь-яке з них користувача потрібно
// переадресувати на сторінку з описом відповідного рецепту RecipePage"
