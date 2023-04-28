import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchRecipes } from './FetchRecipes';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import {
	Section,
	// CardList,
	CardItem,
	TitleCategory,
	Image,
	ImageBox,
	CardBox,
	CardTitle,
	NavBox,
	NavToCategory,
	BtnBox,
} from './MainRecipes.styled';

export const MainRecipes = () => {
	const [recipes, setRecipes] = useState([]);
	const [displayedRecipesCount, setDisplayedRecipesCount] = useState(4);
	const [windowWidth, setWindowWidth] = useState(
		() => window.innerWidth || 0
	);

	useEffect(() => {
		fetchRecipes()
			.then(({ data }) => {
				let arr = data.resultAllCategory;
				let arr1 = arr[4];
				arr.splice(4, 1);
				arr.push(arr1);
				setRecipes(arr);
			})
			.catch(error => console.error(error));
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	// console.log(`Ширина экрана: ${windowWidth}px`);
	const loadMore = () => {
		setDisplayedRecipesCount(prevCount => prevCount + 4);
	};
//!!trottle
	const count = windowWidth <= 767 ? 1 : windowWidth <= 1439  ? 2  : 4;

	return (
		<Section>
			<ul>
				{recipes.slice(0, displayedRecipesCount).map(oneRes => {
					const { category } = oneRes[0];
					return (
						<li key={uuidv4()} >
							<TitleCategory>{category}</TitleCategory>
							<CardItem>
								{oneRes
									.slice(0, count)
									.map(({ title, thumb, _id }) => {
										return (
											<ImageBox key={uuidv4()}>
											<NavLink to={`/recipes/${_id}`}>
												<Image
													src={thumb}
													alt={title}
												/>
											</NavLink>
												<CardBox>
													<CardTitle>
														{title}
													</CardTitle>
												</CardBox>
											</ImageBox>
										);
									})}
							</CardItem>
							{ oneRes.length < count ? null : (<NavBox>
								<NavToCategory to={`/categories/${category}`}>
									See all
								</NavToCategory>
							</NavBox>) }
						</li>
					);
				})}
			</ul>
			{displayedRecipesCount < recipes.length && (
				<BtnBox>
					<Button loadMore={loadMore}>Load More</Button>
				</BtnBox>
			)}
		</Section>
	);
};
