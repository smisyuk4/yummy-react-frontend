// import { RecipeDescription } from '../RecipeDescription';
// import { AddButton, RecipeFormDivStyled } from './AddRecipeForm.styled';
import {
	AddButton,
	AddRecipeFormWrapper,
	WrapperAllInput,
} from './AddRecipeForm.styled';

import { useState } from 'react';

import { RecipeIngredientsFields } from './RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import axios from 'axios';

// const URL = 'https://yummy-rest-api.onrender.com';

// const instance = axios.create({
// 	baseURL: URL,
// });

// const fetchImg = async userInf => {
// 	try {
// 		const { data } = await instance.post('/ownRecipes', userInf, {
// 			headers: {
// 				'Content-Type': 'multipart/form-data',
// 			},
// 		});
// 		console.log(data);
// 		return data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// const fetchData = async userInf => {
// 	try {
// 		const { data } = await instance.post('/ownRecipes', userInf, {
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});
// 		console.log(data);
// 		return data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export const AddRecipeForm = () => {
	const [title, setTitle] = useState('');
	const [about, setAbout] = useState('');
	const [categori, setCategori] = useState('');
	const [picture, setPicture] = useState(null);
	const [time, setTime] = useState('');
	const [ingretients, setIngridients] = useState([]);
	const [preparationEditedText, setPreparationEditedText] = useState([]);

	// const [totalFormValues, setTotalFormValues] = useState({});
	// const addRecipe = data => {
	// 	console.log('New Recipe', data);
	// };

	// const testFunc = terget => {
	// 	// прийняти данні з форм внизу та записати собі в загальний стейт
	// 	setTotalFormValues();
	// 	console.log(totalFormValues);
	// };

	const ingridientsCange = ingridientsArray => {
		setIngridients(ingridientsArray);
	};
	const preparationChange = change => {
		setPreparationEditedText(change);
	};
	const tesOnCanfeDescription = target => {
		console.log(target);
		switch (target.name) {
			case 'title':
				setTitle(target.value);
				break;
			case 'about':
				setAbout(target.value);
				break;
			case 'picture':
				setPicture(target.files[0]);
				break;
			case 'categori':
				setCategori(target.value);
				break;
			case 'time':
				setTime(target.value);
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

	const PostRecipe = async () => {
		const igr = ingretients.map(el => {
			return { id: el.ingredientId, measure: el.measure };
		});
		const dataFile = new FormData();
		const requestBody = {
			title: title,
			description: about,
			category: categori,
			time: time,
			instructions: preparationEditedText.toString(),
			ingredients: igr,
		};
		dataFile.set('imageURL', picture);
		dataFile.set('body', JSON.stringify(requestBody));
		console.log('FORM-DATA----', dataFile);

		// await fetchImg(dataFile);
		try {
			axios.defaults.baseURL =
				'https://vitalii-volianyk-upgraded-waddle-jpx7pp5jw9r3jgx9-4000.preview.app.github.dev/';
			await axios.post('/ownRecipes', dataFile, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
		} catch (error) {
			console.log(error);
		}
		// await fetchData(JSON.stringify(newRecipe));
	};

	return (
		<AddRecipeFormWrapper>
			<WrapperAllInput>
				<RecipeDescriptionFields onChange={tesOnCanfeDescription} />
				<RecipeIngredientsFields onChange={ingridientsCange} />
				<RecipePreparationFields onChange={preparationChange} />
			</WrapperAllInput>
			<AddButton onClick={PostRecipe}>Add</AddButton>
		</AddRecipeFormWrapper>
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
