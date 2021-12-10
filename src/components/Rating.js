import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

class Rating extends React.Component {
	render() {
		const { rating, limit } = this.props
		const range = [...Array(limit).keys()]
		return (
			<div className="rating">
				{range.map((range) =>
					rating > range ? (
						<FontAwesomeIcon icon={faStar} className="full" key={range} />
					) : (
						<FontAwesomeIcon icon={faStar} className="empty" key={range} />
					)
				)}
			</div>
		)
	}
}

export default Rating