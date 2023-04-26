import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { fetchUpdateSubscribe } from './subscriptionFetch';
import { FormStyled, LabelStyled, InputForm, InputError, IconStyled, IconStatusStyled,  BtnSybscribe, ErrorSpan} from './SubscriptionForm.styled';
import { DiscrSubscribeForm } from '../DiscrSubscribeForm';

const SubscribeSchema = Yup.object().shape({
	email: Yup.string()
		.min(6)
		.max(64)
		.email()
		.required(),
});
const toastParam = {
	position: 'top-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'colored',
};

export const SubscriptionForm = () => {
	
		const sendSubscription = async ({ email }, { resetForm }) => {	
			const data = await fetchUpdateSubscribe({email})
			if (data.status === 200) {
				toast.success(`You are subscribed successful`, toastParam);
			} else {
				toast.error('Something went wrong, try again later', toastParam)
			}
			resetForm();
		}


  return (<div>
  <DiscrSubscribeForm />
  <Formik
		initialValues={{
		email: '',
		}}
		onSubmit={sendSubscription}
		validationSchema={SubscribeSchema}>
		{formik => {
			const { errors, touched } = formik;
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
					<BtnSybscribe type="submit" disabled={!(formik.dirty && formik.isValid)} >Subcribe</BtnSybscribe>
				</FormStyled>
				)
				}}
	</Formik>
  </div>
  )
};