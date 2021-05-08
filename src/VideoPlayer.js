import React from 'react';
import video from './assets/videoplayback.mp4'

export class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    playVideo = ()=>{
        this.videoRef.current.play();
    }

    pauseVideo = ()=>{
        this.videoRef.current.pause();
    }

    render() {
        
        return (
            <div>
            <video ref={this.videoRef} width="300" height="500" controls>
            <source src={video} type="video/mp4"></source>
            </video>
            <div>
                <button onClick={this.playVideo}>Play</button>
                <button onClick={this.pauseVideo}>Pause</button>
            </div>
            </div>

        );
    }
}