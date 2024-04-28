import React, { useState } from 'react';

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const playSound = () => {
    const audio = new Audio('/sound.wav');
    audio.play();
  };
  return (
    <div className=" ease-in bg-white text-dark sm:sticky top-0 z-10">
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <h1 className="text-xl font-bold"><span className="text-violet-600">V</span>allatharasu <span className="text-violet-600">K</span>atturaja</h1>
        </div>
        <div className="lg:hidden ease-in">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-violet-600"  onClick={playSound}>Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-violet-600"  onClick={playSound}>About</a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-600"  onClick={playSound}>Skills</a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-600"  onClick={playSound}>Projects</a>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden px-4 pb-3">
          <ul className="flex flex-col space-y-3">
            <li>
              <a href="#" className="hover:text-violet-600"  onClick={playSound}>Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-violet-600"  onClick={playSound}>About</a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-600"  onClick={playSound}>Skills</a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-600"  onClick={playSound}>Projects</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Topbar;
