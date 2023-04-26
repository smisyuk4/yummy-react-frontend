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

export const RecipeDescriptionFields = ({ onChange }) => {
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
		if (name === 'picture') {
			setPicture(event.target.files[0]);
		}
		// switch (name) {
		// 	case 'picture':
		// 		setPicture(event.target.files[0]);
		// 		break;
		// 	default:
		// 		console.log('Invalid subscription type');
		// }
	};
	const categoriName = categoriList.map(categ => {
		return (
			<option key={categ} value={categ}>
				{categ}
			</option>
		);
	});

	const timeList = [];
	for (let i = 5; i <= 120; i += 5) {
		timeList.push(i);
	}
	const timeSelect = timeList.map(categ => {
		return (
			<option key={categ} value={categ}>
				{categ} min
			</option>
		);
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
