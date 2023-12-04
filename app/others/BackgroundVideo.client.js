// components/BackgroundVideo.client.js
import React from 'react';

const BackgroundVideoClient = ({ src }) => {
    return (
        <div className="video-background">
            <video autoPlay loop muted playsInline>
                <source src={src} type="video/mp4" />
            </video>
            <style jsx>{`
        .video-background {
          position: fixed;
          right: 0;
          bottom: 0;
          min-width: 100%;
          min-height: 100%;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
        </div>
    );
};

export default BackgroundVideoClient;
