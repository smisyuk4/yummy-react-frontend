import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import { DivStyled } from './Layout.styled';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useAuth } from 'hooks/useAuth';
import { ColorRing } from 'react-loader-spinner';

export const Layout = ({themeToggler}) => {
	const { isLoggedIn } = useAuth();
	if (!isLoggedIn)
		return (
			<DivStyled>
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
				<Suspense
					fallback={
						<ColorRing
							visible={true}
							ariaLabel="blocks-loading"
							wrapperClass="blocks-wrapper"
							colors={[
								'#2a2c36',
								'#f47e60',
								'#f8b26a',
								'#8BAA36',
								'#EBF3D4',
							]}
						/>
					}>
					<Outlet />
				</Suspense>
			</DivStyled>
		);
	return (
		<>
			<Header themeToggler={themeToggler} />
			<DivStyled>
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
				<Suspense
					fallback={
						<ColorRing
							visible={true}
							ariaLabel="blocks-loading"
							wrapperClass="blocks-wrapper"
							colors={[
								'#2a2c36',
								'#f47e60',
								'#f8b26a',
								'#8BAA36',
								'#EBF3D4',
							]}
						/>
					}>
					<Outlet />
				</Suspense>
			</DivStyled>
			<Footer />
		</>
	);
};
