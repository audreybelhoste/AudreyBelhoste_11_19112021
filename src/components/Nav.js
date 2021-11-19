
import logo from '../logo.svg';
import { Component } from "react";
import {
	Link
} from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<nav className="main-nav">
				<img src={logo} className="app-logo" alt="logo" />
				<ul className="main-nav__list">
					<li className="main-nav__list__item">
						<Link to="/">Accueil</Link>
					</li>
					<li className="main-nav__list__item">
						<Link to="/about">A propos</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;