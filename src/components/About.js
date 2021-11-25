import { Component } from "react";
import { getAboutInformations } from "../services/aboutService";
import Accordion from "./Accordion";

class About extends Component {
	render() {
		return (
			<div className="about">
				<div className="about__accordions__container">
					{getAboutInformations().map((element, key) => (
							<Accordion
								title={element.title}
								content={element.content}
							/>
					))}
				</div>
			</div>
		)
	}
}

export default About