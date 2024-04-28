import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone as solidPhone } from '@fortawesome/free-solid-svg-icons'; // Importing faPhone from solid icons

const About = () => {
     const playSound = () => {
    const audio = new Audio('/sound.wav');
    audio.play();
  };
  return (
    <div className='min-h-screen bg-white flex flex-col sm:flex-row ' id='about'>
      <div className="w-full sm:w-6/12 flex flex-col justify-center px-3 ">
      <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 mb-4 text-violet-600'>About</h1>
        <p className='text-lg sm:text-xl text-gray-700 mb-8'>
          "I weave dreams with code, crafting digital worlds where imagination meets functionality. In the realm of web development, I am both architect and artist, shaping the online landscape one line of code at a time."
        </p>
        <div className='flex flex-wrap gap-5'>
          {/* Replace "#" with your Instagram link */}
          <a href="https://www.instagram.com/vallatharasu_katturaja/" target='_blank' className='text-violet-600 hover:text-white hover:bg-violet-600 px-4 py-2 bg-slate-50 rounded-md shadow-lg ' onClick={playSound}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className='text-violet-600 hover:text-white hover:bg-violet-600 px-4 py-2 bg-slate-50 shadow-lg  rounded-md ' onClick={playSound}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className='text-violet-600 hover:text-white hover:bg-violet-600 px-4 py-2 bg-slate-50 shadow-lg rounded-md' onClick={playSound}>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#" className='text-violet-600 hover:text-white hover:bg-violet-600 px-4 py-2 bg-slate-50 shadow-lg rounded-md ' onClick={playSound}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className='text-violet-600 hover:text-white hover:bg-violet-600 px-4 py-2 bg-slate-50 shadow-lg rounded-md ' onClick={playSound}>
            <FontAwesomeIcon icon={solidPhone} /> {/* Using solidPhone icon here */}
          </a>
        </div>  
      </div>
      <div className="w-full sm:w-6/12 flex justify-center items-end ">
      <img src="/vallatharasu_katturaja_ncc_white-removebg.png" alt="" className='max-h-full' />
      </div>
    </div>
  )
}

export default About
