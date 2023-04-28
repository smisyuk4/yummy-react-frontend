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
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddRecipeForm = () => {
	const [title, setTitle] = useState('');
	const [about, setAbout] = useState('');
	const [categori, setCategori] = useState('');
	const [picture, setPicture] = useState(null);
	const [time, setTime] = useState('');
	const [ingredients, setIngredients] = useState(null);
	const [preparationEditedText, setPreparationEditedText] = useState(null);

	const ingridientsCange = ingridientsArray => {
		setIngredients(ingridientsArray);
	};
	const preparationChange = change => {
		setPreparationEditedText(change);
	};
	const tesOnCanfeDescription = target => {
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

	const notifyError = message => {
		toast.error(message, { position: 'bottom-center', theme: 'colored' });
	};
	const notifySuccess = message => {
		toast.success(message, { position: 'bottom-center', theme: 'colored' });
	};

	const PostRecipe = async () => {
		const igr = ingredients.map(el => {
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

		try {
			const valdate = await Yup.string()
				.min(1)
				.required()
				.validate(title);
			if (!valdate) {
				return;
			}
		} catch (err) {
			notifyError('Recipe name field is empty');
			return;
		}
		try {
			const valdate = await Yup.string()
				.min(1)
				.required()
				.validate(about);
			if (!valdate) {
				return;
			}
		} catch {
			notifyError('Field "about recipe" is empty');
			return;
		}
		try {
			const valdate = await Yup.string()
				.min(1)
				.required()
				.validate(categori);
			if (!valdate) {
				return;
			}
		} catch {
			notifyError('Recipe category not selected');
			return;
		}
		try {
			const valdate = await Yup.string().min(1).required().validate(time);
			if (!valdate) {
				return;
			}
		} catch {
			notifyError('Cooking time not selected');
			return;
		}
		try {
			const valdate = await Yup.array()
				.min(1)
				.required()
				.validate(ingredients);
			if (!valdate) {
				return;
			}
		} catch {
			notifyError('No ingredients have been selected');
			return;
		}
		try {
			const valdate = await Yup.array()
				.min(1)
				.required()
				.validate(preparationEditedText);
			if (!valdate) {
				return;
			}
		} catch {
			notifyError('Preparation process not specified');
			return;
		}

		try {
			dataFile.set('imageURL', picture);
			dataFile.set('body', JSON.stringify(requestBody));
			console.log('FORM-DATA----', dataFile);
			notifySuccess(
				'All data is complete. The recipe is added to your collection.'
			);
			await axios.post('/ownRecipes', dataFile, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			window.location.assign('./my');
		} catch (error) {
			notifyError('Sorry. Failed to add recipe to collection');
		}
	};

	return (
		<AddRecipeFormWrapper>
			<WrapperAllInput>
				<RecipeDescriptionFields onChange={tesOnCanfeDescription} />
				<RecipeIngredientsFields onChange={ingridientsCange} />
				<RecipePreparationFields onChange={preparationChange} />
			</WrapperAllInput>
			<AddButton type="submit" onClick={PostRecipe}>
				Add
			</AddButton>
			<ToastContainer />
		</AddRecipeFormWrapper>
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
