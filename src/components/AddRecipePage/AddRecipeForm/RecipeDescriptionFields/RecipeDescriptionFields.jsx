import { Formik } from 'formik';
import {
	DescrForm,
	DescriptionDiv,
	InputFile,
	InputForm,
	InputWrapper,
	LabelForm,
	OverlayPicture,
	RecipeImg,
	ThumbImege,
} from './RecipeDescriptionFields.styled';
import { useEffect, useState } from 'react';
import { fetchAllCategory } from 'components/CategoriesPage/FetchWithCategory';
// import { PropTypes } from 'prop-types';

export const RecipeDescriptionFields = ({ onSubmit }) => {
	const [title, setTitle] = useState('');
	const [about, setAbout] = useState('');
	const [categori, setCategori] = useState('');
	const [picture, setPicture] = useState(null);

	const [pictureUrl, setPictureUrl] = useState('');
	const [categoriList, setCategoriList] = useState([]);

	useEffect(() => {
		fetchAllCategory()
			.then(({ data }) => setCategoriList(data.data.resultCategory))
			.catch(error => error);
	}, []);

	useEffect(() => {
		if (picture) {
			const photoUrl = URL.createObjectURL(picture);
			setPictureUrl(photoUrl);
		}
	}, [picture]);

	console.log('categoiList', categoriList);

	const handleSubmit = async ({ title, about, categori }, { resetForm }) => {
		console.log(title, about, categori);
		onSubmit(data);
		resetForm();
	};

	const handleOnChange = event => {
		console.log('Form::onChange', event.target.name);
		const name = event.target.name;
		switch (name) {
			case 'title':
				setTitle(event.target.value);
				console.log('title:', title);
				break;
			case 'about':
				setAbout(event.target.value);
				console.log('about:', about);
				break;
			case 'picture':
				setPicture(event.target.files[0]);
				console.log('picture:', picture);
				// const url = URL.createObjectURL(event.target.value);
				console.log('picture.value', event.target.files);
				// console.log('picture', url);
				break;
			case 'categori':
				setCategori(event.target.value);
				console.log('categori:', categori);
				break;
			case 'test':
				console.log('test select------', event.target.value);
				break;
			default:
				console.log('Invalid subscription type');
		}
	};
	const categoriName = categoriList.map(categ => {
		return <option value={categ}>{categ}</option>;
	});

	const time = [];
	for (let i = 5; i <= 120; i += 5) {
		time.push(i);
	}
	const timeSelect = time.map(categ => {
		return <option value={categ}>{categ}</option>;
	});

	const data = {
		title,
		about,
		categori,
	};
	console.log('data---', data);
	return (
		<DescriptionDiv>
			<Formik
				initialValues={{
					title: '',
					about: '',
					categori: '',
				}}
				onSubmit={handleSubmit}>
				<DescrForm autoComplete="off" onChange={handleOnChange}>
					<OverlayPicture>
						<LabelForm>
							<InputFile name="picture" type="file" multiple />
							<ThumbImege>
								<RecipeImg src={pictureUrl} alt="PICTURE" />
							</ThumbImege>
						</LabelForm>
					</OverlayPicture>

					<InputWrapper>
						<LabelForm>
							Enter item title
							<InputForm name="title" type="text" />
						</LabelForm>
						<LabelForm>
							Enter about recipe
							<InputForm name="about" type="text" />
						</LabelForm>
						<LabelForm>
							Categori
							<InputForm
								name="categori"
								as="select"
								list="character"
								multiple>
								{categoriName}

								{/* <option value=""> </option>
								<option value="red">Red</option>
								<option value="green">Green</option>
								<option value="blue">Blue</option> */}
							</InputForm>
						</LabelForm>
						<div class="wrapper">
							<select
								name="test"
								id=""
								onTouchStart="this.size=5;"
								class="form-control"
								onFocus="this.size=5;"
								onblur="this.size=1;"
								onchange="this.size=1; this.blur();">
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
								<option value="4">Four</option>
								<option value="5">Five</option>
								<option value="">Six</option>
								<option value="">Seven</option>
								<option value="">Eight</option>
								<option value="">Nine</option>
								<option value="">Ten</option>
							</select>
						</div>
						<LabelForm>
							Cooking time
							<InputForm name="time" as="select">
								{timeSelect}
								{/* <option value="red">Red</option>
								<option value="green">Green</option>
								<option value="blue">Blue</option> */}
							</InputForm>
						</LabelForm>
					</InputWrapper>

					<button type="submit">submit</button>
				</DescrForm>
			</Formik>
		</DescriptionDiv>
	);
};

// RecipeDescriptionFields.propTypes = {
// 	onSubmit: PropTypes.func.isRequired,
// };

// "Компонент рендерить поля для вводу користувачем:
//  - файлу з фото рецепту
//  - назви рецепту
//  - опису рецепту
//  - категорії рецепту - обирається з випадаючого списку, який приходить з бекенду
//  - часу приготування рецепту - обирається з випадаючого списку в діапазоні від 5хв до 120хв з кроком 5
// Випадаючі списки повинні показувати 6 рядків даних, всі інші повинні скролитись в межах даного списку.
// Компонент пропсами отримує значення для інпутів, а також хендлер для опрацювання цих значень"
