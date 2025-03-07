import React, { useState } from 'react';

const Features = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Tab data
  const tabs = [
    { id: 0, title: 'Affordable Excellence', number: '01' },
    { id: 1, title: 'Innovative Approach', number: '02' },
    { id: 2, title: 'Customer-Centric', number: '03' },
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
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
            className="dark:hidden w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
            className="hidden dark:block w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 flex flex-wrap justify-center gap-4 md:gap-8 bg-white border border-gray-200 rounded-lg shadow-lg text-black p-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`relative flex items-center gap-3 cursor-pointer px-4 py-2 md:px-6 md:py-3 ${
                activeTab === tab.id ? 'border-b-2 border-blue-600' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200  text-gray-900">
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
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 769.411 524.375"
    width="100%"
    height="100%"
    className="fill-current"
  >
    {/* Full SVG content to match the image */}
    <circle cx="174.757" cy="6.813" r="6.813" fill="#e6e6e6" />
    <circle cx="209.246" cy="6.813" r="6.813" fill="#e6e6e6" />
    <circle cx="243.735" cy="6.813" r="6.813" fill="#e6e6e6" />
    <circle cx="278.224" cy="6.813" r="6.813" fill="#e6e6e6" />
    <circle cx="312.713" cy="6.813" r="6.813" fill="#e6e6e6" />
    <circle cx="174.757" cy="41.735" r="6.813" fill="#e6e6e6" />
    <circle cx="209.246" cy="41.735" r="6.813" fill="#e6e6e6" />
    <circle cx="243.735" cy="41.735" r="6.813" fill="#e6e6e6" />
    <circle cx="278.224" cy="41.735" r="6.813" fill="#6a7aff" className="text-blue-600 fill-current" />
    <circle cx="312.713" cy="41.735" r="6.813" fill="#e6e6e6" />
    <circle cx="381.691" cy="41.735" r="6.813" fill="#e6e6e6" />
    <circle cx="174.757" cy="76.657" r="6.813" fill="#e6e6e6" />
    <circle cx="209.246" cy="76.657" r="6.813" fill="#e6e6e6" />
    <circle cx="243.735" cy="76.657" r="6.813" fill="#e6e6e6" />
    <circle cx="278.224" cy="76.657" r="6.813" fill="#e6e6e6" />
    <circle cx="312.713" cy="76.657" r="6.813" fill="#e6e6e6" />
    <circle cx="174.757" cy="111.579" r="6.813" fill="#e6e6e6" />
    <circle cx="209.246" cy="111.579" r="6.813" fill="#e6e6e6" />
    <circle cx="243.735" cy="111.579" r="6.813" fill="#e6e6e6" />
    <circle cx="278.224" cy="111.579" r="6.813" fill="#e6e6e6" />
    <circle cx="312.713" cy="111.579" r="6.813" fill="#e6e6e6" />
    <circle cx="347.202" cy="111.579" r="6.813" fill="#e6e6e6" />
    <circle cx="381.691" cy="111.579" r="6.813" fill="#e6e6e6" />
    <circle cx="416.18" cy="111.579" r="6.813" fill="#e6e6e6" />
    <circle cx="450.669" cy="111.579" r="6.813" fill="#e6e6e6" />
    <circle cx="485.158" cy="111.579" r="6.813" fill="#e6e6e6" />
    <circle cx="312.713" cy="146.501" r="6.813" fill="#e6e6e6" />
    <circle cx="347.202" cy="146.501" r="6.813" fill="#6a7aff" className="text-blue-600 fill-current" />
    <circle cx="381.691" cy="146.501" r="6.813" fill="#e6e6e6" />
    <circle cx="416.18" cy="146.501" r="6.813" fill="#e6e6e6" />
    <circle cx="450.669" cy="146.501" r="6.813" fill="#e6e6e6" />
    <circle cx="485.158" cy="146.501" r="6.813" fill="#e6e6e6" />
    <circle cx="312.713" cy="181.423" r="6.813" fill="#e6e6e6" />
    <circle cx="347.202" cy="181.423" r="6.813" fill="#e6e6e6" />
    <circle cx="381.691" cy="181.423" r="6.813" fill="#e6e6e6" />
    <circle cx="416.18" cy="181.423" r="6.813" fill="#e6e6e6" />
    <circle cx="450.669" cy="181.423" r="6.813" fill="#6a7aff" className="text-blue-600 fill-current" />
    <circle cx="485.158" cy="181.423" r="6.813" fill="#e6e6e6" />
    <circle cx="312.713" cy="216.345" r="6.813" fill="#e6e6e6" />
    <circle cx="347.202" cy="216.345" r="6.813" fill="#e6e6e6" />
    <circle cx="381.691" cy="216.345" r="6.813" fill="#e6e6e6" />
    <circle cx="416.18" cy="216.345" r="6.813" fill="#e6e6e6" />
    <circle cx="450.669" cy="216.345" r="6.813" fill="#e6e6e6" />
    <circle cx="485.158" cy="216.345" r="6.813" fill="#e6e6e6" />
    <circle cx="174.757" cy="251.267" r="6.813" fill="#e6e6e6" />
    <circle cx="209.246" cy="251.267" r="6.813" fill="#e6e6e6" />
    <circle cx="243.735" cy="251.267" r="6.813" fill="#e6e6e6" />
    <circle cx="278.224" cy="251.267" r="6.813" fill="#e6e6e6" />
    <circle cx="312.713" cy="251.267" r="6.813" fill="#e6e6e6" />
    <circle cx="347.202" cy="251.267" r="6.813" fill="#e6e6e6" />
    <circle cx="381.691" cy="251.267" r="6.813" fill="#e6e6e6" />
    <circle cx="416.18" cy="251.267" r="6.813" fill="#e6e6e6" />
    <circle cx="450.669" cy="251.267" r="6.813" fill="#e6e6e6" />
    <circle cx="485.158" cy="251.267" r="6.813" fill="#e6e6e6" />
    <circle cx="174.753" cy="286.188" r="6.813" fill="#e6e6e6" />
    <circle cx="209.246" cy="286.189" r="6.813" fill="#e6e6e6" />
    <circle cx="174.753" cy="321.11" r="6.813" fill="#e6e6e6" />
    <circle cx="209.246" cy="321.111" r="6.813" fill="#e6e6e6" />
    <circle cx="278.224" cy="321.111" r="6.813" fill="#e6e6e6" />
    <path
      d="M622 80.384H352a5.006 5.006 0 01-5-5V8.408a5.006 5.006 0 015-5h270a5.006 5.006 0 015 5v66.976a5.006 5.006 0 01-5 5zM352 5.408a3.003 3.003 0 00-3 3v66.976a3.003 3.003 0 003 3h270a3.003 3.003 0 003-3V8.408a3.003 3.003 0 00-3-3z"
      fill="#e6e6e6"
    />
    <circle cx="387" cy="41.896" r="21" fill="#6a7aff" className="text-blue-600 fill-current" />
    <path
      d="M435.5 27.896a3.5 3.5 0 100 7h93a3.5 3.5 0 100-7zm0 21a3.5 3.5 0 100 7h165a3.5 3.5 0 100-7z"
      fill="#e6e6e6"
    />
    <path
      d="M275 216.384H5a5.006 5.006 0 01-5-5v-66.976a5.006 5.006 0 015-5h270a5.006 5.006 0 015 5v66.976a5.006 5.006 0 01-5 5zM5 141.408a3.003 3.003 0 00-3 3v66.976a3.003 3.003 0 003 3h270a3.003 3.003 0 003-3v-66.976a3.003 3.003 0 00-3-3z"
      fill="#e6e6e6"
    />
    <circle cx="40" cy="177.896" r="21" fill="#6a7aff" className="text-blue-600 fill-current" />
    <path
      d="M88.5 163.896a3.5 3.5 0 000 7h97a3.5 3.5 0 000-7zm0 21a3.5 3.5 0 000 7h165a3.5 3.5 0 000-7z"
      fill="#e6e6e6"
    />
    <path
      d="M519 363.384H249a5.006 5.006 0 01-5-5v-66.976a5.006 5.006 0 015-5h270a5.006 5.006 0 015 5v66.976a5.006 5.006 0 01-5 5zm-270-74.976a3.003 3.003 0 00-3 3v66.976a3.003 3.003 0 003 3h270a3.003 3.003 0 003-3v-66.976a3.003 3.003 0 00-3-3z"
      fill="#3f3d56"
    />
    <circle cx="284" cy="324.896" r="21" fill="#6a7aff" className="text-blue-600 fill-current" />
    <path
      d="M332.5 310.896a3.5 3.5 0 000 7h89a3.5 3.5 0 000-7zm0 21a3.5 3.5 0 000 7h165a3.5 3.5 0 000-7z"
      fill="#e6e6e6"
    />
    <path
      d="M331.75 325.886c-11.726 35.177-59.695-2.132-59.695-2.132l12.791-133.247c19.188-14.924 39.442-2.132 39.442-2.132z"
      fill="#e6e6e6"
    />
    <path
      fill="#ffb8b8"
      d="M661.731 464.458l16.345.172-4.083 47.115-12.26.001-.002-47.288z"
    />
    <path
      d="M658.605 507.742h24.144a15.404 15.404 0 0115.387 15.387v.5h-39.53z"
      fill="#2f2e41"
    />
    <path
      fill="#ffb8b8"
      d="M617.421 464.458l-18.094-.001 5.832 47.288 12.26.001.002-47.288z"
    />
    <path
      d="M581.015 523.629v-.5a15.387 15.387 0 0115.387-15.387l24.144.001v15.888z"
      fill="#2f2e41"
    />
    <path
      d="M619.828 503.584L639.215 378.76l-19.84 123.214-20.1 1.117-5.36-165.086.403-.09c3.324-.745 81.537-17.924 94.359 6.652l.065.124-10.701 159.453z"
      fill="#2f2e41"
    />
    <circle cx="637.934" cy="170.843" r="24.561" fill="#ffb8b8" />
    <path
      d="M658.568 356.925c-2.88-.798-4.954-4.104-6.53-10.406-.271-1.086-25.771-109.711-4.206-129.391l4.97-13.808 6.803 4.535c2.407.022 27.02.645 29.124 16.423 2.06 15.443 7.666 118.913 2.03 125.349a1.219 1.219 0 01-.926.469c-5.71 0-7.444-6.336-7.852-8.356-1.357.562-5.402 2.629-12.048 9.275-4.117 4.118-7.345 6.09-10.012 6.09a5.037 5.037 0 01-1.353-.18z"
      fill="#2f2e41"
    />
    <path
      d="M605.267 351.015c-6.648-6.648-10.693-8.714-12.049-9.275-.407 2.02-2.14 8.356-7.851 8.356a1.219 1.219 0 01-.927-.47c-5.635-6.435-.029-109.905 2.03-125.348 2.104-15.778 26.718-16.4 29.125-16.423l6.802-4.535 4.971 13.808c21.564 19.678-3.935 128.305-4.207 129.391-1.575 6.302-3.65 9.608-6.529 10.406a5.037 5.037 0 01-1.353.18c-2.667 0-5.895-1.973-10.012-6.09z"
      fill="#2f2e41"
    />
    <path
      d="M652.211 184.872a25.204 25.204 0 00-12.207-45.54c-2.261-.226-4.696-.192-6.571-1.477-1.665-1.14-2.562-3.119-4.093-4.435a8.929 8.929 0 00-6.926-1.746 25.062 25.062 0 00-6.963 2.287c-5.446 2.429-11.235 5.417-13.713 10.84-2.147 4.698-1.2 10.491 1.84 14.668a20.41 20.41 0 0013.016 7.685 32.535 32.535 0 0015.285-1.376c3.241-1.02 6.441-2.41 9.838-2.524a13.37 13.37 0 0110.145 22.564"
      fill="#2f2e41"
    />
    <path
      d="M524.341 330.981a10.8 10.8 0 0010.548-11.048l14.323-24.166-11.066-10.146-15.088 23.81a10.801 10.801 0 001.283 21.55z"
      fill="#ffb8b8"
    />
    <path
      d="M690.514 357.456a10.8 10.8 0 003.15-14.947l-.549-28.086-14.75-2.798-.29 28.186a10.801 10.801 0 0012.439 17.645z"
      fill="#ffb8b8"
    />
    <path
      d="M528.699 292.124l-.167-.266.165-.266c21.484-34.498 66.58-77.593 67.032-78.024l.143-.136 5.57-.057 6.02 15c-1.874 3.606-52.395 74.11-59.066 78.786a4.603 4.603 0 01-3.685.694 9.699 9.699 0 01-3.124-1.33c-6.157-3.814-12.573-13.902-12.888-14.401z"
      fill="#2f2e41"
    />
    <path
      d="M676.558 331.49a4.57 4.57 0 01-2.707-2.484c-3.217-7.505 10.569-102.302 11.157-106.334l.112-.763 4.66 2.954.046.2c.137.606 13.712 60.998 10.033 101.127l-.027.287-.261.12c-.56.26-11.868 5.454-19.404 5.454a10.192 10.192 0 01-3.61-.56z"
      fill="#2f2e41"
    />
    <path
      d="M768.411 524.375h-266a1 1 0 010-2h266a1 1 0 010 2z"
      fill="#3f3d56"
    />
  </svg>
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