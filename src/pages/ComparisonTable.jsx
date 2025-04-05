import React from 'react';

const ComparisonTable = () => {
  return (
    <div className=" mx-auto px-6 py-16 h-fit items-center bg-gray-800 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-left mb-6">
       <span className='text-blue-500'>Logicense</span>   Custom vs. Off-the-Shelf Software – A Clear Winner Emerges
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
    </div>
  );
};

export default ComparisonTable;