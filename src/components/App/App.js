import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { syncUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const MainPage = lazy(() => import('pages/MainPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const RecipePage = lazy(() => import('pages/RecipePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));

const RestrictedRoute = lazy(() =>
	import('components/subRoutes/RestrictedRoute')
);
const PrivateRoute = lazy(() => import('components/subRoutes/PrivateRoute'));
const Layout = lazy(() => import('components/Layout'));


export const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(syncUser());
	}, [dispatch]);
	if (useAuth().isRefreshing)
		return (
			<ColorRing
				visible={true}
				ariaLabel="blocks-loading"
				wrapperClass="blocks-wrapper"
				colors={['#2a2c36', '#f47e60', '#f8b26a', '#8BAA36', '#EBF3D4']}
			/>
		);

	return (
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
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							<RestrictedRoute
								redirectTo="/main"
								component={<WelcomePage />}
							/>
						}
					/>
					<Route
						path="register"
						element={
							<RestrictedRoute
								redirectTo="/main"
								component={<RegisterPage />}
							/>
						}
					/>
					<Route
						path="login"
						element={
							<RestrictedRoute
								redirectTo="/main"
								component={<SigninPage />}
							/>
						}
					/>
					<Route
						path="main"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={<MainPage />}
							/>
						}
					/>
					<Route
						path="categories/:categoryName"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={<CategoriesPage />}
							/>
						}
					/>
					<Route
						path="add"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={<AddRecipePage />}
							/>
						}
					/>
					<Route
						path="favorite"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={<FavoritePage />}
							/>
						}
					/>
					<Route
						path="recipes/:recipeId"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={<RecipePage />}
							/>
						}
					/>
					<Route
						path="my"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={<MyRecipesPage />}
							/>
						}
					/>
					<Route
						path="search"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={<SearchPage />}
							/>
						}
					/>
					<Route
						path="shopping-list"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={<ShoppingListPage />}
							/>
						}
					/>
				</Route>
			</Routes>
		</Suspense>
	);
};
