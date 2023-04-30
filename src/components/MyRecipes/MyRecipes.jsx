import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Container, TitleWrapper, PaginationWrapper } from './MyRecipes.styled';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';
import { MyRecipesList } from 'components/MyRecipesList';
import { MyRecipesItem } from 'components/MyRecipesItem';
import { NoResults } from 'components/NoResults';
import { Pagination } from 'components/SearchingPage/Pagination';
import { deleteOwnRecipe, fetchOwnRecipes } from './operations';

export const MyRecipes = () => {
	const [ownRecipes, setOwnRecipes] = useState();
	const [page, setPage] = useState(1);
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

	if (!ownRecipes) {
		return (
			<Container>
				<TitleWrapper>
					<ReusableComponentTitleWithJewelry title="My recipes"></ReusableComponentTitleWithJewelry>
				</TitleWrapper>
				<ColorRing
					visible={true}
					ariaLabel="blocks-loading"
					wrapperClass="blocks-wrapper"
					colors={[
						'#2a2c36',
						'#f43e30',
						'#FcBC00',
						'#29BC24',
						'#a8444A',
					]}
				/>
			</Container>
		);
	}

	return (
		<Container>
			<TitleWrapper>
				<ReusableComponentTitleWithJewelry title="My recipes"></ReusableComponentTitleWithJewelry>
			</TitleWrapper>

			{ownRecipes?.length === 0 ? (
				<NoResults text="Recipes not found" />
			) : (
				<>
					<MyRecipesList>
						{ownRecipes.length <= limit ? (
							<>
								{ownRecipes.map(recipe => (
									<MyRecipesItem
										key={recipe._id}
										recipe={recipe}
										onDelete={() =>
											deleteRecipe(recipe._id)
										}
									/>
								))}
							</>
						) : (
							<>
								{ownRecipes
									.slice(
										(page - 1) * limit,
										(page - 1) * limit + limit
									)
									.map(recipe => (
										<MyRecipesItem
											key={recipe._id}
											recipe={recipe}
											onDelete={() =>
												deleteRecipe(recipe._id)
											}
										/>
									))}
							</>
						)}
					</MyRecipesList>

					{ownRecipes.length / limit > 1 && (
						<PaginationWrapper>
							<Pagination
								pagecount={Math.ceil(ownRecipes.length / limit)}
								onChange={handlePagination}
								page={page}
							/>
						</PaginationWrapper>
					)}
				</>
			)}
		</Container>
	);
};
