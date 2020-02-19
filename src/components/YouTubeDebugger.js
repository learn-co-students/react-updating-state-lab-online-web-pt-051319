// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor() {
    super();

    //Define the initial state
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  //goes after constructor closure
  //updates bitrate
  changeBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  //updates resolution
  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>
          Update bitrate
        </button>

        <button className="resolution" onClick={this.changeResolution}>
          Update resolution
        </button>
      </div>
    );
  }
}
