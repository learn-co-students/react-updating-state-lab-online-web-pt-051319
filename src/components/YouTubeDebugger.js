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

    changeSettings = () => {
        this.setState({
            settings: Object.assign({},
                this.state.settings, {
                    bitrate: 12
                })
        });

    }

    changeRes = () => {
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
            return (
                <div><button className="bitrate" onClick={this.changeSettings}>Bitrate</button>
            
            <button className ="resolution" onClick={this.changeRes}>Resolution</button></div>
            )

        
        }
}
