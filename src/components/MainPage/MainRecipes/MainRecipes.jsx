import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
  BtnBox, 
  } from './MainRecipes.styled';

export const MainRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipesCount, setDisplayedRecipesCount] = useState(4);
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth || 0);


  useEffect(() => {
    fetchRecipes()
    .then(({data}) => {
      let arr = data.resultAllCategory; 
      let arr1 = arr[4];
     arr.splice(4, 1);
     arr.push(arr1);
     setRecipes(arr)
    })
      .catch(error => console.error(error))
  }, []);


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

  const Mobile = (<CardList>
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
  </CardList>);

  const Tablet = (<CardList>
    {recipes.slice(0, displayedRecipesCount).map((oneRes) => {
  const categoryOnScreen = [];

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
            <CardItem key={uuidv4()}>
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
  </CardList>);

  const Desktop = (<CardList>
    {recipes.slice(0, displayedRecipesCount).map((oneRes) => {
      const categoryOnScreen = [];
      return oneRes.slice(0, 8).map(({ title, thumb, category }, index) => {
        const isFirstInCategory = !categoryOnScreen.includes(category);
        if (isFirstInCategory) {
          categoryOnScreen.push(category);
        }
        const isLastInCategory = index === oneRes.slice(0, 8).filter((item) => item.category === category).length - 1;
        return (
          <CardItem key={title}>
            {isFirstInCategory && <TitleCategory>{category}</TitleCategory>}
            <Image src={thumb} alt={title} />
            <CardBox>
              <CardTitle>{title}</CardTitle>
            </CardBox>
            {isLastInCategory && (
              <NavBox>
                <NavToCategory to={`/categories/${category}`}>See all</NavToCategory>
              </NavBox>
            )}
          </CardItem>
        );
      });
    })}
  </CardList>)
  return (
    <Section>
      {windowWidth <= 767 ? Mobile : windowWidth <= 1439 ? Tablet : Desktop}
      {displayedRecipesCount < recipes.length && (
        <BtnBox><Button loadMore={loadMore}>Load More</Button></BtnBox>
      )}
    </Section>
  );
};
