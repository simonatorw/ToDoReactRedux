import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import toDoReducer from './reducers/toDoReducer.js';
import appReducer from './reducers/appReducer.js';
import App from './components/App/AppTpl';

const reducers = combineReducers({
	toDoReducer,
	appReducer
});
const store = createStore(reducers);

render(
	<Provider store={store}>
		<div className="container">
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</div>
	</Provider>,
	document.getElementById('app')
);
