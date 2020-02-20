import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor() {
    super();

    //define the initial state
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState(prev => ({
      timesClicked: prev.timesClicked + 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Times Clicked: {this.state.timesClicked}</h2>
        <button onClick={this.handleClick}>
          {this.state.timesClicked} Click Me!
        </button>
      </div>
    );
  }
}
