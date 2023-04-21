import { SectionStyled } from './MainRecipes.styled';
import { useState, useEffect } from 'react';
import { fetchRecipes } from './FetchRecipes';

export const Test = () => {
	const [recipes, setrecipes] = useState([]);

	useEffect(() => {
		fetchRecipes()
			.then(({ data }) => setrecipes(data))
			.catch(error => error);
	}, []);

	if (recipes) {
		console.log('recepies = ', recipes);
	}
};

export const MainRecipes = () => {
	Test();
	return <SectionStyled>Test</SectionStyled>;
};
