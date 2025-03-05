import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen font-sans bg-cover bg-center" style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}>
      <section className="py-20 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white/10 rounded-lg shadow-xl shadow-blue-400 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-600">Website Development</h2>
            <p className="mt-2 text-blue-900">From landing pages to e-commerce, we build responsive, SEO-optimized sites.</p>
            <p className="mt-2 text-blue-600">Starting at ₹5,000</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg shadow-xl shadow-blue-400 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-600">Mobile Apps</h2>
            <p className="mt-2 text-blue-900">Custom iOS/Android apps with sleek design and robust functionality.</p>
            <p className="mt-2 text-blue-600">Starting at ₹50,000</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg shadow-xl shadow-blue-400 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-600">Software Solutions</h2>
            <p className="mt-2 text-blue-900">Bespoke CRMs, ERPs, and tools to streamline your business.</p>
            <p className="mt-2 text-blue-600">Starting at ₹1,00,000</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg shadow-xl shadow-blue-400 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-600">UI/UX Design</h2>
            <p className="mt-2 text-blue-900">Elegant, user-centric designs that enhance engagement.</p>
            <p className="mt-2 text-blue-600">Starting at ₹10,000</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/contact" className="px-8 text-white py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-500 transition-all duration-300">Request a Quote</a>
        </div>
      </section>
    </div>
  );
};

export default Services;