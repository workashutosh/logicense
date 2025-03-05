import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen font-sans bg-cover bg-center" style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}>    

      {/* Main Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6 tracking-tight">
            Logisence – Mumbai’s Tech Innovators
          </h1>
          <p className="text-xl md:text-2xl text-blue-900 mb-8 max-w-2xl mx-auto">
            Your Mumbai-based tech partner crafting stunning websites, apps, and software that drive success.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 text-white bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg"
            >
              Get a Free Quote
            </a>
            <a
              href="/portfolio"
              className="px-6 hover:text-white py-3 border border-blue-400 rounded-full text-lg font-semibold hover:bg-blue-600 hover:border-transparent transition-all duration-300"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </main>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8 bg-white/5 backdrop-blur-md">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-12">Why Choose Logisence?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all shadow-xl shadow-blue-400 duration-300">
            <h3 className="text-xl font-semibold text-blue-600">Custom Solutions</h3>
            <p className="mt-2 text-blue-800">Tailored websites and apps built to match your unique vision.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all shadow-xl shadow-blue-400 duration-300">
            <h3 className="text-xl font-semibold text-blue-600">Mumbai Expertise</h3>
            <p className="mt-2 text-blue-800">Local know-how delivering solutions that resonate with your audience.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all shadow-xl shadow-blue-400 duration-300">
            <h3 className="text-xl font-semibold text-blue-600">Affordable Excellence</h3>
            <p className="mt-2 text-blue-800">Premium quality starting at just ₹5,000 for landing pages!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;