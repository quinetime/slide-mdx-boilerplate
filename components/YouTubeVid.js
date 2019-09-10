import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

class YouTubeVid extends React.Component {
  render() {

    const opts = {
      height: '720',
      width: '1280',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        controls: this.props.controls ? 1 : 0,
        cc_load_policy: this.props.noCC ? 0 : 1,
      }
    };

    const VideoShadow = styled.div`
		border: 12px solid #ffd233;
    background-color: #ffd233;
		padding: 12px;
		height: 720px;
		width: 1280px;
    `;
 
    return (
    	<VideoShadow>
	      <YouTube
	        videoId={this.props.id}
	        opts={opts}
	        onReady={this._onReady}
	      />
      	</VideoShadow>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubeVid;