import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from 'components/subRoutes/RestrictedRoute';
import { PrivateRoute } from 'components/subRoutes/PrivateRoute';
import { Layout } from 'components/Layout';
import { WelcomePage } from 'pages/WelcomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { SigninPage } from 'pages/SigninPage';
import { MainPage } from 'pages/MainPage';
import { CategoriesPage } from 'pages/CategoriesPage';
import { FavoritePage } from 'pages/FavoritePage';
import { RecipePage } from 'pages/RecipePage';
import { MyRecipesPage } from 'pages/MyRecipesPage';
import { SearchPage } from 'pages/SearchPage';
import { ShoppingListPage } from 'pages/ShoppingListPage';
import { AddRecipePage } from 'pages/AddRecipePage';

export const App = () => {
	return (
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
					path="recipe/:recipeId"
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
	);
};
