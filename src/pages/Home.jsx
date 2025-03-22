import React from 'react';
import Services from './Services';
import Features from './Features';
import TransformIdeasSection from './TransformIdeasSection';
import PricingSection from './PricingSection';
import Testimonials from './Testimonials';
import Button from './MainContactButton';
import { Star, Quote, Calendar, ChevronRight, CheckCircle, Users, Clock, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen font-sans bg-cover bg-center" style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}>

      {/* Main Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-blue-600 mb-6 tracking-tight animate-fade-in">
            Supercharged Tech to Skyrocket Your Business
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-900 mb-8 max-w-2xl mx-auto">
          Ditch the software stress. We craft bold, custom solutions that crush your tech headaches and turbocharge your growth.          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-45 items-center group-hover:opacity-100 blur-sm group-hover:blur-md transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
               <a
                href="/contact"
                className="relative px-6 py-3 text-white bg-blue-600 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
              >
                A discussion wont cost a dime <ChevronRight className="ml-2" size={20} />
              </a> 
              {/* <Button /> */}
            </div>
            
            {/* <a
              href="/contact"
              className="px-6 py-3 border border-blue-400 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 w-full sm:w-auto"
            >
              See Our Solutions
            </a> */}
          </div>
        </div>
      </main>

      {/* Services Section */}
      <Services />

      {/* Features Section */}
      <Features />

      {/* How We Solve Your Problems Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white/5 backdrop-blur-sm">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 sm:mb-12">How We Solve Your Software Challenges</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
    <div className="p-6 bg-white/30 rounded-lg hover:bg-white/15 transition-all shadow-md shadow-blue-300/20 duration-300 border border-blue-100/10">
      <h3 className="text-xl font-semibold text-white mb-2">Struggling with Slow Systems?</h3>
      <p className="text-white text-base">
        We've cut load times from 8+ seconds to under 2, boosting user engagement by 35%. We fix the real issues at the source, not just the symptoms.
      </p>
    </div>
    
    <div className="p-6 bg-white/30 rounded-lg hover:bg-white/15 transition-all shadow-md shadow-blue-300/20 duration-300 border border-blue-100/10">
      <h3 className="text-xl font-semibold text-white mb-2">Trapped by Outdated Technology?</h3>
      <p className="text-white text-base">
        One client recovered $12,000 monthly after our updates. We reimagine what's possible while preserving your existing data and workflows.
      </p>
    </div>
    
    <div className="p-6 bg-white/20 rounded-lg hover:bg-white/15 transition-all shadow-md shadow-blue-300/20 duration-300 border border-blue-100/10">
      <h3 className="text-xl font-semibold text-white mb-2">Drowning in Complex Processes?</h3>
      <p className="text-white text-base">
        We turned 23 hours of weekly manual work into just 2 for a marketing agency. Focus on strategy, not spreadsheets.
      </p>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6  md:px-8 bg-blue-600 text-white">
  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
    <div className="flex flex-col  items-center">
      <Users size={40} className="mb-2" />
      <h3 className="text-2xl sm:text-3xl font-bold mt-2">500+</h3>
      <p className="text-base sm:text-lg">Happy Clients</p>
    </div>
    
    <div className="flex flex-col items-center">
      <Clock size={40} className="mb-2" />
      <h3 className="text-2xl sm:text-3xl font-bold mt-2">7 Days</h3>
      <p className="text-base sm:text-lg">Fastest Delivery</p>
    </div>
    
    <div className="flex flex-col items-center">
      <Award size={40} className="mb-2" />
      <h3 className="text-2xl sm:text-3xl font-bold mt-2">Certified</h3>
      <p className="text-base sm:text-lg">Goverment ceritifed</p>
    </div>
    
    <div className="flex flex-col items-center">
      <CheckCircle size={40} className="mb-2" />
      <h3 className="text-2xl sm:text-3xl font-bold mt-2">99%</h3>
      <p className="text-base sm:text-lg">Satisfaction Rate</p>
    </div>
  </div>
</section>
      {/* Transform Ideas Section */}
      <TransformIdeasSection />

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

      {/* Our Process Section
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white/5 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-10 sm:mb-12">Our Process</h2>
        <div className="max-w-4xl mx-auto flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Discovery</h3>
              <p className="text-blue-800 text-sm sm:text-base">We analyze your needs and challenges to create a tailored plan.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Development</h3>
              <p className="text-blue-800 text-sm sm:text-base">Our team builds your solution with precision and speed.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Delivery & Support</h3>
              <p className="text-blue-800 text-sm sm:text-base">We launch your product and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white/5 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-10 sm:mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">How fast can you deliver my project?</h3>
            <p className="mt-2 text-blue-800 text-sm sm:text-base">We can deliver solutions in as little as 7 days, depending on the complexity.</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Do you offer custom solutions?</h3>
            <p className="mt-2 text-blue-800 text-sm sm:text-base">Yes, every project is tailored to your specific business needs.</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">What if I need support after launch?</h3>
            <p className="mt-2 text-blue-800 text-sm sm:text-base">We provide 24/7 support to ensure your software runs smoothly.</p>
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
          Contact Us <ChevronRight className="inline ml-2" size={24} />
        </a>
      </section>

    </div>
  );
};

export default Home;