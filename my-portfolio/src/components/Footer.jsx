import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <footer className="py-16 px-4 border-t border-gray-800 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements with parallax effect */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl parallax-bg" style={{ transform: `translateY(${scrollY * 0.01}px)` }}></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl parallax-bg" style={{ transform: `translateY(${scrollY * -0.01}px)` }}></div>
      
      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Bottom Section with enhanced animations */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in-up delay-300">
          <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-500">
            © {currentYear} Amaan Chaudhry. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span className="hover:text-gray-300 transition-colors duration-500">Crafted with</span>
            <Heart size={14} className="text-red-400 animate-pulse hover:scale-110 transition-transform duration-500" />
            <span className="hover:text-gray-300 transition-colors duration-500">and lots of</span>
            <Coffee size={14} className="text-amber-500 hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
