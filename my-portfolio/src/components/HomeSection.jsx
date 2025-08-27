import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HomeSection = ({ scrollToSection, registerSection }) => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      registerSection('home', sectionRef.current);
    }
  }, [registerSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Dark Gradient Background with seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 animate-gradient-shift"></div>
      
      {/* Animated Background Elements with parallax effect */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse parallax-bg" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000 parallax-bg" style={{ transform: `translateY(${scrollY * -0.1}px)` }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-500 parallax-bg" style={{ transform: `translateY(${scrollY * 0.05}px)` }}></div>
      
      {/* Enhanced Grid Pattern with animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full animate-pulse-slow">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-b border-gray-700"
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content with enhanced animations */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Enhanced Avatar with profile picture */}
          <div className="mb-8 relative">
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden shadow-2xl animate-scale-in delay-200 border-4 border-gray-600 hover:scale-110 hover:shadow-xl hover:shadow-white/10 transition-all duration-500 cursor-pointer group">
              <img 
                src="./src/assets/profile.jpg" 
                alt="Amaan Chaudhry" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Enhanced Typography with staggered animations */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white animate-fade-in-left delay-500 hover:tracking-wide transition-all duration-700 cursor-default">
              Amaan Chaudhry
            </h1>
          </div>

          {/* Enhanced Subtitle with blur-in effect */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-400 font-light animate-blur-in delay-700 hover:text-gray-300 transition-colors duration-500 cursor-default">
              Software Engineer & Tech Enthusiast
            </p>
          </div>

          {/* Enhanced Tech Stack with staggered animations */}
          <div className="mb-12 animate-fade-in-up delay-900">
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
              {['Frontend', 'Backend', 'Cloud', 'AI/ML', 'DevOps', 'Mobile', 'Database'].map((tech, index) => (
                <span
                  key={tech}
                  className="text-gray-500 text-sm font-medium tracking-wide hover:text-red-400 hover:scale-110 transition-all duration-500 cursor-pointer animate-fade-in-up relative group"
                  style={{ animationDelay: `${index * 0.2 + 1}s` }}
                >
                  {tech}
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
                </span>
              ))}
            </div>
          </div>

          {/* Call-to-Action Message */}
          <div className="mb-12 animate-fade-in-up delay-1100">
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              Ready to build something amazing? Let's connect and create software that transforms your vision into reality.
            </p>
          </div>

          {/* Enhanced Buttons with better hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-1000">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-400 hover:to-red-500 transition-all duration-500 flex items-center justify-center space-x-2 font-medium relative overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 backdrop-blur-sm"
            >
              <span className="relative z-10">View Work</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-3 border border-red-500/30 text-gray-300 rounded-lg hover:border-red-400 hover:text-white hover:bg-red-500/10 transition-all duration-500 font-medium relative overflow-hidden hover:scale-105 backdrop-blur-sm"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 border border-red-400/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-lg"></div>
            </button>
          </div>

          {/* Enhanced Scroll Indicator with better animation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer animate-bounce" onClick={() => scrollToSection('about')}>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-red-500/50 to-transparent animate-pulse group-hover:via-red-400 transition-colors duration-500"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 border-r border-b border-red-500 group-hover:border-red-400 rotate-45 transition-colors duration-500"></div>
          </div>
        </div>
      </div>

      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay-bottom"></div>
    </section>
  );
};

export default HomeSection;
