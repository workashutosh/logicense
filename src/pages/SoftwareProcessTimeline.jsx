import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png"; 


const timelineSteps = [
  {
    title: "Discover What Truly Matters",
    description:
      "We don't jump to solutions. We start with the soul of the problem. Before a single line of code is written, we dive deep into your world. Through stakeholder interviews, user journey mapping, and empathy-driven workshops, we align on core business goals and user needs. This phase is all about defining the 'why'—a foundation for everything that follows."
  },
  {
    title: "Invent with Bold Imagination",
    description:
      "You bring the spark. We build the fire. Here, we use ideation sprints and design thinking to generate innovative concepts. We create wireframes, user flow diagrams, and low-fidelity prototypes, iterating rapidly to validate assumptions. This phase prioritizes collaboration between product owners, designers, and developers to ensure alignment before development begins."
  },
  {
    title: "Build, Break, Rebuild—Better",
    description:
      "Perfection isn't the goal. Progress is. We adopt Agile methodologies—specifically Scrum or Kanban—to deliver working software in incremental sprints. Each sprint includes planning, daily stand-ups, development, testing, and retrospectives. Continuous integration and test-driven development (TDD) allow us to adapt quickly to feedback and ship high-quality software that grows with your needs."
  },
  {
    title: "Grow Smarter, Scale Brighter",
    description:
      "The launch is just the beginning. We integrate analytics tools and gather user feedback through usability testing and performance monitoring. We use KPIs, OKRs, and customer success metrics to evaluate what's working and what needs improvement. Continuous delivery pipelines, feature toggles, and A/B testing ensure the product can evolve with agility and confidence."
  }
];

export default function SoftwareProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  
  // Auto-rotate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % timelineSteps.length);
    }, 8000); // Change step every 8 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Manually change step
  const goToStep = (stepIndex) => {
    setActiveStep(stepIndex);
  };
  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}

    >
      <div className=" mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl flex flex-1 font-bold text-gray-900 mb-6">
          How We Build :  <span className="text-blue-500 ml-2">A Steamline Process</span> <img src={logo} alt="" className='h-10 w-10 mt-1 ml-1 rotate-180' />
        </h2>
        <p className="text-xl text-gray-600 text-left mx-auto">
          We don't just build software—we architect streamlined, scalable, and user-focused digital solutions through modern Agile practices and deep human insight.
        </p>
      </div>

      {/* Timeline Tabs */}
      <div className="mt-12 mb-8  mx-auto">
        <div className="relative">
          {/* Timeline Bar */}
          <div className="absolute top-4 py-1 left-0 right-0 h-1 bg-blue-200 rounded"></div>
          
          {/* Progress Bar */}
          <div 
            className="absolute top-4 left-0 h-1 py-1 bg-blue-600 rounded transition-all duration-300 ease-in-out"
            style={{ width: `${((activeStep + 1) / timelineSteps.length) * 100}%` }}
          ></div>
          
          {/* Timeline Steps */}
          <div className="relative flex justify-between">
            {timelineSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-8 h-8 rounded-full mt-1 flex items-center justify-center z-10 transition-all duration-300 ease-in-out ${
                  activeStep === index 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : activeStep > index 
                      ? "bg-blue-600 text-white" 
                      : "bg-white border-2 border-gray-300 text-gray-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Step Titles */}
      <div className="hidden sm:flex justify-between  mx-auto px-4 mt-2 mb-8">
        {timelineSteps.map((step, index) => (
          <div 
            key={index} 
            className="text-center"
            style={{ width: `${100 / timelineSteps.length}%` }}
          >
            <p 
              className={`text-sm font-medium transition-colors duration-300 ${
                activeStep === index ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* Content Carousel */}
      <div className="mt-8 max-w-3xl mx-auto relative overflow-hidden">
        <div 
          className="transition-all duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${activeStep * 100}%)` }}
        >
          {timelineSteps.map((step, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 p-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-lg font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots (Mobile Only) */}
        <div className="flex justify-center space-x-2 mt-6 sm:hidden">
          {timelineSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeStep === index ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={() => goToStep((activeStep - 1 + timelineSteps.length) % timelineSteps.length)}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none"
          aria-label="Previous step"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => goToStep((activeStep + 1) % timelineSteps.length)}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none"
          aria-label="Next step"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}