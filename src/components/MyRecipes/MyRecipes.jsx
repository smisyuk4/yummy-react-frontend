import { useEffect, useState } from 'react';

import { Container, TitleWrapper } from './MyRecipes.styled';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';
import { MyRecipesList } from 'components/MyRecipesList';
import { MyRecipesItem } from 'components/MyRecipesItem';
import { NoResults } from 'components/NoResults';
import { deleteOwnRecipe, fetchOwnRecipes } from './operations';

export const MyRecipes = () => {
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
			setOwnRecipes(prev => updatedRecipesList.data.recipes);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Container>
			<TitleWrapper>
				<ReusableComponentTitleWithJewelry title="My recipes"></ReusableComponentTitleWithJewelry>
			</TitleWrapper>

			{ownRecipes?.length > 0 ? (
				<MyRecipesList>
					{ownRecipes.map(recipe => (
						<MyRecipesItem
							key={recipe._id}
							recipe={recipe}
							onDelete={() => deleteRecipe(recipe._id)}
						/>
					))}
				</MyRecipesList>
			) : (
				<NoResults text="No recipes found" />
			)}
		</Container>
	);
};
