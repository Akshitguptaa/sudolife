import React from 'react';
import './video-bg.styles.scss';
import videoSource from '../../../assets/bg.mp4';

const VideoBackground = () => {
  return (
    <video id="video-background" loop muted autoPlay>
      <source src={videoSource} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;