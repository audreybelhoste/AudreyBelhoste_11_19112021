import { Component } from "react";
import { Redirect, withRouter } from "react-router"
import { getLocationById } from "../services/locationService"
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Accordion from "../components/Accordion";
import Gallery from "../components/Gallery";

class Location extends Component {
	constructor(props) {
		super(props)
		this.state = { currentLocation: {}}
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		getLocationById(id).then(element => {this.setState({ currentLocation: element})})
	}

	render() {
		const {currentLocation} = this.state;

		if (currentLocation == null) return <Redirect to="/404" />;
		return (
			<div className="location">
				<Gallery 
					images={currentLocation.pictures || []}
				/>
				<div className="location__infos">
					<div>
						<h1 className="location__infos__title"> {currentLocation.title} </h1>
						<p className="location__infos__location"> {currentLocation.location} </p>
						<ul className="tags">
							{(currentLocation.tags || []).map((element, key) => (
								<Tag 
									element={element}
									key={key}
								/>
							))}
						</ul>
					</div>
					<div className="location__infos__bloc2">
						<div className="location__infos__host">
							<p>{currentLocation.host?.name}</p>
							<div className="location__infos__host__img-container">
								<img src={currentLocation.host?.picture} alt={currentLocation.host?.name} />
							</div>
						</div>
						<Rating 
							rating={currentLocation.rating}
							limit={5}
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