import {
	FormStyled,
	LabelForm,
	InputForm,
	InputError,
	H1Styled,
} from 'components/Auth/RegisterForm/RegisterForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormButton } from 'components/ButtonNav/ButtonNav.styled';

const SigninSchema = Yup.object().shape({
	password: Yup.string().min(6).max(16).required(),
	email: Yup.string().email().required(),
});

export const SigninForm = () => {
	const sendSignin = ({ name, number }, { resetForm }) => {
		resetForm();
	};
	return (
		<Formik
			initialValues={{ password: '', email: '' }}
			onSubmit={sendSignin}
			validationSchema={SigninSchema}>
			<FormStyled autoComplete="off">
				<H1Styled>Registration</H1Styled>
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
				<FormButton type="submit">Sign In</FormButton>
			</FormStyled>
		</Formik>
	);
};
