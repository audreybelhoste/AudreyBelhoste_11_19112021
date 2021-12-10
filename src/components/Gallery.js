import { Component } from "react";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Gallery extends Component {
	constructor(props) {
		super(props)
		this.state = { i : 0}
	}

	previousImage() {
		let currentIndex = this.state.i
		if (currentIndex === 0)
			this.setState({ i: this.props.images.length - 1 })
		else this.setState({ i: --currentIndex })
	}

	nextImage() {
		let currentIndex = this.state.i
		if (currentIndex === this.props.images.length - 1) {
			this.setState({ i: 0 })
		} else {
			this.setState({ i: ++currentIndex })
		}
	}

	render() {
		const { i } = this.state
		const { images } = this.props;

		return (
			<div className="gallery">
				<div className="gallery__img-container">
					<img src={this.props.images[i]} alt=""/>
				</div>

				{images.length > 1 && (
          <>
						<FontAwesomeIcon 
							icon={faChevronLeft}
							onClick={() => this.previousImage()}
						/>
						<FontAwesomeIcon 
							icon={faChevronRight}
							onClick={() => this.nextImage()}
						/>
					</>
					)}
			</div>
		);
	}
}

export default Gallery;