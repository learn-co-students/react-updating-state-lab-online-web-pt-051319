// Code DigitalClicker Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
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

    increaseBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
    }

    decreaseResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.increaseBitrate}>Change Bitrate to 12</button>
            
                <button className="resolution"  onClick={this.decreaseResolution}>Change Resolution to 720p</button>
            </div>
        )
    }
}

export default YouTubeDebugger