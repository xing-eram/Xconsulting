import React, { useState, useEffect } from 'react';
import VideoComponent from './VideoComponent';  // Asegúrate de que estos componentes existan y sean importables
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Image4 from './Image4';

const MediaBox = () => {
  const [currentMedia, setCurrentMedia] = useState(0);
  const mediaList = [<VideoComponent />, <Image1 />, <Image2 />, <Image3 />, <Image4 />];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % mediaList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, //[]
  );

  return (
    <div style={{backgroundColor: 'purple', color: 'white'}}>
      <h1>La verdad innovación en la experiencia</h1>
      {mediaList[currentMedia]}
    </div>
  );
};

export default MediaBox;
