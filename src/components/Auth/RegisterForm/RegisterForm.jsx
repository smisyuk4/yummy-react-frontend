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

const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9]+)$/;
const nameRegex = /^[a-zA-Zа-яА-ЯґҐєЄїЇіІ0-9]{6,}$/;
const emailRegex = /^[\w\.]+@([\w]+\.)+[\w]{1,4}$/;

const RegisterSchema = Yup.object().shape({
	name: Yup.string()
		.matches(
			nameRegex,
			'Name may contain letters and numbers. For example Jacob Mercer.'
		)
		.min(1)
		.max(16)
		.required(),
	password: Yup.string()
		.matches(
			passwordRegex,
			'Password must contain upper and lower case letters, numbers and minimum 6 characters.'
		)
		.min(6)
		.max(16)
		.required(),
	passwordConfirm: Yup.string()
		.matches(
			passwordRegex,
			'Password must contain upper and lower case letters, numbers and minimum 6 characters.'
		)
		.min(6)
		.max(16)
		.required(),
	email: Yup.string()
		.min(6)
		.max(64)
		.matches(
			emailRegex,
			'Email may only latin letters, numbers and _ @ . symbols.'
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
