import { FormStyled, LabelStyled, InputForm, InputError, IconStyled, IconStatusStyled } from './SubscriptionForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { BtnSybscribe, ErrorSpan } from './SubscriptionForm.styled';
import { DiscrSubscribeForm } from '../DiscrSubscribeForm';


const emailRegex = /^[\w]+@([\w]+\.)+[\w]{1,4}$/;

const SubscribeSchema = Yup.object().shape({
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


export const SubscriptionForm = () => {
  const sendSubscription = ({ email }, { resetForm }) => {	
		resetForm();
	};

  return (<div>
  <DiscrSubscribeForm />
  <Formik
		initialValues={{
		email: '',
		}}
		onSubmit={sendSubscription}
		validationSchema={SubscribeSchema}>
		{formik => {
			const { errors, touched, values } = formik;

			return (
				<FormStyled autoComplete="on">
					<LabelStyled
						className={
						touched.email &&
						(errors.email ? 'error' : 'valid')
					}>
						<IconStyled id="icon-letter" />
						<InputForm
							type="email"
							name="email"
							placeholder="Enter your email address"
						/>
						{touched.email &&
						(errors.email ? (
						<>
						<ErrorSpan
							name="email"
							component={InputError}
						/>
						<IconStatusStyled id="icon-validation-error" />
								</>
							) : (
						<IconStatusStyled id="icon-validation-success" />
								))}
					</LabelStyled>
					<BtnSybscribe type="submit">Subcribe</BtnSybscribe>
				</FormStyled>
				)
				}}
	</Formik>

  </div>
    
  )

};