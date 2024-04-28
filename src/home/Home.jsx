import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const playSound = () => {
    const audio = new Audio('/sound.wav');
    audio.play();
  };

  return (
    <div className='min-h-screen bg-sky-100 flex flex-col sm:flex-row '>
      <div className='w-full sm:w-6/12 flex justify-center items-center '>
        <img
          src="/vallatharasu_katturaja.png"
          alt=""
          className=' cursor-pointer max-h-80 sm:max-h-96 md:max-h-96 drop-shadow-2xl'
        />
      </div>
      <div className='w-full sm:w-6/12 p-6 flex flex-col items-center justify-center'>
        <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 mb-4 text-violet-600'>WEB DEVELOPER</h1>
        <p className='text-lg sm:text-xl text-gray-700 mb-8'>
          "I weave dreams with code, crafting digital worlds where imagination meets functionality. In the realm of web development, I am both architect and artist, shaping the online landscape one line of code at a time."
        </p>
       <div className="flex gap-10 justify-center">
       <button className="bg-white hover:bg-violet-700 hover:text-white text-violet-600 font-bold py-2 px-4 shadow-lg rounded">
        
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
          Hire Me
        </button>
        <button className="bg-white hover:bg-violet-700 hover:text-white text-violet-600 font-bold py-2 px-4 shadow-lg rounded">
          <FontAwesomeIcon icon={faDownload} className="mr-2 animate-bounce" />
         Resume
        </button>
       </div>
      </div>
    </div>
  );
};

export default Home;
