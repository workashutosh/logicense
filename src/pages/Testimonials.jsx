import React, { useState, useRef } from 'react';
import { Star, Quote, Calendar, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const TestimonialCards = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const testimonials = [
    {
      initials: "PS",
      name: "Priya Sharma",
      role: "Mumbai Retail Owner",
      quote: "Logisence fixed our slow website in just a week when other developers said it would take months. Since the optimization, our page load time dropped from 8 seconds to under 2, and our online sales have increased by 50%. Their team was professional and kept me updated daily.",
      since: "April 2024"
    },
    {
      initials: "RK",
      name: "Rohan Kapoor",
      role: "Founder, TechVenture",
      quote: "Their custom CRM app solved our customer tracking issues overnight. We went from using spreadsheets to having a fully integrated solution that our entire team loves. The onboarding was smooth, and their support team is always available. Amazing return on investment!",
      since: "November 2023"
    },
    {
      initials: "AJ",
      name: "Ananya Joshi",
      role: "E-commerce Director",
      quote: "The inventory management system Logisence built for us has reduced errors by 85% and saved us countless hours. Their understanding of our business needs was impressive, and they delivered exactly what we needed.",
      since: "January 2024"
    },
    {
      initials: "MT",
      name: "Mihir Thapar",
      role: "Healthcare Solutions",
      quote: "Their patient scheduling portal transformed our clinic's operations. Wait times are down, patient satisfaction is up, and our staff is thrilled with how intuitive the system is. Best tech investment we've ever made.",
      since: "August 2024"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-10 sm:mb-16">Problems Solved, Clients Happy</h2>
        
        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={scrollLeft} 
              className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-blue-600" />
            </button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={scrollRight} 
              className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-blue-600" />
            </button>
          </div>

          {/* Scrollable testimonials container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar"
            onScroll={handleScroll}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="min-w-full sm:min-w-[80%] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-16px)] p-2 snap-start"
              >
                <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden transition-all hover:shadow-xl">
                  <div className="p-6 pb-2 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold text-xl">{testimonial.initials}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-4 flex text-yellow-400">
                      <Star size={20} fill="currentColor" strokeWidth={0} />
                      <Star size={20} fill="currentColor" strokeWidth={0} />
                      <Star size={20} fill="currentColor" strokeWidth={0} />
                      <Star size={20} fill="currentColor" strokeWidth={0} />
                      <Star size={20} fill="currentColor" strokeWidth={0} />
                    </div>
                    <div className="relative flex-1">
                      <Quote size={24} className="text-blue-100 absolute -left-1 -top-1" />
                      <blockquote className="text-blue-800 italic text-base sm:text-lg leading-relaxed pl-6">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="mt-4 flex items-center">
                      <Calendar size={16} className="text-blue-500 mr-2" />
                      <p className="text-sm text-gray-600">Client since: {testimonial.since}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="mt-4 flex justify-center items-center md:hidden">
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2 w-2 rounded-full mx-1 ${idx === Math.round(scrollPosition / (scrollRef.current?.clientWidth || 1)) ? 'bg-blue-600' : 'bg-blue-200'}`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

// Add this CSS class to hide scrollbars while maintaining functionality
const style = document.createElement('style');
style.textContent = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`;
document.head.appendChild(style);

export default TestimonialCards;