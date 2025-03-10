import React, { useEffect } from 'react';
import { Send, Calendar } from 'lucide-react';

const ContactSection = () => {
  // Add useEffect to initialize Calendly widget when component mounts
  useEffect(() => {
    // Add Calendly CSS if not already added
    if (!document.querySelector('link[href*="calendly"]')) {
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(linkElement);
    }

    // Add Calendly script if not already added
    if (!document.querySelector('script[src*="calendly"]')) {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://assets.calendly.com/assets/external/widget.js';
      scriptElement.async = true;
      document.body.appendChild(scriptElement);
    }

    // No cleanup needed here as we want to keep the Calendly scripts loaded
    // across components
  }, []);

  // Function to handle Calendly popup
  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/mashutoshh'});
    }
    return false;
  };

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47]"></div>
        
        <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          {/* Contact Form */}
          <div className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 md:w-3/5 lg:w-3/4 xl:p-15">
            <h2 className="mb-15 text-3xl font-semibold text-black xl:text-sectiontitle2">
              Contact Us
            </h2>
            
            <form>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  placeholder="Full name"
                  required
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2"
                  type="text"
                  name="Name"
                />
                <input
                  placeholder="Email address"
                  required
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2"
                  type="email"
                  name="Email"
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  placeholder="Hi, My business needs a ....."
                  name="Message"
                  required
                  rows="4"
                  className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none"
                />
              </div>

              {/* reCAPTCHA placeholder - you'll need to implement this separately */}
              <div className="mb-10">
                {/* Add your reCAPTCHA implementation here */}
              </div>

              <div className="flex justify-between items-center">
                <a 
                  href="#" 
                  onClick={openCalendly}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blue-700"
                >
                  <Calendar size={16} />
                  <span>Schedule a Meeting</span>
                </a>

                <button
                  type="submit"
                  disabled
                  aria-label="send message"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho"
                >
                  <span>Send</span>
                  <Send size={14} />
                </button>
              </div>
            </form>
          </div>

          {/* Find Us Section */}
          <div className="animate_top w-full md:w-2/5 p-7.5 md:p-7.5 lg:w-[26%] xl:pt-15">
            <h2 className="mb-12.5 text-3xl font-semibold text-black xl:text-sectiontitle2">
              Find us
            </h2>
            
            <div className="mb-7">
              <h3 className="mb-4 text-metatitle3 font-medium text-black">
                Our Location
              </h3>
              <p>Mumbai, India</p>
            </div>
            
            <div className="mb-7">
              <h3 className="mb-4 text-metatitle3 font-medium text-black">
                Email Address
              </h3>
              <p>
                <a href="mailto:contact@logicense.com">contact@logicense.com</a>
              </p>
            </div>
            
            <div className="mb-7">
              <h3 className="mb-4 text-metatitle3 font-medium text-black">
                Schedule a Call
              </h3>
              <p>
                <a 
                  href="#" 
                  onClick={openCalendly}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Calendar size={16} />
                  <span>Book a time with us</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;