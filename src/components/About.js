import { Component } from "react";
import { getAboutInformations } from "../services/aboutService";
import Accordion from "./Accordion";
import Header from "./Header";
import headerBackground from '../assets/images/background-about.png';

class About extends Component {
	render() {
		return (
			<div className="about">
				<Header
					headerBackground = {headerBackground}
					alt = "Image d'illustration page A propos"
					baseline = ""
				/>
				<div className="about__accordions__container">
					{getAboutInformations().map((element, key) => (
							<Accordion
								title={element.title}
								content={element.content}
								key={key}
							/>
					))}
				</div>
			</div>
		)
	}
}

export default About