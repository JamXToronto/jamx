// VideoComponent.js
import React from 'react';
import styled from 'styled-components';

// Define the video container with styled-components
const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px; /* Adjust the maximum width as needed */
  margin: 0 auto;
  height: 100vh;
  display: flex;
`;

// Define the video element with styled-components
const VideoElement = styled.video`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  // height: auto;
  border-radius: 8px; /* Add border radius for rounded corners */
`;

// Video component
const VideoComponent = ({ videoSrc }) => {
  return (
    <VideoContainer>
      <VideoElement controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoElement>
    </VideoContainer>
  );
};

export default VideoComponent;