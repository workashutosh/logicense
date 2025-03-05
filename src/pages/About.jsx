import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen font-sans bg-cover bg-center" style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}>
      <section className="py-20 px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12">About Logisence</h1>
        <p className="text-lg md:text-xl text-blue-900 max-w-3xl mx-auto">
          Based in Mumbai, *Logisence* is a passionate team of developers and designers dedicated to turning your ideas into digital masterpieces. With years of experience in web development, app creation, and custom software, we blend creativity with cutting-edge technology to deliver results that matter.
        </p>
        <p className="mt-6 text-blue-900">Our mission? To empower Mumbai businesses with affordable, elegant, and high-performance solutions.</p>
        <div className="mt-12">
          <a href="/contact" className="px-8 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-500 transition-all duration-300">Meet the Team</a>
        </div>
      </section>
    </div>
  );
};

export default About;