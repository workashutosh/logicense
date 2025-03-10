import React from 'react';
import { motion } from 'framer-motion';

const TransformIdeasBanner = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-r from-[#E6F0FA] to-[#F0F5FF] rounded-lg shadow-md overflow-hidden">
      <motion.div 
        className="max-w-[90%] sm:max-w-[85%] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center lg:text-left w-full lg:w-1/2 max-w-md"
          initial="hidden"
          animate="visible"
          variants={leftVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
            Transform Your Ideas Today
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-600">
            Schedule a meeting and take the first step toward creating a digital solution that drives your business forward.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-end w-full lg:w-1/2 gap-4 sm:gap-6"
          initial="hidden"
          animate="visible"
          variants={rightVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img
            src="https://oxlac.com/images/shape/shape-06.png"
            alt="Rocket illustration"
            className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain"
            loading="lazy"
          />
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 bg-gray-900 text-white rounded-full text-sm sm:text-base lg:text-base hover:bg-gray-800 transition-colors duration-200"
          >
            Schedule a meeting <span className="ml-1 sm:ml-2">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TransformIdeasBanner;