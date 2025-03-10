import React from 'react';

const PricingSection = () => {
  return (
    <section className="overflow-hidden pb-20 bg-white pt-15 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-[1315px] px-4 md:px-8 xl:px-0">
        {/* Header Section */}
        <div className="animate_top mx-auto text-center">
          <div
            className="animate_top mx-auto text-center"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="mb-4 inline-block rounded-full bg-blue-100 px-4.5 py-1.5">
              <span className="text-lg font-medium text-black">PRICING</span>
            </div>
            <h2 className="mx-auto mb-4 text-3xl font-bold text-blue-600 md:w-4/5 xl:w-1/2 xl:text-5xl">
              Fair and Square
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-gray-600">
              Pricing varies based on the complexity and scope of each project.
              We offer competitive rates and provide clear, transparent estimates
              to ensure you know exactly what to expect, with no hidden costs.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          {/* Background Dotted Shape (optional, can be an image or SVG) */}
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <img
              alt="Dotted"
              loading="lazy"
              decoding="async"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent',
              }}
              src="./images/shape/shape-dotted-light.svg"
            />
          </div>

          {/* Cards Container */}
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* Card 1: Custom Development */}
            <div className="animate_top group relative rounded-lg border border-gray-200 bg-white p-7.5 shadow-lg md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black xl:text-5xl">
                $59{' '}
                <span className="text-regular text-gray-500">(starting)</span>
              </h3>
              <h4 className="mb-2.5 text-lg font-medium text-black">
                Custom Development
              </h4>
              <p className="text-gray-600">
                Android, iOS, Web, Desktop Softwares
              </p>
              <div className="mt-9 border-t border-gray-200 pb-12.5 pt-9">
                <ul>
                  <li className="mb-4 text-black last:mb-0">User Flow</li>
                  <li className="mb-4 text-black last:mb-0">Timely Delivery</li>
                  <li className="mb-4 text-black last:mb-0">Deployment Support</li>
                  <li className="mb-4 text-black last:mb-0">
                    3 Months Free Maintenance
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Full Project Package (Popular) */}
            <div className="animate_top group relative rounded-lg border border-gray-200 bg-white p-7.5 shadow-lg md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-blue-600 px-4.5 py-1.5 text-sm font-medium uppercase text-white">
                popular
              </div>
              <h3 className="mb-7.5 text-3xl font-bold text-black xl:text-5xl">
                $249{' '}
                <span className="text-regular text-gray-500">(starting)</span>
              </h3>
              <h4 className="mb-2.5 text-lg font-medium text-black">
                Full Project Package
              </h4>
              <p className="text-gray-600">
                End-to-end solutions for all your needs.
              </p>
              <div className="mt-9 border-t border-gray-200 pb-12.5 pt-9">
                <ul>
                  <li className="mb-4 text-black last:mb-0">Custom Designs</li>
                  <li className="mb-4 text-black last:mb-0">
                    Complete Development
                  </li>
                  <li className="mb-4 text-black last:mb-0">
                    Comprehensive Testing
                  </li>
                  <li className="mb-4 text-black last:mb-0">
                    6 Months Free Maintenance
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Design & Graphics */}
            <div className="animate_top group relative rounded-lg border border-gray-200 bg-white p-7.5 shadow-lg md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black xl:text-5xl">
                $49{' '}
                <span className="text-regular text-gray-500">(starting)</span>
              </h3>
              <h4 className="mb-2.5 text-lg font-medium text-black">
                Design & Graphics
              </h4>
              <p className="text-gray-600">
                Bring your ideas to life with animation.
              </p>
              <div className="mt-9 border-t border-gray-200 pb-12.5 pt-9">
                <ul>
                  <li className="mb-4 text-black last:mb-0">Storyboards</li>
                  <li className="mb-4 text-black last:mb-0">Exported Assets</li>
                  <li className="mb-4 text-black last:mb-0">Final Videos</li>
                  <li className="mb-4 text-black last:mb-0">Unlimited Revisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;