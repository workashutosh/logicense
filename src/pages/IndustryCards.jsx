import React from 'react';
import {
  Activity,
  ShoppingCart,
  Home,
  Book,
  Newspaper,
  Truck,
  Plane,
  Leaf,
  Car,
  Factory,
  Heart,
  Utensils,
  Film,
  MapPin,
  Bike,
} from 'lucide-react';

const IndustryCards = () => {
  const industries = [
    { 
      name: 'On Demand',
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-50 to-blue-100 border-blue-200',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'eCommerce',
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-100 to-blue-200 border-blue-300',
      position: 'col-span-1 row-span-1',
      centered: true
    },
    { 
      name: 'Real Estate',
      icon: <Home className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-50 to-blue-100 border-blue-200',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Education',
      icon: <Book className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-200 to-blue-300 border-blue-400',
      position: 'col-span-1 row-span-1',
      centered: true
    },
    { 
      name: 'News',
      icon: <Newspaper className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-300 to-blue-400 border-blue-500',
      position: 'col-span-2 row-span-1',
      centered: true
    },
    { 
      name: 'Logistics',
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-200 to-blue-300 border-blue-400',
      position: 'col-span-1 row-span-1',
      centered: true
    },
    { 
      name: 'Aviation',
      icon: <Plane className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-50 to-blue-100 border-blue-200',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Agriculture',
      icon: <Leaf className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-100 to-blue-200 border-blue-300',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Automotive',
      icon: <Car className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-50 to-blue-100 border-blue-200',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Manufacturing',
      icon: <Factory className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-100 to-blue-200 border-blue-300',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Healthcare',
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-200 to-blue-300 border-blue-400',
      position: 'col-span-1 row-span-1',
      centered: true
    },
    { 
      name: 'Restaurant',
      icon: <Utensils className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-300 to-blue-400 border-blue-500',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Entertainment',
      icon: <Film className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-50 to-blue-100 border-blue-200',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Travel',
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-100 to-blue-200 border-blue-300',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'E-scooter',
      icon: <Bike className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-50 to-blue-100 border-blue-200',
      position: 'col-span-4 row-span-1'
    },
  ];

  return (
<section 
id='industry-section'
className="relative py-16 px-4">
      {/* Grid background */}
      <div 
        className="absolute overflow-hidden inset-0 -z-10 h-full w-full"
        style={{
          backgroundColor: '#fafafa',
          backgroundImage: 'linear-gradient(to right, rgba(128, 128, 128, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.04) 1px, transparent 1px)',
          backgroundSize: '14px 24px'
        }}
      ></div>      <div className="max-w-8xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Diverse Capabilities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deploying customized solutions for a wide range of industries
          </p>
        </div>
        
        {/* Grid layout - with subtle gaps between elements */}
        <div className="hidden lg:grid grid-cols-12 gap-3">
          {/* Row 1 */}
          <div className={`col-span-4 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[0].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex items-center p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                {industries[0].icon}
              </div>
              <span className="text-gray-800 font-medium text-lg">{industries[0].name}</span>
            </div>
          </div>
          
          <div className={`col-span-1 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[1].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex flex-col items-center justify-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                {industries[1].icon}
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">{industries[1].name}</span>
            </div>
          </div>
          
          <div className={`col-span-4 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[2].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex items-center p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                {industries[2].icon}
              </div>
              <span className="text-gray-800 font-medium text-lg">{industries[2].name}</span>
            </div>
          </div>
          
          <div className={`col-span-1 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[3].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex flex-col items-center justify-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                {industries[3].icon}
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">{industries[3].name}</span>
            </div>
          </div>
          
          <div className={`col-span-2 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[4].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex flex-col items-center justify-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                {industries[4].icon}
              </div>
              <span className="text-gray-800 font-medium text-center">{industries[4].name}</span>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className={`col-span-1 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[5].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex flex-col items-center justify-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                {industries[5].icon}
              </div>
              <span className="text-gray-800 font-medium text-center text-sm">{industries[5].name}</span>
            </div>
          </div>
          
          <div className={`col-span-4 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[6].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex items-center p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                {industries[6].icon}
              </div>
              <span className="text-gray-800 font-medium text-lg">{industries[6].name}</span>
            </div>
          </div>
          
          <div className={`col-span-4 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[7].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex items-center p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                {industries[7].icon}
              </div>
              <span className="text-gray-800 font-medium text-lg">{industries[7].name}</span>
            </div>
          </div>
          
          <div className={`col-span-3 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[10].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex flex-col items-center justify-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                {industries[10].icon}
              </div>
              <span className="text-gray-800 font-medium text-center">{industries[10].name}</span>
            </div>
          </div>
          
          {/* Row 3 */}
          <div className={`col-span-2 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[8].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex items-center p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                {industries[8].icon}
              </div>
              <span className="text-gray-800 font-medium">{industries[8].name}</span>
            </div>
          </div>
          
          <div className={`col-span-6 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[9].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex items-center p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                {industries[9].icon}
              </div>
              <span className="text-gray-800 font-medium text-lg">{industries[9].name}</span>
            </div>
          </div>
          
          <div className={`col-span-4 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[11].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex items-center p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                {industries[11].icon}
              </div>
              <span className="text-gray-800 font-medium text-lg">{industries[11].name}</span>
            </div>
          </div>
          
          {/* Row 4 */}
          <div className={`col-span-4 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[12].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex items-center p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                {industries[12].icon}
              </div>
              <span className="text-gray-800 font-medium text-lg">{industries[12].name}</span>
            </div>
          </div>
          
          <div className={`col-span-2 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[13].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex items-center p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                {industries[13].icon}
              </div>
              <span className="text-gray-800 font-medium">{industries[13].name}</span>
            </div>
          </div>
          
          <div className={`col-span-6 h-28 rounded-lg overflow-hidden bg-gradient-to-br ${industries[14].color} border shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="h-full flex items-center p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                {industries[14].icon}
              </div>
              <span className="text-gray-800 font-medium text-lg">{industries[14].name}</span>
            </div>
          </div>
        </div>
        
        {/* Mobile view */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`h-24 rounded-lg overflow-hidden bg-gradient-to-br ${industry.color} border shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              {industry.centered ? (
                <div className="h-full flex flex-col items-center justify-center p-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                    {industry.icon}
                  </div>
                  <span className="font-medium text-center text-gray-800">
                    {industry.name}
                  </span>
                </div>
              ) : (
                <div className="h-full flex items-center p-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4">
                    {industry.icon}
                  </div>
                  <span className="font-medium text-gray-800">
                    {industry.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;