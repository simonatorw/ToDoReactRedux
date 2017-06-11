import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import toDoReducer from './reducers/toDoReducer.js';
import ToDo from './components/ToDo/ToDoContainer';

const store = createStore(toDoReducer);

render(
	<Provider store={store}>
		<div className="container">
			<ToDo />
		</div>
	</Provider>,
	document.getElementById('app')
);
