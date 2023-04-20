import React from 'react';
import ReactPlayer from 'react-player';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview">
      <div className="video-background">
        <ReactPlayer
          url="https://your-video-url-here"
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </div>
      <div className="video-overlay-text">
        <h1>Your Company Name</h1>
        <p>Your slogan or brief description</p>
      </div>
      <div className="more-info">
      </div>
    </div>
  );
};

export default Overview;
