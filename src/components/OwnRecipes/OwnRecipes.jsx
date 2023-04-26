import { useEffect, useState } from 'react';

import { RecipeList } from 'components/RecipeList';
import { RecipeListItem } from 'components/RecipeListItem';
import { NoResults } from 'components/NoResults';
import { deleteOwnRecipe, fetchOwnRecipes } from './operations';

export const OwnRecipes = () => {
	const [ownRecipes, setOwnRecipes] = useState();

	useEffect(() => {
		async function fetch() {
			try {
				const ownRecipes = await fetchOwnRecipes();
				setOwnRecipes(prev => ownRecipes.data.recipes);
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
			console.log('updated', updatedRecipesList);
			setOwnRecipes(prev => updatedRecipesList.data.recipes);
		} catch (error) {
			console.log(error);
		}
	}

	if (ownRecipes?.length > 0) {
		return (
			<RecipeList>
				{ownRecipes.map(recipe => (
					<RecipeListItem
						key={recipe._id}
						recipe={recipe}
						onDelete={() => deleteRecipe(recipe._id)}
					/>
				))}
			</RecipeList>
		);
	} else {
		return <NoResults text="No recipes found" />;
	}
};
