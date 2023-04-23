import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import { DivStyled } from './Layout.styled';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useAuth } from 'hooks/useAuth';

export const Layout = () => {
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
				<Suspense fallback={null}>
					<Outlet />
				</Suspense>
			</DivStyled>
		);
	return (
		<DivStyled>
			<Header />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
			<Footer />
		</DivStyled>
	);
};
