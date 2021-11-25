import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

class Rating extends React.Component {
	render() {
		const { rating } = this.props
		const range = [1, 2, 3, 4, 5]

		return (
			<div className="rating">
				{range.map((range) =>
					rating >= range ? (
						<FontAwesomeIcon icon={faStar} className="full" />
					) : (
						<FontAwesomeIcon icon={faStar} className="empty" />
					)
				)}
			</div>
		)
	}
}

export default Rating