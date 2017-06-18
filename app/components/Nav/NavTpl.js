import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.less';

export default function NavTpl({ setBgColor }) {
	return (
		<nav className="mainNav" onClick={ setBgColor }>
			<ul className="menu">
				<li><Link to="/" className="menuItem">Groceries</Link></li>
				<li><Link to="/purple" className="menuItem">Work</Link></li>
				<li><Link to="/white" className="menuItem">About</Link></li>
			</ul>
		</nav>
	);
}