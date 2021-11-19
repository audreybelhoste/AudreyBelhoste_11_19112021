import { useParams } from "react-router";
import { data } from "../data";

function Location() {
		const { id } = useParams();

		const currentLocation = data.filter((elt) => elt.id === id)[0];

		return (
			<div className="location">
				<div className="location__infos">
					<div>
						<h1 className="location__infos__title"> {currentLocation.title} </h1>
						<p className="location__infos__location"> {currentLocation.location} </p>
					</div>
					<div className="location__infos__host">
						<p>{currentLocation.host.name}</p>
						<div class="location__infos__host__img-container">
							<img src={currentLocation.host.picture} alt={currentLocation.host.name} />
						</div>
					</div>
				</div>
				<ul className="location__tags">
					{currentLocation.tags.map((element) => (
						<li className="location__tags__item">{element}</li>
					))}
				</ul>
			</div>
		)
}

export default Location