import logo from '../assets/images/logo-light.svg';
import { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<footer className="main-footer">
				<img src={logo} className="app-logo" alt="logo" />
				<p>© 2021 Kasa. All rights reserved</p>
			</footer>
		);
	}
}

export default Footer;