import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = ({ registerSection }) => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const contacts = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'amaanchau7@gmail.com', 
      href: 'mailto:amaanchau7@gmail.com', 
      color: 'from-blue-500/20 to-cyan-500/20' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: '/in/amaan-chaudhry', 
      href: 'https://www.linkedin.com/in/amaan-chaudhry/', 
      color: 'from-blue-600/20 to-blue-700/20' 
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: '@amaanchau', 
      href: 'https://github.com/amaanchau', 
      color: 'from-gray-600/20 to-gray-800/20' 
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      registerSection('contact', sectionRef.current);
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
      id="contact" 
      className="py-32 px-4 relative overflow-hidden"
    >
      {/* Enhanced Dark Gradient Background with seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 animate-gradient-shift"></div>
      
      {/* Background Elements with parallax effect */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-200 parallax-bg" style={{ transform: `translateY(${scrollY * 0.02}px)` }}></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-400 parallax-bg" style={{ transform: `translateY(${scrollY * -0.02}px)` }}></div>
      
      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6 animate-fade-in-down hover:tracking-wide transition-all duration-700 cursor-default">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mb-8 animate-scale-in delay-300"></div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-500 hover:text-white transition-colors duration-500 cursor-default">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="group relative p-8 rounded-2xl transition-all duration-700 hover:scale-105 animate-fade-in-up bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 overflow-hidden"
              style={{ animationDelay: `${index * 200 + 800}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
                  <contact.icon size={32} className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-light mb-3 text-white group-hover:text-gray-100 transition-colors duration-500">
                  {contact.label}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-500 font-medium">
                  {contact.value}
                </p>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </a>
          ))}
        </div>

        <div className="text-center animate-fade-in-up delay-1000">
          <a 
            href="mailto:amaanchau7@gmail.com?subject=Let's Work Together - Portfolio Inquiry"
            className="group relative inline-block px-12 py-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-2xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-700 hover:scale-105 hover:shadow-2xl text-xl font-semibold backdrop-blur-sm overflow-hidden"
          >
            <span className="relative z-10">Start a Conversation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          </a>
        </div>
      </div>

      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay-bottom"></div>
    </section>
  );
};

export default ContactSection;
