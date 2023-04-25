// import { useEffect, useState } from 'react';

import { RecipeList } from 'components/RecipeList';
import { RecipeListItem } from 'components/RecipeListItem';

// import { deleteRecipe, fetchOwnRecipes } from './operations';

// export const OwnRecipes = () => {
// 	const [ownRecipes, setOwnRecipes] = useState();

// 	useEffect(() => {
// 		async function fetch() {
// 			try {
// 				const ownRecipes = await fetchOwnRecipes();
// 				setOwnRecipes(prev => ownRecipes.data.data.recipes);
// 			} catch (error) {
// 				console.log(error);
// 			} finally {
// 			}
// 		}

// 		fetch();
// 	}, []);

// 	if (ownRecipes.length > 0) {
// 		return (
// 			<RecipeList>
// 				{ownRecipes.map(recipe => (
// 					<RecipeListItem
// 						key={recipe.id}
// 						recipe={recipe}
// 						onDelete={deleteRecipe}
// 					/>
// 				))}
// 				<RecipeListItem />
// 			</RecipeList>
// 		);
// 	}
// };

export const OwnRecipes = () => {
	return (
		<RecipeList>
			<RecipeListItem />
			<RecipeListItem />
		</RecipeList>
	);
};
