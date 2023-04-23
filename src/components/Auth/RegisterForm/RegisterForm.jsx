import {
	FormStyled,
	LabelStyled,
	InputForm,
	InputError,
	H1Styled,
	IconStyled,
	IconStatusStyled,
	NavLinkStyled,
	DivStyled,
} from '../AuthForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormButton } from 'components/ButtonNav/ButtonNav.styled';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';

const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
const nameRegex = /^[a-zA-Zа-яА-ЯґҐєЄїЇіІ0-9\s]{6,}$/;
const emailRegex =
	/^[\w!#$%^&*\-=/{}[\]_|`~?\\+][\w!#$%^&*\+\-?=/{}[\]_|`~\\.]{1,62}[\w!#$%^&*\-=/{}+[\]_|`~?\\]@([\w]+\.){1,20}[\w]{1,4}$/;

const RegisterSchema = Yup.object().shape({
	name: Yup.string()
		.matches(
			nameRegex,
			'Name can include numbers and letters (Latin, Cyrillic), the minimum number of characters in the field is 1 (inclusive), the maximum is 16 (inclusive)'
		)
		.min(1)
		.max(16)
		.required(),
	password: Yup.string()
		.matches(
			passwordRegex,
			'The password must include numbers and letters - the minimum number of characters in the field - 6 (inclusive), the maximum - 16 (inclusive)'
		)
		.min(6)
		.max(16)
		.required(),
	passwordConfirm: Yup.string()
		.matches(
			passwordRegex,
			'The password must include numbers and letters - the minimum number of characters in the field - 6 (inclusive), the maximum - 16 (inclusive)'
		)
		.min(6)
		.max(16)
		.required(),
	email: Yup.string()
		.min(6)
		.max(64)
		.matches(
			emailRegex,
			'The local part of the mail can contain capital and small Latin letters (A-Z, a-z), numbers (from 0 to 9) and special symbols !#$%^&*_-=*/?+ but no more than 64 characters'
		)
		.email()
		.required(),
});

export const RegisterForm = () => {
	const dispatch = useDispatch();
	const sendRegister = ({ name, password, email }, { resetForm }) => {
		dispatch(registerUser({ name, password, email }));
		resetForm();
	};
	return (
		<DivStyled>
			<Formik
				initialValues={{
					name: '',
					password: '',
					passwordConfirm: '',
					email: '',
				}}
				onSubmit={sendRegister}
				validationSchema={RegisterSchema}>
				{formik => {
					const { errors, touched, values } = formik;

					if (!(values.passwordConfirm === values.password)) {
						errors.passwordConfirm = "Passwords don't match";
					}
					return (
						<FormStyled autoComplete="off">
							<H1Styled>Registration</H1Styled>
							<LabelStyled
								className={
									touched.name &&
									(errors.name ? 'error' : 'valid')
								}>
								<IconStyled id="icon-person" />
								<InputForm
									type="text"
									name="name"
									placeholder="Username"
								/>
								{touched.name &&
									(errors.name ? (
										<>
											<ErrorMessage
												name="name"
												component={InputError}
											/>
											<IconStatusStyled id="icon-validation-error" />
										</>
									) : (
										<IconStatusStyled id="icon-validation-success" />
									))}
							</LabelStyled>
							<LabelStyled
								className={
									touched.password &&
									(errors.password ? 'error' : 'valid')
								}>
								<IconStyled id="icon-lock" />
								<InputForm
									type="password"
									name="password"
									placeholder="Password"
								/>
								{touched.password &&
									(errors.password ? (
										<>
											<ErrorMessage
												name="password"
												component={InputError}
											/>
											<IconStatusStyled id="icon-validation-error" />
										</>
									) : (
										<IconStatusStyled id="icon-validation-success" />
									))}
							</LabelStyled>
							<LabelStyled
								className={
									touched.passwordConfirm &&
									(errors.passwordConfirm ? 'error' : 'valid')
								}>
								<IconStyled id="icon-lock" />
								<InputForm
									type="password"
									name="passwordConfirm"
									placeholder="Password confirmation"
								/>
								{touched.passwordConfirm &&
									(errors.passwordConfirm ? (
										<>
											<ErrorMessage
												name="passwordConfirm"
												component={InputError}
											/>
											<IconStatusStyled id="icon-validation-error" />
										</>
									) : (
										<IconStatusStyled id="icon-validation-success" />
									))}
							</LabelStyled>
							<LabelStyled
								className={
									touched.email &&
									(errors.email ? 'error' : 'valid')
								}>
								<IconStyled id="icon-letter" />
								<InputForm
									type="email"
									name="email"
									placeholder="Email"
								/>
								{touched.email &&
									(errors.email ? (
										<>
											<ErrorMessage
												name="email"
												component={InputError}
											/>
											<IconStatusStyled id="icon-validation-error" />
										</>
									) : (
										<IconStatusStyled id="icon-validation-success" />
									))}
							</LabelStyled>
							<FormButton type="submit">Sign up</FormButton>
						</FormStyled>
					);
				}}
			</Formik>
			<NavLinkStyled to="/login">Login</NavLinkStyled>
		</DivStyled>
	);
};
