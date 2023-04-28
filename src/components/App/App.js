import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { lazy, Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
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

const LightTheme = {
	colors: {
		primary: '#8BAA36',
		primarySoft: '#EBF3D4',
		footerBG: '#22252A',
		bgModal: '#FAFAFA',
		fontColor: '#fafafa',
		fontColorDark: '#3e4462',
		fontColorPassive: '#E0E0E0',
		titleColor: '#001833',
		fontColorNavigation: '#23262a',
		fontHero: '#22252A',
		followUsColor: '#8BAA36',
		followUsColorHover: '#FFFFFF',
		followUsBG: 'transparent',
		followUsBGHover: '#8BAA36',
		buttonLightBG: '#fafafa',
		buttonDarkBG: '#22252A',
		buttonPrimaryBG: '#8BAA36',
		textButtonPrimaryHover: '#22252A',
		recipeListBackground: '#EBF3D4',
		recipeHero: '#22252A',
		recipeColor: '#3E4462',
		darkBG: '#2a2c36',
		lightBG: '#FAFAFA',
		BGCintoButton: 'FFFFF',
		borderColorLight: '#f0f0f0',
		textSecondary: '#7E7E7E',
		addRecipeFormPlaceholder: 'rgba(0, 0, 0, 0.5)',
		addRecipeFormFieldsBackground: '#d9d9d9',
		addRecipeFormFieldsTextColor: '#23262a',
		addRecipeFormFieldsDropdownBackground: '#ffffff',
		addRecipeFormFieldsDropdownButtonIcon: '#8BAA36',
		addRecipeFormFieldsDropdownListPosition: 'rgba(0, 0, 0, 0.5)',
		addRecipeFormFieldsDropdownListHover: '#8BAA36',
		addRecipeFormFieldsDeleteButton: '#333333',
		addRecipeFormCounterButtons: 'rgba(51, 51, 51, 0.3)',
		addRecipeFormCounterButtonsHover: '#8baa36',
	},
	media: {
		tablet: '(min-width: 768px)',
		desktop: '(min-width: 1440px)',
	},
};
const DarkTheme = {
	colors: {
		primary: '#8BAA36',
		primarySoft: '#EBF3D4',
		footerBG: '#8BAA36',
		bgModal: '#2A2C36',
		fontColor: '#fafafa',
		fontColorDark: '#3e4462',
		fontColorPassive: '#E0E0E0',
		titleColor: '#FAFAFA',
		fontColorNavigation: '#FAFAFA',
		fontHero: '#FAFAFA',
		followUsColor: '#FFFFFF',
		followUsColorHover: '#1E1F28',
		followUsBG: '#8BAA36',
		foffowUsBGHover: 'transparent',
		buttonLightBG: '#fafafa',
		buttonDarkBG: '#8BAA36',
		buttonPrimaryBG: '#1E1F28',
		textButtonPrimaryHover: '#8BAA36',
		recipeListBackground: '#2A2C36', 
		recipeColor: '#FAFAFA',
		darkBG: '#2a2c36',
		lightBG: '#1E1F28',
		BGCintoButton: 'FFFFF',
		borderColorLight: '#f0f0f0',
		textSecondary: 'rgba(250, 250, 250, 0.6)',
		addRecipeFormPlaceholder: 'rgba(0, 0, 0, 0.5)',
		addRecipeFormFieldsBackground: 'transparent',
		addRecipeFormFieldsTextColor: '#23262a',
		addRecipeFormFieldsDropdownBackground: '#ffffff',
		addRecipeFormFieldsDropdownButtonIcon: '#8BAA36',
		addRecipeFormFieldsDropdownListPosition: 'rgba(0, 0, 0, 0.5)',
		addRecipeFormFieldsDropdownListHover: '#8BAA36',
		addRecipeFormFieldsDeleteButton: '#333333',
		addRecipeFormCounterButtons: 'rgba(51, 51, 51, 0.3)',
		addRecipeFormCounterButtonsHover: '#8baa36',
	},
	media: {
		tablet: '(min-width: 768px)',
		desktop: '(min-width: 1440px)',
	},
};

export const App = () => {
	const [currentTheme, setCurrentTheme] = useState('LightTheme');
	const themeToggler = () => {
		if (currentTheme === 'LightTheme') {
			setCurrentTheme('DarkTheme');
			localStorage.setItem('theme', 'DarkTheme');
			document.body.style.backgroundColor = '#1E1F28';
		} else {
			setCurrentTheme('LightTheme');
			localStorage.setItem('theme', 'LightTheme');
			document.body.style.backgroundColor = '#FAFAFA';
		}
	};
	const dispatch = useDispatch();

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			if (savedTheme !== currentTheme) {
				themeToggler();
			}
		} else {
			localStorage.setItem('theme', 'LightTheme');
		}
	}, []);
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
		<ThemeProvider
			theme={currentTheme === 'LightTheme' ? LightTheme : DarkTheme}>
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
					<Route
						path="/"
						element={<Layout themeToggler={themeToggler} />}>
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
							path="search/:query"
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
		</ThemeProvider>
	);
};
