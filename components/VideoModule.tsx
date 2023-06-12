'use client';

import React, { useEffect } from 'react';

interface VideoModuleProps {
  title: string;
  src: string;
}

const VideoModule: React.FC<VideoModuleProps> = (props) => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1 className="text-xl md:text-3xl mb-4 font-sans font-ultralight">
        {props.title}
      </h1>
      {isMobile ? (
        <iframe
          className="flex shadow-lg rounded-lg"
          width="300"
          height="150"
          title={props.title}
          src={'https://youtube.com/embed/' + props.src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <iframe
          className="flex shadow-lg rounded-lg"
          width="1000"
          height="360"
          title={props.title}
          src={'https://youtube.com/embed/' + props.src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoModule;
