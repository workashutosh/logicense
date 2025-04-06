import React from 'react';
import Services from './Services';
import Features from './Features';
import TransformIdeasSection from './TransformIdeasSection';
import PricingSection from './PricingSection';
import Testimonials from './Testimonials';
import About from './About';
import logo from "../assets/logo.png"; 
import { Star, Quote, Calendar, ChevronRight, CheckCircle, Users, Clock, Award } from 'lucide-react';
import Why from './Why';
import ComparisonTable from './ComparisonTable';
import SoftwareProcessTimeline from './SoftwareProcessTimeline';
import IndustryCards from './IndustryCards';

const Home = () => {
  return (
    <div className="" >

      {/* Main Hero Section */}
     <main className="font-sans  bg-center min-h-[570px]  flex flex-col items-left justify-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16"
     style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}
     >
      <div className="max-w-4xl w-full">

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-left lg:text-6xl font-bold text-blue-500 mb-4 tracking-tight animate-fade-in">
          Your business is <span className='text-blue-600'>unique</span> , so should your <span className='text-blue-600'>software</span>.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-blue-600 text-left mb-8 max-w-3xl">
          Let’s build a customized solution for your business needs.
        </p>

        {/* Call-to-action button */}
        <div className="flex flex-col sm:flex-row justify-left gap-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 border rounded-full opacity-45 group-hover:opacity-100 blur-sm group-hover:blur-md transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
            <a
              href="/contact"
              className="relative px-6 py-3 text-white bg-blue-800 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              Get Started Today  <img src={logo} alt="" className='h-6 w-6 ml-1 rotate-180' />
            </a>
          </div>
        </div>
      </div>
    </main>

      {/* About Section */}
      <About /> 

      {/* Why Choose Us Section */}
      <Why />

      {/* Comparison Table Section */}
      <ComparisonTable />

      {/* Services Section */}
      <Services />

      {/* Why custom software Section */}

      <section className='bg-[#006EFF] h-fit flex flex-col px-8 py-12 relative'>
  <div className="flex justify-between items-start mb-4">
    <h1 className='font-bold text-left text-3xl text-white'>Why custom software for your business?</h1>
    <a 
      href="/contact" 
      className="bg-white text-[#006EFF] px-6 py-3 rounded-md font-bold flex items-center transition-transform hover:translate-y-1 shadow-md"
    >
      Get a Free Consultation! 
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#006EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  </div>
  <p className='py-4 text-xl text-left text-white'>
    Spreadsheets might serve a purpose, but when it's time 
    to catapult your business to new heights, unlocking the full potential of data, 
    razor-sharp intelligence, cutting-edge analytics, and seamless automation—nothing rivals the 
    transformative power of a custom software solution. Prepare to revolutionize your operations and 
    leave the competition in the dust!
  </p>
      </section>

      {/* Software Process Timeline Section */}
      <SoftwareProcessTimeline />

      {/* Transform Ideas Section */}
      <TransformIdeasSection />

      {/* Industry Cards Section */}
      <IndustryCards />


      {/* Pricing Section */}
      <PricingSection />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

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