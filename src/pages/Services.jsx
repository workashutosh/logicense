import React from 'react';

const Services = () => {
  // Service data array for dynamic rendering
  const services = [
    {
      icon: 'https://oxlac.com/images/icon/icon-01.svg', 
      title: 'Mobile App Development',
      description: 'Building intuitive and responsive mobile apps that empower users and drive engagement.',
    },
    {
      icon: 'https://oxlac.com/images/icon/icon-02.svg',
      title: 'Website Development',
      description: 'Crafting scalable, user-centric websites that deliver seamless experiences and robust performance.',
    },
    {
      icon: 'https://oxlac.com/images/icon/icon-03.svg',
      title: 'Software Development',
      description: 'Developing custom software solutions that streamline operations, enhance efficiency, and scale with your business.',
    },
    {
      icon: 'https://oxlac.com/images/icon/icon-04.svg',
      title: 'Motion Graphics',
      description: 'Bringing stories to life through dynamic animations and engaging visual elements that captivate and communicate effectively.',
    },
    {
      icon: 'https://oxlac.com/images/icon/icon-05.svg',
      title: 'Design & Animation',
      description: 'Designing beautiful, user-centric interfaces and animations that bring your vision to life with a seamless, intuitive experience.',
    },
    {
      icon: 'https://oxlac.com/images/icon/icon-06.svg',
      title: 'AI Integration',
      description: 'Leveraging Large Language Models (LLMs) and foundational AI models to create smart applications that learn and adapt.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full uppercase mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solutions That Deliver
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get exceptional results without breaking the bank. We deliver top-tier digital solutions designed to meet your needs and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-600 rounded-sm flex items-center justify-center mb-6">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={24}
                  height={24}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;