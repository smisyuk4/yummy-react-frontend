import { useEffect, useState } from 'react';
import axios from 'axios';

import { DivStyled } from './PopularRecipe.styled';

// ! FETCH RECIPES TO MAIN PAGE
axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';
const TOKEN =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDE5OTNjODYzZWFmOWJiYTQ2YzY2NSIsImlhdCI6MTY4MjAyMDY2OCwiZXhwIjoxNjg0NjEyNjY4fQ.cc5YEHIsXZ2ZkIFUGCySz5LtjnoU7kjVbeYXtQpyCIw';

const config = {
	headers: {
		auth: `${TOKEN}`,
	},
};

const fetchRecipes = async () => {
	const responce = await axios.get(
		`recipes/popular-recipes?auth=${TOKEN}`,
		config
	);
	return responce;
};

export const PopularRecipe = ({ title }) => {
	const [popRecipes, setPopRecipes] = useState([]);
	useEffect(() => {
		fetchRecipes()
			.then(({ data }) => setPopRecipes(data.data.recipesByPopular))
			.catch(error => error);
	}, []);
	console.log('popular-recipes', popRecipes);

	return (
		<DivStyled>
			<h2>{title}</h2>
			<ul>
				<li key={1}>
					<a
						href="https://www.youtube.com/watch?v=H5TuP6svrpo&ab_channel=%D0%A5%D0%B0%D1%89%D1%96"
						rel="noopener noreferer"
						area-label="git">
						RECIPE CARD
					</a>
				</li>
			</ul>
		</DivStyled>
	);
};

// "Компонент виконує запит на бекенд за популярними рецептами
// В разі успішної відповіді компонент рендерить список відповідних елементів
// В разі помилки компонент рендерить повідомлення про відсутність популярних рецептів в даний момент.
// Кожен рецепт потрібно реалізувати як посилання. По кліку на будь-яке з них користувача потрібно
// переадресувати на сторінку з описом відповідного рецепту RecipePage"
