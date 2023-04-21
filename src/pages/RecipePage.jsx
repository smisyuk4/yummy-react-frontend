// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { selectError, selectIsLoading , selectRecipes} from '../redux/recipes/recipesSelector';
// import { fetchRecipes } from 'redux/recipes/recipesThunk';
import { RecipePageHero } from "components/Hero/RecipeHero/RecipePageHero";


export const RecipePage = () => {
	// const isLoading = useSelector(selectIsLoading);
	// const error = useSelector(selectError);
	// const currentRecipe = useSelector(selectRecipes);
	// const dispatch = useDispatch();
	// useEffect(() => {
    //     dispatch(fetchRecipes());
    // }, [dispatch]);
	return (<>
		<RecipePageHero>
			{/* title={currentRecipe.title},
			description={currentRecipe.description} */}
		</RecipePageHero>
		
		</>);
};
