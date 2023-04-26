import { useState } from 'react';
import {
	PreparationFieldSet,
	PreparationHeading,
	PreparationTextArea,
} from './RecipePreparationFields.styled';

export const RecipePreparationFields = ({ onChange }) => {
	// форму створив до того як читав ТЗ, треба думати, виправляти
	const [preparationUneditedText, setPreparationUneditedText] = useState('');
	const [preparationEditedText, setPreparationEditedText] = useState([]);

	const onTextAreaChange = e => {
		setPreparationUneditedText([e.currentTarget.value]);
		const result = e.currentTarget.value.split(/\r?\n/);
		setPreparationEditedText(result);
		onChange(preparationEditedText);
	};
	return (
		<PreparationFieldSet>
			<PreparationHeading>Recipe preparation</PreparationHeading>
			<PreparationTextArea
				placeholder="Enter recipe"
				value={preparationUneditedText}
				onChange={onTextAreaChange}></PreparationTextArea>
		</PreparationFieldSet>
	);
};

// "Компонент рендерить textarea елемент.
// Дані введені користувачем в цей елемент повинні записуватись в стейт форми preparation в масив елементів.
// Кожен з елементів буде містити в собі текст введений користувачем з нового рядка після натискання на клавішу ENTER в текстовому полі.
// Якщо весь текст був написаний без переходу на новий рядок через ENTER, то в масиві  preparation повинен бути один елемент з цим текстом"
