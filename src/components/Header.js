import React from 'react'

class Header extends React.Component {
	render() {
		const { headerBackground, alt, baseline } = this.props

		return (
			<header className="main-header">
				<img src={headerBackground} alt={alt} />
				<p className="main-header__baseline">{baseline}</p>
			</header>
		)
	}
}

export default Header