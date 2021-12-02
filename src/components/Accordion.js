import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

class Accordion extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isOpen: false }
	}

	render() {
		const { title, content } = this.props

		let className = "accordion__content";
		if (this.state.isOpen) {
			className += " accordion__content-open"
		} else {
			className += " accordion__content-close"
		}

		return (
			<div className="accordion">
				<div className="accordion__item">
					<div className="accordion__title" onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
						<p>{title}</p>
						<FontAwesomeIcon icon={this.state.isOpen ? faAngleUp : faAngleDown} />
					</div>
					<div className={className}>
						{Array.isArray(content) ? (
							<ul>
								{content.map((element, index) => (
									<li key={index}>{element}</li>
								))}
							</ul>
						) : ( 
							<p>{content}</p>
						)}
					</div>
				</div>
				
			</div>
		)
	}
}

export default Accordion