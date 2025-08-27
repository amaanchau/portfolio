import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Add custom CSS for advanced animations
const customStyles = `
  @keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
  }
  
  @keyframes glitch {
    0%, 100% { transform: translate(0); }
    10% { transform: translate(-2px, -1px); }
    20% { transform: translate(2px, 1px); }
    30% { transform: translate(-1px, 2px); }
    40% { transform: translate(1px, -1px); }
    50% { transform: translate(-2px, 2px); }
    60% { transform: translate(2px, -2px); }
    70% { transform: translate(-1px, -1px); }
    80% { transform: translate(1px, 1px); }
    90% { transform: translate(-2px, 1px); }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .gradient-hover {
    background: linear-gradient(-45deg, #000000, #1a1a1a, #2a2a2a, #1a1a1a);
    background-size: 400% 400%;
    transition: all 0.3s ease;
  }
  
  .gradient-hover:hover {
    animation: gradientShift 2s ease infinite;
  }
  
  .ripple-effect {
    position: relative;
    overflow: hidden;
  }
  
  .ripple-effect::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  .ripple-effect:hover::before {
    width: 300px;
    height: 300px;
  }

  /* Smooth scrolling for the entire page */
  html {
    scroll-behavior: smooth;
  }

  /* Section transition overlays */
  .section-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
    pointer-events: none;
    z-index: 10;
  }

  .section-overlay-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    pointer-events: none;
    z-index: 10;
  }

  /* Parallax effect for background elements */
  .parallax-bg {
    transform: translateZ(0);
    will-change: transform;
  }

  /* Enhanced scroll indicator */
  .scroll-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255,255,255,0.1);
    z-index: 1000;
  }

  .scroll-progress {
    height: 100%;
    background: linear-gradient(90deg, #ef4444, #dc2626);
    width: 0%;
    transition: width 0.1s ease;
  }
`;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollY(scrollY);
      
      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = Object.keys(sectionRefs.current);
      let currentSection = 'home';
      
      sections.forEach(sectionId => {
        const element = sectionRefs.current[sectionId];
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Offset for better detection
          
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = sectionId;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const registerSection = (sectionId, element) => {
    sectionRefs.current[sectionId] = element;
  };

  return (
    <>
      <style>{customStyles}</style>
      
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="min-h-screen transition-all duration-500 dark bg-gray-900 text-white relative">
        <Navigation 
          activeSection={activeSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollY={scrollY}
          scrollToSection={scrollToSection}
        />
        
        <HomeSection 
          scrollToSection={scrollToSection} 
          registerSection={registerSection}
        />
        <AboutSection registerSection={registerSection} />
        <EducationSection registerSection={registerSection} />
        <ExperienceSection registerSection={registerSection} />
        <ProjectsSection registerSection={registerSection} />
        <ContactSection registerSection={registerSection} />
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;