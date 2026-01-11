import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import hero from '../assets/hero.mp4'

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div 
    id='home'
      className="relative h-80 md:min-h-screen overflow-hidden"
      style={{
        backgroundColor: 'hsl(var(--color-bg))'
      }}
    >
   
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted={isPlaying}
          loop
          playsInline
          className="w-full h-full object-cover object-top"
          style={{
            filter: 'brightness(0.7)'
          }}
        >
          <source 
            src={hero} 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
         
      </div>

     
   
    </div>
  );
};

export default Hero;