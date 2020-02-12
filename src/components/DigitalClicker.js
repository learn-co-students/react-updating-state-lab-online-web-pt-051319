// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.state = {
            timesClicked: 0
        };
    }

    handleClick = () => {
        // Update our state here...
        this.setState({
            timesClicked: this.state.timesClicked + 1
        }

        )
    };

    render() {
        return (
            <div>
                <button label={this.state.timesClicked} onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        );
    }
}

