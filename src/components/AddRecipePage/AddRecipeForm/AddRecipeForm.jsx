// import { RecipeDescription } from '../RecipeDescription';
// import { AddButton, RecipeFormDivStyled } from './AddRecipeForm.styled';
import { AddButton } from './AddRecipeForm.styled';

import { useState } from 'react';

import { RecipeDescriptionFields } from './RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields';

export const AddRecipeForm = () => {
	const [title, setTitle] = useState('');
	const [about, setAbout] = useState('');
	const [categori, setCategori] = useState('');
	const [picture, setPicture] = useState(null);
	const [time, setTime] = useState('');

	const [totalFormValues, setTotalFormValues] = useState({});
	// const addRecipe = data => {
	// 	console.log('New Recipe', data);
	// };

	const testFunc = terget => {
		// прийняти данні з форм внизу та записати собі в загальний стейт
		setTotalFormValues();
		console.log(totalFormValues);
	};

	const tesOnCanfeDescription = terget => {
		switch (terget.name) {
			case 'title':
				setTitle(terget.value);
				break;
			case 'about':
				setAbout(terget.value);
				break;
			case 'picture':
				setPicture(terget.files[0]);
				break;
			case 'categori':
				setCategori(terget.value);
				break;
			case 'time':
				setTime(terget.value);
				break;
			default:
				console.log('Invalid subscription type');
		}
	};
	console.log('TOTAL', title, time, categori, picture, about);

	const testFunc2 = () => {
		// взяти данні з стейт - створити новий рецепт

		// та відправити на сервер

		// console.log(totalFormValues);
	};

	testFunc2();

	return (
		<>
			<RecipeDescriptionFields onChange={tesOnCanfeDescription} />
			<RecipeIngredientsFields onChange={testFunc} />
			<RecipePreparationFields onChange={testFunc} />
			<AddButton onClick={testFunc2}>Add</AddButton>
		</>
		// <RecipeFormDivStyled>
		// 	<RecipeDescription onSubmit={addRecipe} />
		// 	<AddButton>Add</AddButton>
		// </RecipeFormDivStyled>
	);
};

// "Компонент містить стейт, в якому зберігаються усі заповнені користувачем у формі  дані.
// Компонент рендерить форму з компонентами:

//  - RecipeDescriptionFields

//  - RecipeIngredientsFields

//  - RecipePreparationFields

// Всі поля форми обовʼязкові, валідуються і виводять користувачу відповідну інформацію у випадку, якщо введене значення не валідне. Компонент рендерить кнопку Add, яка по сабміту форми відправляє запит на створення нового рецепту з відповідними даними.
// Після успішного запиту рецепт додається до списку власних рецептів користувача. Після чого користувач повинен бути переадресований на сторінку MyRecipesPage
// Після помилки в запиті користувачеві виводиться відповідне пуш-повідомлення"
