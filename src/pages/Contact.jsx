import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen font-sans bg-cover bg-center" style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}>
      <section className="py-20 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-12">Contact Us</h1>
        <div className="max-w-2xl mx-auto bg-white/10 rounded-lg p-6 backdrop-blur-md">
          <form className="space-y-6">
            <div>
              <label className="block text-blue-900 mb-2">Name</label>
              <input type="text" className="w-full p-3 bg-white/5 rounded-lg text-white border border-gray-700 focus:border-blue-400 outline-none" />
            </div>
            <div>
              <label className="block text-blue-900 mb-2">Email</label>
              <input type="email" className="w-full p-3 bg-white/5 rounded-lg text-white border border-gray-700 focus:border-blue-400 outline-none" />
            </div>
            <div>
              <label className="block text-blue-900 mb-2">Message</label>
              <textarea className="w-full p-3 bg-white/5 rounded-lg text-white border border-gray-700 focus:border-blue-400 outline-none h-32"></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-500 transition-all duration-300">Send Message</button>
          </form>
          <p className="mt-6 text-blue-900 text-center">Or reach us at: <a href="mailto:info@Logisence.com" className="text-blue-600">info@Logisence.com</a> | +91-XXXXXXXXXX</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;