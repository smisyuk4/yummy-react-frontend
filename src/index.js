import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from 'components/App/App';
import './index.css';

const LightTheme = {
	colors: {
		primary: 'tomato',
		fontColor: '#fafafa',
		buttonLightBG: '#fafafa',
		buttonDarkBG: '#22252A',
		buttonPrimaryBG: '#8BAA36',
		darkBG: '#2a2c36',
	},
};

const baseUrl =
	window.location.host === 'localhost:3000'
		? `/yummy-react-frontend`
		: '/yummy-react-frontend';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={LightTheme}>
					<BrowserRouter basename={baseUrl}>
						<App />
					</BrowserRouter>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
