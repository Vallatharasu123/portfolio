import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const playSound = () => {
    const audio = new Audio('/soundClick.wav');
    audio.play();
  };

  return (
    <div className='min-h-screen bg-sky-50 flex flex-col sm:flex-row '>
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
          "Full Stack Developer with 2 years of experience in designing, developing, and implementing scalable web applications using modern technologies. Proficient in both front-end and back-end development, including HTML, CSS, JavaScript, and popular frameworks such as React and Node.js. Strong analytical and problem-solving skills, with a keen eye for detail and an ability to rapidly learn and adapt to new technologies. Excellent communication and teamwork abilities, contributing to efficient project management and successful software solutions."
        </p>
       <div className="flex gap-10 justify-center">
      
        <a href='/Vallatharasu_Katturaja_Resume.pdf' className="bg-violet-700 text-white hover:bg-white hover:text-violet-700 border-2 border-transparent hover:border-violet-700 text-violet-600 font-bold py-2 px-4 shadow-lg shadow-violet-600/50 rounded">
          <FontAwesomeIcon icon={faDownload} className="mr-2 animate-bounce" />
         Resume
        </a>
       </div>
      </div>
    </div>
  );
};

export default Home;
