import React from 'react';

const ComparisonTable = () => {
  return (
    <div className=" mx-auto px-10 py-16 h-fit items-center bg-gray-800 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-left mb-6">
       <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600'>Logicense</span>   Custom vs. Off-the-Shelf Software – A Clear Winner Emerges
      </h1>
      <p className="py-4 mb-8 text-lg text-left md:text-xl">
        At Logicense, we believe crafting business solutions—whether CRMs, CLMs, landing pages, marketing tools, animations, models, VFX, or more—should be a tailored experience, not a one-size-fits-all guesswork. We follow a client-driven innovation process to transform your vision into a solution that elevates your business. Here’s why custom solutions from Logicense stand out:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="py-3 px-4  border-b border-gray-700">Benefit</th>
              <th className="py-3 px-4 border-b text-blue-300 border-gray-700">Custom Software (Logicense)</th>
              <th className="py-3 px-4 border-b border-gray-700">Traditional Software</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="py-3 px-4 border-b border-gray-700 font-medium">Flexibility</td>
              <td className="py-3 px-4 text-blue-300 border-b border-gray-700">
                Built to your exact needs, from CRMs to VFX workflows
              </td>
              <td className="py-3 px-4 border-b border-gray-700">
                Limited functionality; often requires workarounds
              </td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="py-3 px-4 border-b border-gray-700 font-medium">Scalability</td>
              <td className="py-3 px-4 text-blue-300 border-b border-gray-700">
                Grows with your business, adapting to new marketing campaigns or animation projects
              </td>
              <td className="py-3 px-4 border-b border-gray-700">
                Can become clunky and slow as your needs evolve
              </td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="py-3 px-4 border-b border-gray-700 font-medium">Security</td>
              <td className="py-3 px-4 border-b text-blue-300 border-gray-700">
                Tailored security protocols for your specific data, whether client records or creative assets
              </td>
              <td className="py-3 px-4 border-b border-gray-700">
                Generic security measures may not address your unique needs
              </td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="py-3 px-4 border-b border-gray-700 font-medium">User Experience (UX)</td>
              <td className="py-3 px-4 text-blue-300 border-b border-gray-700">
                Designed with user-focused design thinking for seamless CRM, landing page, and VFX tool usage
              </td>
              <td className="py-3 px-4 border-b border-gray-700">
                Generic interface may not be intuitive for your users
              </td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="py-3 px-4 border-b border-gray-700 font-medium">Cost</td>
              <td className="py-3 px-4 text-blue-300 border-b border-gray-700">
                Initial investment may be higher, but long-term savings with solutions tailored for CRMs, marketing, and animations
              </td>
              <td className="py-3 px-4 border-b border-gray-700">
                May seem cheaper upfront, but hidden fees and customization costs can add up
              </td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="py-3 px-4 border-b border-gray-700 font-medium">Competitive Advantage</td>
              <td className="py-3 px-4 text-blue-300 border-b border-gray-700">
                Sets you apart with unique landing pages, VFX, and CRM solutions that reflect your brand
              </td>
              <td className="py-3 px-4 border-b border-gray-700">
                Generic features may make it difficult to stand out
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <a
  href="/contact"
  class="group inline-flex text-center py-8 items-center justify-center px-4  text-blue-600 font-medium  transition-all duration-200 hover:shadow-lg relative overflow-hidden"
>
  Let's Build a Better One Together!
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-6-6a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
  <span class="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
</a>
    </div>
  );
};

export default ComparisonTable;