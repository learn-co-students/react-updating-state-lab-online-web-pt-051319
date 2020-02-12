// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super();

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        };
    }

    handleClickBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }
        )
    };

    handleClickRes = () => {
        // Update our state here...
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }

        }

        )
    };

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleClickBitrate}> bitrate </button>
                <button className='resolution' onClick={this.handleClickRes}> resolution </button>
            </div>
        );
    }
}

