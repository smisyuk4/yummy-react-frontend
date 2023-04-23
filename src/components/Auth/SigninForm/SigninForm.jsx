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
} from 'components/Auth/AuthForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormButton } from 'components/ButtonNav/ButtonNav.styled';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';

const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9]+)$/;
const emailRegex = /^[\w]+@([\w]+\.)+[\w]{1,4}$/;

const SigninSchema = Yup.object().shape({
	password: Yup.string()
		.matches(
			passwordRegex,
			'The password must include numbers and letters - the minimum number of characters in the field - 6 (inclusive), the maximum - 16 (inclusive)'
		)
		.min(3)
		.max(64)
		.required(),
	email: Yup.string()
		.matches(
			emailRegex,
			'The local part of the mail can contain capital and small Latin letters (A-Z, a-z), numbers (from 0 to 9), but no more than 64 characters'
		)
		.email()
		.required(),
});

export const SigninForm = () => {
	const dispatch = useDispatch();
	const sendSignin = ({ password, email }, { resetForm }) => {
		dispatch(loginUser({ password, email }));
		resetForm();
	};
	return (
		<DivStyled>
			<Formik
				initialValues={{ name: '', password: '', email: '' }}
				onSubmit={sendSignin}
				validationSchema={SigninSchema}>
				{formik => {
					const { errors, touched } = formik;
					return (
						<FormStyled autoComplete="off">
							<H1Styled>Sign In</H1Styled>

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
							<FormButton type="submit">Sign In</FormButton>
						</FormStyled>
					);
				}}
			</Formik>
			<NavLinkStyled to="/register">Registration</NavLinkStyled>
		</DivStyled>
	);
};
