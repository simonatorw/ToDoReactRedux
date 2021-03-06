import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import toDoReducer from './store/reducers/toDoReducer';
import appReducer from './store/reducers/appReducer';
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
