import React from 'react';
import Services from './Services';
import Features from './Features';

const Home = () => {
  return (
    <div className="min-h-screen font-sans bg-cover bg-center" style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}>    

      {/* Main Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-blue-600 mb-6 tracking-tight">
            Logisence – Solving Your Software Problems
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-900 mb-8 max-w-2xl mx-auto">
            Mumbai’s tech innovators delivering custom websites, apps, and software to fix your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 text-white bg-blue-600 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
              Get a Free Quote
            </a>
            <a
              href="/portfolio"
              className="px-6 py-3 border border-blue-400 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 w-full sm:w-auto"
            >
              See Our Solutions
            </a>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <Services />

      {/* Features Section */}
      <Features />

      {/* How We Solve Your Problems Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white/5 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-10 sm:mb-12">How We Solve Your Software Problems</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all shadow-xl shadow-blue-400 duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Slow Systems?</h3>
            <p className="mt-2 text-blue-800 text-sm sm:text-base">
              We optimize your websites and apps for lightning-fast performance, keeping your customers happy.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all shadow-xl shadow-blue-400 duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Outdated Tech?</h3>
            <p className="mt-2 text-blue-800 text-sm sm:text-base">
              We upgrade your software with modern tools, ensuring it’s future-proof and efficient.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all shadow-xl shadow-blue-400 duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Complex Processes?</h3>
            <p className="mt-2 text-blue-800 text-sm sm:text-base">
              We simplify your workflows with custom solutions, saving you time and money.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white/10 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-10 sm:mb-12">Our Journey Solving Problems</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-blue-600 pl-6">
            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600">2020 – TCS Collaboration</h3>
              <p className="mt-2 text-blue-800 text-sm sm:text-base">
                Streamlined their internal tools, reducing process delays by 40% for India’s IT giant.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600">2021 – Infosys Project</h3>
              <p className="mt-2 text-blue-800 text-sm sm:text-base">
                Built a custom app to improve client reporting, boosting efficiency for this Mumbai-based leader.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600">2023 – Wipro Upgrade</h3>
              <p className="mt-2 text-blue-800 text-sm sm:text-base">
                Revamped legacy software, cutting downtime by 30% for one of India’s top tech firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attractive Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white/5 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-10 sm:mb-12">Why Logisence Stands Out</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all shadow-md duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Lightning-Fast Delivery</h3>
            <p className="mt-2 text-blue-800 text-sm sm:text-base">
              Solutions in as little as 7 days, from concept to launch.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all shadow-md duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600">24/7 Support</h3>
            <p className="mt-2 text-blue-800 text-sm sm:text-base">
              Round-the-clock help to keep your software running smoothly.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-all shadow-md duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Scalable Solutions</h3>
            <p className="mt-2 text-blue-800 text-sm sm:text-base">
              Grow without worry—our tech scales with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white/5 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-10 sm:mb-12">Problems Solved, Clients Happy</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 sm:gap-8">
          <div className="p-6 bg-white/10 rounded-lg shadow-lg">
            <p className="text-blue-800 text-sm sm:text-base italic">
              "Logisence fixed our slow website in a week—sales are up 50%!"
            </p>
            <p className="mt-4 text-blue-600 font-semibold text-sm sm:text-base">– Priya S., Mumbai Retail Owner</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg shadow-lg">
            <p className="text-blue-800 text-sm sm:text-base italic">
              "Their app solved our customer tracking issues overnight. Amazing!"
            </p>
            <p className="mt-4 text-blue-600 font-semibold text-sm sm:text-base">– Rohan K., Startup Founder</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-blue-600 text-white text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Got a Software Problem?</h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Let Logisence turn your tech troubles into triumphs. Contact us for a custom solution today!
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg sm:text-xl font-semibold hover:bg-blue-100 transition-all duration-300 shadow-lg"
        >
          Solve My Problem Now
        </a>
      </section>

    </div>
  );
};

export default Home;