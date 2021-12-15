import { Component } from "react";
import Thumb from "../components/Thumb";
import { getAllLocations } from "../services/locationService";
import Header from "../components/Header";
import headerBackground from '../assets/images/background-homepage.png';

class Homepage extends Component {
	constructor(props) {
		super(props)
		this.state = { locations: []}
	}

	render() {
		getAllLocations().then(data => {this.setState({ locations: data })})

		return (
			<div className="homepage">
				<Header
					headerBackground = {headerBackground}
					alt = "Image d'illustration page Accueil"
					baseline = "Chez vous, partout et ailleurs"
				/>
				<main className="main-content">
					<div className="thumb-container">
						{this.state.locations.map((element) => (
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