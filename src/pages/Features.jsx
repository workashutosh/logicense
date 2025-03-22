import React, { useState } from 'react';
import illus from '../../public/illus.jpg'

const Features = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Tab data
  const tabs = [
    { id: 0, title: 'Affordable Excellence', shortTitle: 'Quality', number: '01' },
    { id: 1, title: 'Innovative Approach', shortTitle: 'Creativity', number: '02' },
    { id: 2, title: 'Customer-Centric', shortTitle: 'Priority', number: '03' },
  ];

  // Content data for each tab
  const contents = [
    {
      title: 'Quality on Your Budget',
      description1: 'We believe in delivering high-quality solutions at competitive prices, ensuring great value for every project.',
      description2: 'Our focus is on affordability without compromising on the performance and creativity your business deserves.',
    },
    {
      title: 'Creativity Drives Results',
      description1: 'Our team combines innovation with technical expertise to create solutions that stand out and drive success.',
      description2: 'We push the boundaries of technology and design to craft unique digital experiences that make an impact.',
    },
    {
      title: 'Your Vision, Our Priority',
      description1: 'We listen to your needs, ensuring every project is a reflection of your vision and business goals.',
      description2: 'Our customer-first approach guarantees ongoing support and a seamless experience from start to finish.',
    },
  ];

  return (
    <section className="relative pb-16 pt-12 lg:pb-20 lg:pt-16 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Background Dotted Shape */}
        <div className="absolute -top-16 -z-10 mx-auto h-[350px] w-[90%]">
          <img
            src={illus}
            alt="Dotted Shape"
            className="dark:hidden w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src={illus}
            alt="Dotted Shape"
            className="hidden dark:block w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Mobile Tab Navigation (Radio Style) */}
        <div className="md:hidden mb-8 flex justify-center">
          <div className="relative flex flex-wrap border-radius-0.5rem bg-gray-100 box-shadow-0-0-0px-1px-rgba-0-0-0-0.06 p-1 w-full max-w-xs rounded-lg shadow-sm">
            {tabs.map((tab) => (
              <label key={tab.id} className="flex-1 text-center">
                <input
                  type="radio"
                  name="tab-radio"
                  className="hidden"
                  checked={activeTab === tab.id}
                  onChange={() => setActiveTab(tab.id)}
                />
                <span
                  className={`flex cursor-pointer items-center justify-center rounded-lg border-none py-2 px-1 transition-all duration-150 ${
                    activeTab === tab.id
                      ? 'bg-white font-semibold text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {tab.shortTitle}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Desktop Tab Navigation */}
        <div className="hidden md:flex mb-12 flex-wrap justify-center gap-4 md:gap-8 bg-white border border-gray-200 rounded-lg shadow-lg text-black p-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`relative flex items-center gap-3 cursor-pointer px-4 py-2 md:px-6 md:py-3 ${
                activeTab === tab.id ? 'border-b-2 border-blue-600' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-900">
                <span className="text-base font-medium">{tab.number}</span>
              </div>
              <span
                className={`text-sm md:text-base font-medium ${
                  activeTab === tab.id ? 'text-blue-600' : 'text-gray-900 '
                } hover:text-blue-600 transition-colors duration-300`}
              >
                {tab.title}
              </span>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="animate-fade-in mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* Text Section */}
            <div className="md:w-1/2">
              <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 ">
                {contents[activeTab].title}
              </h2>
              <p className="mb-4 text-base md:text-lg text-blue-500">
                {contents[activeTab].description1}
              </p>
              <p className="text-base md:text-lg text-blue-400">
                {contents[activeTab].description2}
              </p>
            </div>

            {/* SVG Graphic */}
            <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
              <img 
                src={illus}
                alt="Features illustration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Optional: Add animation CSS in your global stylesheet (e.g., index.css)
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;

export default Features;