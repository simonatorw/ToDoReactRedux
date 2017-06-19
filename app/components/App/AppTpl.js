import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ToDo from '../../components/ToDo/ToDoContainer';
import About from '../../components/About/AboutTpl';
import Nav from '../../components/Nav/NavContainer';
import Oops from '../../components/App/Oops';
import './App.less';

export default function AppTpl(props) {
	return (
		<div className="appContainer">
			<Nav />
			<Switch>
				<Route exact path="/" component={ToDo}/>
				<Route path="/purple" component={ToDo}/>
				<Route path="/white" component={About}/>
				<Route path="*" component={Oops}/>
			</Switch>
		</div>
	);
}