import React from 'react'

class Tag extends React.Component {
	render() {
		const { element } = this.props

		return (
			<li className="tags__item">{element}</li>
		)
	}
}

export default Tag