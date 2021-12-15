
import { Component } from "react";
import { Link } from "react-router-dom";

class E404 extends Component {
	render() {
		return (
			<div className="error404">
				<p className="error404__title">404</p>
				<p className="error404__content">Oups! La page que vous demandez n'existe pas.</p>
				<Link to="/">Retourner sur la page d'accueil</Link>
			</div>
		);
	}
}

export default E404;