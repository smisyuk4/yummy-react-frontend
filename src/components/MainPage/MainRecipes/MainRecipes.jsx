import { useState, useEffect } from 'react';
import { fetchRecipes } from './FetchRecipes';
import { Button } from './Button';
import { Section, 
  CardList, 
  CardItem, 
  TitleCategory, 
  Image, 
  CardBox, 
  CardTitle, 
  NavBox, 
  NavToCategory, 
  BtnBox, //ImgStyled 
  } from './MainRecipes.styled';

export const MainRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipesCount, setDisplayedRecipesCount] = useState(4);


  useEffect(() => {
    fetchRecipes()
      .then(({ data }) => setRecipes(data.resultAllCategory))
      .catch(error => console.error(error));
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(`Ширина экрана: ${windowWidth}px`);

  const loadMore = () => {
    setDisplayedRecipesCount(prevCount => prevCount + 4);
  };

  return (
    
    <Section>
      {/* <CardList>
        {recipes.slice(0, displayedRecipesCount).map((oneRes) => {
          const { title, thumb, category } = oneRes[0];

          return (
            <CardItem key={category}>
              <TitleCategory>{category}</TitleCategory>
              <Image src={thumb} alt={title} />
              <CardBox>
                <CardTitle>{title}</CardTitle>
              </CardBox>
              <NavBox>
                <NavToCategory to={`/categories/${category}`}>See all</NavToCategory>
              </NavBox>
            </CardItem>
          );
        })}
      </CardList> */}
<CardList>
  {recipes.slice(0, displayedRecipesCount).map((oneRes) => {
const categoryOnScreen = []; //И тут я закипел!!!!!!!!!! создал масив для проверки - включает ли он два одинаковых названия категорий 
    return oneRes.slice(0, 2).map(({ title, thumb, category }) => {
      if (!categoryOnScreen.includes(category)) { //если не включает категорию тогда добавь категорию и верни то что я от тебя хочу!!!!!
        categoryOnScreen.push(category);
        return (
          <CardItem key={category}>
            <TitleCategory>{category}</TitleCategory>
            <Image src={thumb} alt={title} />
            <CardBox>
              <CardTitle>{title}</CardTitle>
            </CardBox>
          </CardItem>
        );
      } else {
        return (
          <CardItem key={category}>
            <Image src={thumb} alt={title} />
            <CardBox>
              <CardTitle>{title}</CardTitle>
            </CardBox>
            <NavBox>
              <NavToCategory to={`/categories/${category}`}>See all</NavToCategory>
            </NavBox>
          </CardItem>
        );
      }
    });
  })}
</CardList>
      {displayedRecipesCount < recipes.length && (
        <BtnBox><Button loadMore={loadMore}>Load More</Button></BtnBox>
      )}
      {/* <ImgStyled/> */}
    </Section>
  );
};
