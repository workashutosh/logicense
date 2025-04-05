import React from 'react';
import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  Truck, 
  UserPlus, 
  Briefcase, 
  LineChart, 
  ShoppingCart, 
  LayoutDashboard, 
  PieChart, 
  Smartphone, 
  Code2, 
  Globe, 
  ShoppingBag, 
  FileText, 
  Bitcoin, 
  Brain, 
  Glasses 
} from 'lucide-react';

const Services = () => {
  // Text animation code
  const phrases = ["Craft", "Design", "Connect", "Develop", "Build", "Deploy", "Scale", "Innovate"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(text.substring(0, text.length - 1));
        setTypingSpeed(80);
        
        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
          setTypingSpeed(150);
        }
      } 
      else {
        const currentPhrase = phrases[currentIndex];
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(150);
        
        if (text === currentPhrase) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, currentIndex, isDeleting, typingSpeed, phrases]);

  // Services data with Lucide icons
  const services = [
    {
      icon: <BarChart3 size={18} className="text-blue-600" />,
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Streamline operations with integrated solutions connecting all aspects of your business.',
    },
    {
      icon: <Users size={18} className="text-blue-600" />,
      title: 'Customer Relationship Management (CRM)',
      description: 'Build stronger customer relationships with customizable systems to improve engagement.',
    },
    {
      icon: <Truck size={18} className="text-blue-600" />,
      title: 'Supply Chain Management (SCM)',
      description: 'Optimize supply chains with end-to-end solutions for visibility and control.',
    },
    {
      icon: <UserPlus size={18} className="text-blue-600" />,
      title: 'Human Resource Management (HRM)',
      description: 'Empower HR teams with tools for recruitment, onboarding, and performance tracking.',
    },
    {
      icon: <Briefcase size={18} className="text-blue-600" />,
      title: 'Project Management Software',
      description: 'Keep projects on track with intuitive tools for planning and collaboration.',
    },
    {
      icon: <LineChart size={18} className="text-blue-600" />,
      title: 'Marketing Automation Software',
      description: 'Elevate marketing with smart tools for streamlined, personalized campaigns.',
    },
    {
      icon: <ShoppingCart size={18} className="text-blue-600" />,
      title: 'Sales Automation & POS Systems',
      description: 'Accelerate sales cycles with powerful point-of-sale and automation tools.',
    },
    {
      icon: <LayoutDashboard size={18} className="text-blue-600" />,
      title: 'Business Intelligence Dashboards',
      description: 'Transform data into actionable insights for informed decision-making.',
    },
    {
      icon: <PieChart size={18} className="text-blue-600" />,
      title: 'Data Visualization Tools',
      description: 'Present complex data clearly to help stakeholders make data-driven decisions.',
    },
    {
      icon: <Smartphone size={18} className="text-blue-600" />,
      title: 'Native & Cross-Platform Mobile Apps',
      description: 'Engage users across devices with high-performance mobile applications.',
    },
    {
      icon: <Code2 size={18} className="text-blue-600" />,
      title: 'Custom Web Applications',
      description: 'Create tailored web solutions solving unique business challenges.',
    },
    {
      icon: <Globe size={18} className="text-blue-600" />,
      title: 'Web Portals',
      description: 'Build secure, feature-rich portals connecting customers, partners and employees.',
    },
    {
      icon: <ShoppingBag size={18} className="text-blue-600" />,
      title: 'E-commerce Platforms',
      description: 'Launch and scale your online business with customizable shopping experiences.',
    },
    {
      icon: <FileText size={18} className="text-blue-600" />,
      title: 'Content Management Systems',
      description: 'Manage digital content efficiently with flexible publishing solutions.',
    },
    {
      icon: <Bitcoin size={18} className="text-blue-600" />,
      title: 'Blockchain Applications',
      description: 'Harness blockchain technology for enhanced security and transparency.',
    },
    {
      icon: <Brain size={18} className="text-blue-600" />,
      title: 'AI & Machine Learning Solutions',
      description: 'Implement intelligent systems that adapt to your needs and automate processes.',
    },
    {
      icon: <Glasses size={18} className="text-blue-600" />,
      title: 'VR & AR Applications',
      description: 'Create immersive experiences transforming how users interact with your products.',
    },
  ];

  return (
    <section id="services" className="py-14 md:py-16 bg-white"
    style={{ backgroundImage: 'url("https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg")' }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="mb-10">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full uppercase mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl text-left font-bold text-gray-900 mb-4">
            Bring Your Business Vision to Life.{" "}
            <span className="inline-flex">
              <span className="mr-2">Software Solutions We</span>
              <span className="text-transparent font-light bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 min-w-20">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-left">
            Tired of being boxed in by one-size-fits-all solutions? At Logicense, we shatter the mold and craft software that bends to your vision, not the other way around. Dive into a world of tailored innovation with these exciting offerings:
          </p>
        </div>

        {/* Services Grid with Lucide icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-blue-500 pl-4 py-3 pr-3 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Service Icon and Title in same row */}
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-50 rounded-sm flex items-center justify-center mr-3">
                  {service.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                  {service.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-xs text-gray-600 mt-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;