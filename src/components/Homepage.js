import { Component } from "react";
import Thumb from "./Thumb";
import { getAllLocations } from "../services/locationService";

class Homepage extends Component {
	render() {
		return (
			<div className="homepage">
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