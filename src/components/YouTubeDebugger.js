
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    editBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })

    }

    editResolution = () => {
        this.setState({
            settings: {
                bitrate: 8,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })

    }

    render() {
        return (
            <div>
                <button className={"bitrate"} onClick={this.editBitrate}></button>
                <button className={"resolution"} onClick={this.editResolution}></button>
            </div>
        )
    }

}
