import { Formik } from 'formik';
import {
	DescrForm,
	DescriptionDiv,
	InputFile,
	InputForm,
	InputSelct,
	InputWrapper,
	LabelForm,
	LabelSelect,
	OverlayPicture,
	RecipeImg,
	ThumbImege,
} from './RecipeDescriptionFields.styled';
import { useEffect, useState } from 'react';
import { fetchAllCategory } from 'components/CategoriesPage/FetchWithCategory';
import { Icon } from 'components/Icon';
// import { PropTypes } from 'prop-types';

export const RecipeDescriptionFields = ({ onChange }) => {
	// const [title, setTitle] = useState('');
	// const [about, setAbout] = useState('');
	// const [categori, setCategori] = useState('');
	// const [time, setTime] = useState('');
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

	const handleSubmit = async ({ title, about, categori }, { resetForm }) => {
		resetForm();
	};

	const handleOnChange = event => {
		const name = event.target.name;
		const target = event.target;
		onChange(target);
		switch (name) {
			// 	case 'title':
			// 		setTitle(event.target.value);
			// 		break;
			// 	case 'about':
			// 		setAbout(event.target.value);
			// 		break;
			case 'picture':
				setPicture(event.target.files[0]);
				break;
			// 	case 'categori':
			// 		setCategori(event.target.value);
			// 		break;
			// case 'time':
			// 	event.target.size = 6;
			// 	break;
			default:
				console.log('Invalid subscription type');
		}
	};
	const categoriName = categoriList.map(categ => {
		return <option value={categ}>{categ}</option>;
	});

	const timeList = [];
	for (let i = 5; i <= 120; i += 5) {
		timeList.push(i);
	}
	const timeSelect = timeList.map(categ => {
		return <option value={categ}>{categ} min</option>;
	});

	const selectFocus = prop => {
		prop.target.size = 6;
		prop.target.style = 'position: absolute; right: 0; z-index: 10;';
	};

	const selectChange = prop => {
		prop.target.size = 1;
		prop.target.blur();
	};

	const selectBlur = prop => {
		prop.target.size = 1;
		prop.target.style = 'position: relative; z-index: 1;';
	};

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
								{pictureUrl ? (
									<RecipeImg src={pictureUrl} alt="PICTURE" />
								) : (
									<Icon
										id="icon-add-photo-recipe"
										fill="#fafafa"
										width={64}
										height={64}
									/>
								)}
							</ThumbImege>
						</LabelForm>
					</OverlayPicture>

					<InputWrapper>
						<LabelForm>
							<InputForm
								name="title"
								type="text"
								placeholder="Enter item title"
							/>
						</LabelForm>
						<LabelForm>
							<InputForm
								name="about"
								type="text"
								placeholder="Enter about recipe"
							/>
						</LabelForm>
						<LabelSelect>
							Categori
							<InputSelct
								name="categori"
								as="select"
								placeholder="Categori"
								onFocus={selectFocus}
								onChange={selectChange}
								onBlur={selectBlur}>
								{categoriName}
							</InputSelct>
						</LabelSelect>
						<LabelSelect>
							Cooking time
							<InputSelct
								name="time"
								as="select"
								startValue=""
								onFocus={selectFocus}
								onChange={selectChange}
								onBlur={selectBlur}>
								{timeSelect}
							</InputSelct>
						</LabelSelect>
					</InputWrapper>
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

/* <div>
							<select
								name="test"
								id=""
								// class="form-control"
								// onfocus="this.size=5;"
								// onblur="this.size=1;"
								// onChange="this.size=1; this.blur();"
							>
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
						</div> */
