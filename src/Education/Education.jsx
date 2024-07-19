import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone as solidPhone } from '@fortawesome/free-solid-svg-icons'; // Importing faPhone from solid icons

const Education = () => {
  const playSound = () => {
    const audio = new Audio('/soundClick.wav');
    audio.play();
  };

  const education = [
    {
      degree: "M.TECH (Computer Science)",
      institution: "Bharathidasan University",
      period: "2019 - 2025",
    },
    {
      degree: "HSC",
      institution: "Govt. HR. Sec. School, Rappusal",
      period: "2018 - 2019",
      percentage: "68%",
    },
    {
      degree: "SSLC",
      institution: "Govt. HR. Sec School, Rappusal",
      period: "2016 - 2017",
      percentage: "89%",
    }
  ];

  return (
    <div className='min-h-screen bg-slate-50/80 flex flex-col sm:flex-row ' id='education'>
      <div className="w-full  flex flex-col justify-center px-3 ">
        <div className="flex gap-6 justify-center">
        <h1 className='text-4xl sm:text-5xl font-bold  mb-4 text-violet-600 text-center'>Education</h1>
        <div className='flex items-center justify-end flex-wrap flex-col gap-6 fixed  end-0 p-2 bottom-2 right-2    '>
          <a 
            href="https://www.instagram.com/vallatharasu_katturaja/" 
            target='_blank' 
            rel='noopener noreferrer'
            className='text-white  bg-red-500 px-3 py-2 rounded-full shadow-lg shadow-red-500/50 hover:border-red-500 border-2 border-transparent hover:text-red-500 hover:bg-white'
            onClick={playSound}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a 
            href="https://www.linkedin.com/in/vallatharasu-katturaja-20753322a/" 
            className='text-white  bg-blue-700 hover:text-blue-700 hover:bg-slate-50 px-3 py-2 rounded-full shadow-lg shadow-blue-700/50 hover:border-blue-700 border-2 border-transparent'
            onClick={playSound}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a 
            href="https://wa.me/7094376344?text=Hi Vallatharasu Katturaja" 
            className='text-white bg-green-500 hover:text-green-500 hover:bg-slate-50 px-3 py-2 rounded-full shadow-lg shadow-green-500/50 hover:border-green-500 border-2 border-transparent'
            onClick={playSound}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a 
            href="https://github.com/Vallatharasu123" 
            className='text-white bg-gray-800 hover:text-gray-800 hover:bg-slate-50 border-2 shadow-gray-800/50 hover:border-gray-800 border-transparent px-3 py-2 rounded-full shadow-lg'
            onClick={playSound}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="tel:+917094376344" 
            className='text-white bg-violet-600 hover:text-violet-600 shadow-violet-600/50 hover:border-violet-600 border-2 border-transparent hover:bg-slate-50 px-3 py-2 rounded-full shadow-lg'
            onClick={playSound}
          >
            <FontAwesomeIcon icon={solidPhone} />
          </a>
        </div>
        </div>
       
        <div className="p-6  ">
          {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Education Details</h1> */}
          <div className="max-full mx-auto flex flex-col justify-evenly items-center gap-6 ">
            {education.map((item, index) => (
              <div key={index} className="bg-white rounded-lg sm:w-6/12 w-full shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">{item.degree}</h2>
                <p className="text-gray-600 mb-1"><strong>Institution:</strong> {item.institution}</p>
                <p className="text-gray-600 mb-1"><strong>Period:</strong> {item.period}</p>
                {item.percentage && (
                  <p className="text-gray-600"><strong>Percentage:</strong> {item.percentage}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      
      </div>
      {/* <div className="w-full sm:w-6/12 flex justify-center items-end">
        <img src="/vallatharasu_katturaja_ncc_white-removebg.png" alt="Profile" className='max-h-full' />
      </div> */}
    </div>
  );
};

export default Education;
