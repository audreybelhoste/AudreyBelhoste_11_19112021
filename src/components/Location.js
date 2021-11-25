import { Component } from "react";
import { withRouter } from "react-router"
import { getLocationById } from "../services/locationService"
import Tag from "./Tag";
import Rating from "./Rating";
import Accordion from "./Accordion";

class Location extends Component {
	render() {
		const id = this.props.match.params.id;

		const currentLocation = getLocationById(id);

		return (
			<div className="location">
				<div className="location__infos">
					<div>
						<h1 className="location__infos__title"> {currentLocation.title} </h1>
						<p className="location__infos__location"> {currentLocation.location} </p>
						<ul className="tags">
							{currentLocation.tags.map((element, key) => (
								<Tag 
									element={element}
									key={key}
								/>
							))}
						</ul>
					</div>
					<div className="location__infos__bloc2">
						<div className="location__infos__host">
							<p>{currentLocation.host.name}</p>
							<div className="location__infos__host__img-container">
								<img src={currentLocation.host.picture} alt={currentLocation.host.name} />
							</div>
						</div>
						<Rating 
							rating={currentLocation.rating}
						/>
					</div>
				</div>

				<div className="location__accordions__container">
					<Accordion 
						title='Description'
						content={currentLocation.description}
					/>
					<Accordion
						title='Equipements'
						content={currentLocation.equipments}
					/>
				</div>
			</div>
		)
	}
}

export default withRouter(Location)