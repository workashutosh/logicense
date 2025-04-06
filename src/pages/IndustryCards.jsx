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
      icon: <Activity className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#68BBE3]',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'eCommerce',
      icon: <ShoppingCart className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#0E86D4]',
      position: 'col-span-1 row-span-1',
      centered: true
    },
    { 
      name: 'Real Estate',
      icon: <Home className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#68BBE3]',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Education',
      icon: <Book className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#055C9D]',
      position: 'col-span-1 row-span-1',
      centered: true
    },
    { 
      name: 'News',
      icon: <Newspaper className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#003060]',
      position: 'col-span-2 row-span-1',
      centered: true
    },
    { 
      name: 'Logistics',
      icon: <Truck className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#055C9D]',
      position: 'col-span-1 row-span-1',
      centered: true
    },
    { 
      name: 'Aviation',
      icon: <Plane className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#68BBE3]',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Agriculture',
      icon: <Leaf className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#0E86D4]',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Automotive',
      icon: <Car className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#68BBE3]',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Manufacturing',
      icon: <Factory className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#0E86D4]',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Healthcare',
      icon: <Heart className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#055C9D]',
      position: 'col-span-1 row-span-1',
      centered: true
    },
    { 
      name: 'Restaurant',
      icon: <Utensils className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#003060]',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Entertainment',
      icon: <Film className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#68BBE3]',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'Travel',
      icon: <MapPin className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#0E86D4]',
      position: 'col-span-4 row-span-1'
    },
    { 
      name: 'E-scooter',
      icon: <Bike className="w-5 h-5 text-gray-700" />,
      color: 'bg-[#68BBE3]',
      position: 'col-span-4 row-span-1'
    },
  ];

  return (
    <div className="w-full px-3 bg-gray-800 py-12"
    style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}
    >
      <h1 className="text-3xl font-bold text-blue-500 mb-6 text-left px-4 py-3">Diverse Capabilities 
        <span className='font-thin ml-2'>that deployes customized solutions for wide range of industries</span></h1>
      
      {/* Grid layout - no gaps between elements */}
      <div className="hidden lg:grid grid-cols-12 font-bold gap-2">
        {/* Row 1 */}
        <div className={`col-span-4 h-28 rounded-lg overflow-hidden ${industries[0].color} `}>
          <div className="h-full flex items-center p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              {industries[0].icon}
            </div>
            <span className="text-white font-bold">{industries[0].name}</span>
          </div>
        </div>
        
        <div className={`col-span-1 h-28 rounded-lg overflow-hidden ${industries[1].color} `}>
          <div className="h-full flex flex-col items-center justify-center p-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
              {industries[1].icon}
            </div>
            <span className="text-white font-bold text-center text-sm">{industries[1].name}</span>
          </div>
        </div>
        
        <div className={`col-span-4 h-28 rounded-lg overflow-hidden ${industries[2].color} `}>
          <div className="h-full flex items-center p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              {industries[2].icon}
            </div>
            <span className="text-white font-bold">{industries[2].name}</span>
          </div>
        </div>
        
        <div className={`col-span-1 h-28 rounded-lg overflow-hidden ${industries[3].color} `}>
          <div className="h-full flex flex-col items-center justify-center p-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
              {industries[3].icon}
            </div>
            <span className="text-white font-bold text-center text-sm">{industries[3].name}</span>
          </div>
        </div>
        
        <div className={`col-span-2 h-28 rounded-lg overflow-hidden ${industries[4].color} `}>
          <div className="h-full flex flex-col items-center justify-center p-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
              {industries[4].icon}
            </div>
            <span className="text-white font-bold text-center">{industries[4].name}</span>
          </div>
        </div>
        
        {/* Row 2 */}
        <div className={`col-span-1 h-28 rounded-lg overflow-hidden ${industries[5].color} `}>
          <div className="h-full flex flex-col items-center justify-center p-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
              {industries[5].icon}
            </div>
            <span className="text-white font-bold text-center text-sm">{industries[5].name}</span>
          </div>
        </div>
        
        <div className={`col-span-4 h-28 rounded-lg overflow-hidden ${industries[6].color} `}>
          <div className="h-full flex items-center p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              {industries[6].icon}
            </div>
            <span className="text-white font-bold">{industries[6].name}</span>
          </div>
        </div>
        
        <div className={`col-span-4 h-28 rounded-lg overflow-hidden ${industries[7].color} `}>
          <div className="h-full flex items-center p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              {industries[7].icon}
            </div>
            <span className="text-white font-bold">{industries[7].name}</span>
          </div>
        </div>
        
        <div className={`col-span-3 h-28 rounded-lg overflow-hidden ${industries[10].color} `}>
          <div className="h-full flex flex-col items-center justify-center p-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
              {industries[10].icon}
            </div>
            <span className="text-white font-bold text-center">{industries[10].name}</span>
          </div>
        </div>
        
        {/* Row 3 */}
        <div className={`col-span-2 h-28 rounded-lg overflow-hidden ${industries[8].color} `}>
          <div className="h-full flex items-center p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              {industries[8].icon}
            </div>
            <span className="text-white font-bold">{industries[8].name}</span>
          </div>
        </div>
        
        <div className={`col-span-6 h-28 rounded-lg overflow-hidden ${industries[9].color} `}>
          <div className="h-full flex items-center p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              {industries[9].icon}
            </div>
            <span className="text-white font-bold">{industries[9].name}</span>
          </div>
        </div>
        
        <div className={`col-span-4 h-28 rounded-lg overflow-hidden ${industries[11].color} `}>
          <div className="h-full flex items-center p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              {industries[11].icon}
            </div>
            <span className="text-white font-bold">{industries[11].name}</span>
          </div>
        </div>
        
        {/* Row 4 */}
        <div className={`col-span-4 h-28 rounded-lg overflow-hidden ${industries[12].color} `}>
          <div className="h علیه-full flex items-center p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              {industries[12].icon}
            </div>
            <span className="text-white font-bold">{industries[12].name}</span>
          </div>
        </div>
        
        <div className={`col-span-2 h-28 rounded-lg overflow-hidden ${industries[13].color} `}>
          <div className="h-full flex items-center p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              {industries[13].icon}
            </div>
            <span className="text-white font-bold">{industries[13].name}</span>
          </div>
        </div>
        
        <div className={`col-span-6 h-28 rounded-lg overflow-hidden ${industries[14].color} `}>
          <div className="h-full flex items-center p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
              {industries[14].icon}
            </div>
            <span className="text-white font-bold">{industries[14].name}</span>
          </div>
        </div>
      </div>
      
      {/* Mobile view */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-2">
        {industries.map((industry, index) => (
          <div 
            key={index} 
            className={`h-24 rounded-lg overflow-hidden ${industry.color} `}
          >
            {industry.centered ? (
              <div className="h-full flex flex-col items-center justify-center p-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                  {industry.icon}
                </div>
                <span className="font-bold text-center text-white">
                  {industry.name}
                </span>
              </div>
            ) : (
              <div className="h-full flex items-center p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-3">
                  {industry.icon}
                </div>
                <span className="font-bold text-white">
                  {industry.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryCards;