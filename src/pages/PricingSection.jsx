import React, { useState, useEffect } from 'react';

const PricingSection = () => {
  // Array of image URLs - you can add more images here
  const images = [
    'https://cdn.dribbble.com/userupload/7169218/file/original-88465ea25a28a1e9490604633582032b.png?resize=2048x1536&vertical=center',
    'https://cdn.dribbble.com/userupload/33611171/file/original-80c37ec5aa772f28cccd9e9bff8e796a.png?resize=1504x1496&vertical=center',
    'https://cdn.dribbble.com/userupload/7480349/file/original-7e2f4bc653aeea5038f03acad8af9658.png?resize=2048x1536&vertical=center', 
    'https://cdn.dribbble.com/userupload/38351112/file/original-04fafa5a4f384ef4a2d17b3245812d0e.png?resize=2048x1538&vertical=center'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <h3 className='text-left py-4 px-8 text-2xl bg-black text-blue-300 font-bold'>Designs on your FingerTips ?</h3>
      {/* PricingSection Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="w-full flex-shrink-0"
          >
            <img 
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-fit object-cover"
              onError={(e) => {
                // Fallback for the Dribbble URL that's not a direct image
                e.target.src = 'https://via.placeholder.com/1500x500?text=Image+Not+Available';
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;