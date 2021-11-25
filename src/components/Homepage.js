import { Component } from "react";
import Thumb from "./Thumb";
import { getAllLocations } from "../services/locationService";
import Header from "./Header";
import headerBackground from '../assets/images/background-homepage.png';

class Homepage extends Component {
	render() {
		return (
			<div className="homepage">
				<Header
					headerBackground = {headerBackground}
					alt = "Image d'illustration page Accueil"
					baseline = "Chez vous, partout et ailleurs"
				/>
				<main className="main-content">
					<div className="thumb-container">
						{getAllLocations().map((element) => (
							<Thumb
								key={element.id}
								title={element.title}
								cover={element.cover}
								id={element.id}
							/>
						))}
					</div>
				</main>
			</div>
		)
	}
}

export default Homepage