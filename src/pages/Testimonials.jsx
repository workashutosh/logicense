import React, { useState, useRef, useEffect } from 'react';
import { Star, Quote, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

const TestimonialCards = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  
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
      const newPosition = scrollRef.current.scrollLeft;
      setScrollPosition(newPosition);
      
      // Calculate which testimonial is most visible
      const cardWidth = scrollRef.current.clientWidth;
      const newIndex = Math.round(newPosition / cardWidth);
      setActiveIndex(Math.min(newIndex, testimonials.length - 1));
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative py-16 px-4">
      {/* Grid background */}
      <div 
        className="absolute overflow-hidden inset-0 -z-10 h-full w-full"
        style={{
          backgroundColor: '#fafafa',
          backgroundImage: 'linear-gradient(to right, rgba(128, 128, 128, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.04) 1px, transparent 1px)',
          backgroundSize: '14px 24px'
        }}
      ></div>
      
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">Problems Solved, Clients Happy</h2>
        
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

          {/* Scrollable testimonials container with custom scrollbar hiding */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{
              msOverflowStyle: 'none', /* IE and Edge */
              scrollbarWidth: 'none', /* Firefox */
            }}
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
          
          {/* Mobile scroll indicator dots */}
          <div className="mt-4 flex justify-center items-center md:hidden">
            {testimonials.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2 w-2 rounded-full mx-1 ${idx === activeIndex ? 'bg-blue-600' : 'bg-blue-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS for hiding scrollbars using a React approach
const TestimonialCarousel = () => {
  useEffect(() => {
    // Add custom style to hide scrollbars
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <TestimonialCards />;
};

export default TestimonialCarousel;