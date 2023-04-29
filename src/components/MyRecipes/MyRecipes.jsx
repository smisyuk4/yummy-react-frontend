import { useEffect, useState } from 'react';

import { Container, TitleWrapper } from './MyRecipes.styled';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';
import { MyRecipesList } from 'components/MyRecipesList';
import { MyRecipesItem } from 'components/MyRecipesItem';
import { NoResults } from 'components/NoResults';
import { deleteOwnRecipe, fetchOwnRecipes } from './operations';
import { Pagination } from 'components/SearchingPage/Pagination';

export const MyRecipes = () => {
  const [ownRecipes, setOwnRecipes] = useState();
  const [page, setPage] = useState(2);
  const limit = 4;

  useEffect(() => {
    async function fetch() {
      try {
        const ownRecipes = await fetchOwnRecipes();
        setOwnRecipes(ownRecipes.data.recipes);
      } catch (error) {
        console.log(error);
      }
    }

    fetch();
  }, []);

  async function deleteRecipe(id) {
    try {
      await deleteOwnRecipe(id);
      const updatedRecipesList = await fetchOwnRecipes();
      setOwnRecipes(updatedRecipesList.data.recipes);
    } catch (error) {
      console.log(error);
    }
  }
  const handlePagination = selected => {
    setPage(selected);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Container>
      <TitleWrapper>
        <ReusableComponentTitleWithJewelry title="My recipes"></ReusableComponentTitleWithJewelry>
      </TitleWrapper>

      {ownRecipes?.length > 0 ? (
        <>
          <MyRecipesList>
            {ownRecipes
              .slice((page - 1) * limit, (page - 1) * limit + limit)
              .map(recipe => (
                <MyRecipesItem
                  key={recipe._id}
                  recipe={recipe}
                  onDelete={() => deleteRecipe(recipe._id)}
                />
              ))}
          </MyRecipesList>
          {ownRecipes.length / limit > 1 && (
            <Pagination
              pagecount={Math.ceil(ownRecipes.length / limit)}
              onChange={handlePagination}
              page={page}
            />
          )}
        </>
      ) : (
        <NoResults text="No recipes found" />
      )}
    </Container>
  );
};
