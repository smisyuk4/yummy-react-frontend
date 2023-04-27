import PropTypes from 'prop-types';
import { useState } from 'react';
import {
	EmptyFieldNotation,
	PreparationFieldSet,
	PreparationHeading,
	PreparationTextArea,
} from './RecipePreparationFields.styled';
import { Formik } from 'formik';

export const RecipePreparationFields = ({ onChange }) => {
	// форму створив до того як читав ТЗ, треба думати, виправляти
	const [preparationUneditedText, setPreparationUneditedText] = useState('');
	const [preparationEditedText, setPreparationEditedText] = useState([]);
	const [FieldEmptyState, setFieldEmptyState] = useState(true);

	const onTextAreaChange = e => {
		if (e.currentTarget.value !== '') {
			setFieldEmptyState(false);
		} else {
			setFieldEmptyState(true);
		}
		setPreparationUneditedText([e.currentTarget.value]);
		const result = e.currentTarget.value.split(/\r?\n/);
		setPreparationEditedText(result);
		onChange(preparationEditedText);
	};
	return (
		<Formik>
			<PreparationFieldSet>
				<PreparationHeading>
					Recipe preparation{FieldEmptyState && <EmptyFieldNotation> *</EmptyFieldNotation>}
				</PreparationHeading>
				<PreparationTextArea
					as="textarea"
					placeholder="Enter recipe"
					value={preparationUneditedText}
					onChange={onTextAreaChange}></PreparationTextArea>
			</PreparationFieldSet>
		</Formik>
	);
};

RecipePreparationFields.propType = {
	onChange: PropTypes.func.isRequired,
};

// "Компонент рендерить textarea елемент.
// Дані введені користувачем в цей елемент повинні записуватись в стейт форми preparation в масив елементів.
// Кожен з елементів буде містити в собі текст введений користувачем з нового рядка після натискання на клавішу ENTER в текстовому полі.
// Якщо весь текст був написаний без переходу на новий рядок через ENTER, то в масиві  preparation повинен бути один елемент з цим текстом"
