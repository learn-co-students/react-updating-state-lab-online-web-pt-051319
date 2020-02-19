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
      const newCount = this.state.count + 1
      this.setState({
          timesClicked: newCount
      })
  }

  render() {
      return(
          <div>
          <button onClick={this.handleClick}>
              {this.state.count} Click Me!
          </button>
          </div>
      )
  }
}
