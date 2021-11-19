import React from 'react'
import {
	Link
} from "react-router-dom";

class Thumb extends React.Component {
	render() {
		const { title, cover, id } = this.props

		return (
			<div className="thumb">
					<Link to={`/location/${id}`}>
						<p>{title}</p>
						<img src={cover} alt={title} />
					</Link>
			</div>
		)
	}
}

export default Thumb