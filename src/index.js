import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from 'components/App/App';
import { ScrollUp } from 'components/ScrollUp';
import './index.css';


const baseUrl =
	window.location.host === 'localhost:3000'
		? `/yummy-react-frontend`
		: '/yummy-react-frontend';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
					<BrowserRouter basename={baseUrl}>
						<ScrollUp />
						<App />
					</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
