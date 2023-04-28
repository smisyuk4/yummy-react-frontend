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
		bgBurger: 'rgb(235,243,212)',
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
		buttonLightBGHover: '#22252A',
		buttonDarkBG: '#22252A',
		buttonPrimaryBG: '#8BAA36',
		textButtonPrimaryHover: '#22252A',

		btnLogOutBg: '#8BAA36',
		btnLogOutText: '#FAFAFA',
		btnLogOutHoverBG: '#22252A',
		btnCancelBg: '#D9D9D9',
		btnCancelText: '#23262A',
		btnCancelHoverBG: '#ECECEC',

		recipeListBackground: '#EBF3D4',
		recipeHero: '#22252A',
		recipeColor: '#3E4462',

		placeHolderInput: '#23262A',
		bgTitleCard: '#FFFFFF',
		bgMoreBtn: '#8BAA36',
		bgMoreBtnHover: '#1E1F28',
		bgBtnTransparent: 'transparent',
		fontColorBtnDark: '#22252A',
		fontColorBtnDarkHover: '#FAFAFA',
		followUsAddPacipesHover: '#22252A',
		colorTextTeam: '#22252A',

		darkBG: '#2a2c36',
		lightBG: '#FAFAFA',
		BGCintoButton: 'FFFFF',
		borderColorLight: '#f0f0f0',
		textSecondary: '#7E7E7E',
		addRecipeFormPlaceholder: 'rgba(0, 0, 0, 0.5)',
		addRecipeFormFieldsBackground: '#d9d9d9',
		addRecipeFormFieldsBorder: 'none',
		colorInput: '#000000',
		placeHolderColor: '#000000',
		borderColor: '#23262A',
		bgColorListSelectIngredient: '#FAFAFA',

		addRecipeFormFieldsTextColor: '#23262a',
		addRecipeFormFieldsDropdownBackground: '#ffffff',
		addRecipeFormFieldsDropdownButtonIcon: '#8BAA36',
		addRecipeDropDownBg: '#FFFFFF',

		addRecipeFormFieldsDropdownListPosition: 'rgba(0, 0, 0, 0.5)',
		addRecipeFormFieldsDropdownListHover: '#8BAA36',
		addRecipeFormFieldsDeleteButton: '#333333',
		addRecipeFormCounterButtons: 'rgba(51, 51, 51, 0.3)',
		colorCounter: '#333333',
		textShadow: 'none',

		addRecipeFormCounterButtonsHover: '#8baa36',
		searchFormBGbyTitle: '#3e4462',

		bgFavoriteItem: '#FFFFFF',
		colorFavoriteTitle: '#3E4462',
		textFavoriteRecipe: '#23262A',

		textNoResultsColor: '#000000',

		recipeItemBackgroundColor: '#ffffff',
		recipeTextColor: '#23262a',
		deleteIconStroke: '#fafafa',
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
		bgBurger: '#2A2C36',
		fontColor: '#fafafa',
		fontColorDark: '#fafafa',
		fontColorPassive: '#E0E0E0',
		titleColor: '#FAFAFA',
		fontColorNavigation: '#FAFAFA',
		fontHero: '#FAFAFA',
		followUsColor: '#FFFFFF',
		followUsColorHover: '#1E1F28',
		followUsBG: '#8BAA36',
		foffowUsBGHover: 'transparent',
		buttonLightBG: '#fafafa',
		buttonLightBGHover: '#22252A',
		buttonDarkBG: '#8BAA36',
		buttonPrimaryBG: '#1E1F28',
		textButtonPrimaryHover: '#8BAA36',

		btnLogOutBg: '#8BAA36',
		btnLogOutText: '#FAFAFA',
		btnLogOutHoverBG: '#22252A',
		btnCancelBg: '#D9D9D9',
		btnCancelText: '#23262A',
		btnCancelHoverBG: '#ECECEC',

		recipeListBackground: '#2A2C36',
		recipeColor: '#FAFAFA',

		placeHolderInput: '#FAFAFA',
		bgTitleCard: '#2A2C36',
		bgMoreBtn: '#8BAA36',
		bgMoreBtnHover: '#8BAA36',
		bgBtnTransparent: 'transparent',
		fontColorBtnDark: '#FAFAFA',
		fontColorBtnDarkHover: '#FAFAFA',
		followUsAddPacipesHover: '#8BAA36',
		colorTextTeam: '#FAFAFA',

		darkBG: '#2a2c36',
		lightBG: '#1E1F28',
		BGCintoButton: 'FFFFF',
		borderColorLight: '#f0f0f0',
		textSecondary: 'rgba(250, 250, 250, 0.6)',
		addRecipeFormPlaceholder: 'rgba(0, 0, 0, 0.5)',
		addRecipeFormFieldsBackground: 'transparent',
		addRecipeFormFieldsBorder: '1px solid rgba(250, 250, 250, 0.2)',
		colorInput: '#ffffff',
		placeHolderColor: '#FAFAFA',
		borderColor: '#FAFAFA',
		bgColorListSelectIngredient: '#8BAA36',

		addRecipeFormFieldsTextColor: '#23262a',
		addRecipeFormFieldsDropdownBackground: '#ffffff',
		addRecipeFormFieldsDropdownButtonIcon: '#ffffff',
		addRecipeDropDownBg: '#8BAA36',

		addRecipeFormFieldsDropdownListPosition: 'rgba(0, 0, 0, 0.5)',
		addRecipeFormFieldsDropdownListHover: '#8BAA36',
		addRecipeFormFieldsDeleteButton: '#333333',
		addRecipeFormCounterButtons: '#FAFAFA',
		colorCounter: '#FAFAFA',
		textShadow: '1px -1px 2px rgba(0, 0, 0, 1),1px 2px 1px rgba(87, 43, 65, 1),2px -1px 5px rgba(120, 50, 6, 0.6)',

		addRecipeFormCounterButtonsHover: '#8baa36',
		searchFormBGbyTitle: '#8BAA36',

		bgFavoriteItem: '#2A2C36',
		colorFavoriteTitle: '#FAFAFA',
		textFavoriteRecipe: '#FAFAFA',

		textNoResultsColor: '#FAFAFA',

		recipeItemBackgroundColor: '#2A2C36',
		recipeTextColor: 'rgba(250, 250, 250, 0.6)',
		deleteIconStroke: '#ffffff',
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
			console.log('theme');
			setCurrentTheme('DarkTheme');
			localStorage.setItem('theme', 'DarkTheme');
			document.body.style.backgroundColor = '#1E1F28';
		} else {
			setCurrentTheme('LightTheme');
			console.log('theme');
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
	});
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
