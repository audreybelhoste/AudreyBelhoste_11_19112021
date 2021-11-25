import React from 'react'

class Tag extends React.Component {
	render() {
		const { element, key } = this.props

		return (
			<li key={key} className="tags__item">{element}</li>
		)
	}
}

export default Tag