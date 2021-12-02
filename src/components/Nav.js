
import logo from '../assets/images/logo.svg';
import { Component } from "react";
import {
	Link,
	NavLink
} from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<nav className="main-nav">
				<Link to="/"><img src={logo} className="app-logo" alt="logo" /></Link>
				<ul className="main-nav__list">
					<li className="main-nav__list__item">
						<NavLink activeClassName='is-active' exact to="/">Accueil</NavLink>
					</li>
					<li className="main-nav__list__item">
						<NavLink activeClassName='is-active' to="/about">A propos</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;