import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen font-sans bg-cover bg-center" style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}>
      <section className="py-20 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-12">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white/10 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-600">E-Commerce Landing Page</h2>
            <p className="mt-2 text-blue-900">A ₹25,000 project driving 500+ leads in one month.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-600">Delivery App</h2>
            <p className="mt-2 text-blue-900">A ₹1,50,000 app boosting sales by 40% for a retailer.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-600">Custom CRM</h2>
            <p className="mt-2 text-blue-900">A ₹3,00,000 solution cutting costs by 25%.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/contact" className="px-8 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-500 text-white transition-all duration-300">Let’s Build Yours</a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;