import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">[Your Name]</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 mb-6">
              DevOps Engineer & Cloud Specialist
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              {/* CHANGE YOUR INTRODUCTION HERE */}
              I automate infrastructure, optimize CI/CD pipelines, and build scalable cloud solutions.
              Passionate about infrastructure as code, Kubernetes, and cloud-native technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300"
              >
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                className="border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 px-6 py-3 rounded-lg transition duration-300"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* CHANGE YOUR PROFILE IMAGE HERE */}
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gray-800 rounded-full overflow-hidden border-4 border-blue-500">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;