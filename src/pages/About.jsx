import React from 'react';
import art from "../assets/art.jpeg"; 
import BoxReveal from './BoxReveal.jsx'
import AnimatedBeamMultipleOutputDemo from "../components/AnimatedBeamMultipleOutputDemo.jsx";

const About = () => {
  return (
    <section
    id='about-section'
      className="min-h-fit font-sans  text-white overflow-hidden"
    >
      <section className=" mx-auto bg-gray-800 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row justify-center content-center ">
        {/* Left Side: Visual Section */}
        <div className="w-full bg-transparent z-10 lg:w-1/2 lg:mb-0">            
        <div className="relative rounded-4xl">
  {/* Grid background */}
  <div 
    className="absolute inset-0 -z-10 rounded-4xl h-full w-full overflow-hidden"
    style={{
      background: '#fafafa',
      backgroundImage: `
        linear-gradient(to right, rgba(128, 128, 128, 0.15) 1px, transparent 1px), 
        linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 1px, transparent 1px)
      `,
      backgroundSize: '14px 24px'
    }}
  ></div> 
  <AnimatedBeamMultipleOutputDemo className="rounded-4xl" />
</div>
        </div>

        {/* Right Side: Content Section */}
        <div className="w-full  lg:w-1/2 pr-12 p-4 lg:pl-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 mb-6 leading-tight">
            Build ‘lean’ custom software with those 20% features that will have 80% impact.
          </h1>
          <p className="text-base lg:text-lg text-gray-300 mb-6 max-w-prose">
            Most software is bloated with features you don’t need. Focus on the 20% that truly matters and makes a difference. Why not build custom software that’s just right for you? We’re an award-winning custom software development company that builds solutions 3x faster with our game-changer: Code Accelerate – a library of pre-built, battle-tested modules that lets us focus on what truly matters – your unique business needs.
          </p>
          <p className="text-base lg:text-lg text-gray-300 mb-8 max-w-prose">
              Imagine having a team that specifically focus only on your needs. We’re not just developers; we’re your partners in innovation. 
          </p>
          <div className="flex space-x-4">
          <a
  href="/contact"
  class="group inline-flex items-center justify-center px-4 py-2 text-blue-600 font-medium  transition-all duration-200 hover:shadow-lg relative overflow-hidden"
>
  Let's Craft The Perfect Software Solution Together!
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-6-6a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
  <span class="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
</a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;