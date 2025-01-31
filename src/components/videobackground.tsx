import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-100"
      >
        <source src="/12421439_3840_2160_30fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#051011] opacity-80" />
    </div>
  );
};

export default VideoBackground;