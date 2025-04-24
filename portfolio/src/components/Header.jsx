import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            {/* CHANGE YOUR NAME HERE */}
            <span className="text-blue-400">Dev</span>Ops Engineer
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-white">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;