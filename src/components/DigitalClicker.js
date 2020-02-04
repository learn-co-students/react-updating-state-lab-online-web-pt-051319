import  React, {Component} from 'react';

export default class DigitalClicker extends Component {
	state = {
		timesClicked: 0
	}

	handleClick = () => {
		let clickedCount = this.state.timesClicked + 1
		this.setState({timesClicked: clickedCount})
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>{this.state.timesClicked}</button>
			</div>
		)
	}
}