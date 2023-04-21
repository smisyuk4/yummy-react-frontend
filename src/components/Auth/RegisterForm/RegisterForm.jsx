import {
	FormStyled,
	LabelForm,
	InputForm,
	InputError,
	H1Styled,
} from './RegisterForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormButton } from 'components/ButtonNav/ButtonNav.styled';

const RegisterSchema = Yup.object().shape({
	name: Yup.string().min(1).max(16).required(),
	password: Yup.string().min(6).max(16).required(),
	email: Yup.string().email().required(),
});

export const RegisterForm = () => {
	const sendRegister = ({ name, password, email }, { resetForm }) => {
		resetForm();
	};
	return (
		<Formik
			initialValues={{ name: '', number: '' }}
			onSubmit={sendRegister}
			validationSchema={RegisterSchema}>
			<FormStyled autoComplete="off">
				<H1Styled>Registration</H1Styled>
				<LabelForm>
					<InputForm type="text" name="name" placeholder="Username" />
					<ErrorMessage name="name" component={InputError} />
				</LabelForm>
				<LabelForm>
					<InputForm
						type="password"
						name="password"
						placeholder="Password"
					/>
					<ErrorMessage name="password" component={InputError} />
				</LabelForm>
				<LabelForm>
					<InputForm type="email" name="email" placeholder="Email" />
					<ErrorMessage name="email" component={InputError} />
				</LabelForm>
				<FormButton type="submit">Register</FormButton>
			</FormStyled>
		</Formik>
	);
};
