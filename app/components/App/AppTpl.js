import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ToDo from '../../components/ToDo/ToDoContainer';
import About from '../../components/About/AboutTpl';
import Nav from '../../components/Nav/NavContainer';
import './App.less';

export default function AppTpl(props) {
	return (
		<div className="appContainer">
			<Nav />
			<Switch>
				<Route exact path="/" component={ToDo}/>
				<Route path="/orange" component={ToDo}/>
				<Route path="/white" component={About}/>
			</Switch>
		</div>
	);
}