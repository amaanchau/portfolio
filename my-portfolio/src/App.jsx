import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [rockets, setRockets] = useState([]);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Calculate active section
      const sections = Object.entries(sectionRefs.current);
      let currentSection = 'home';

      sections.forEach(([id, ref]) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rocket animation effect for desktop
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024; // lg breakpoint
    if (!isDesktop) return;

    const createRocket = () => {
      const side = Math.random() > 0.5 ? 'left' : 'right';
      const rocket = {
        id: Date.now() + Math.random(),
        side,
        x: side === 'left' ? Math.random() * 30 + 5 : Math.random() * 30 + 65, // Keep rockets on sides
        y: 120, // Start from bottom
        speed: Math.random() * 2 + 1,
        size: Math.random() * 20 + 20,
        delay: Math.random() * 2000
      };
      return rocket;
    };

    const addRocket = () => {
      setRockets(prev => [...prev, createRocket()]);
    };

    // Add rockets periodically
    const interval = setInterval(addRocket, 4000); // Every 4 seconds

    // Animate rockets
    const animationInterval = setInterval(() => {
      setRockets(prev => 
        prev.map(rocket => ({
          ...rocket,
          y: rocket.y - rocket.speed
        })).filter(rocket => {
          if (rocket.y < -50) {
            return false; // Remove rocket when it goes off screen
          }
          return true;
        })
      );
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(animationInterval);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const ref = sectionRefs.current[sectionId];
    if (ref) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = ref.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const registerSection = (id, ref) => {
    sectionRefs.current[id] = ref;
  };

  return (
    <div className="App">
      {/* Global Styles */}
      <style jsx="true">{`
        html {
          scroll-behavior: smooth;
        }
        
        .section-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
          pointer-events: none;
          z-index: 5;
        }
        
        .section-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          pointer-events: none;
          z-index: 5;
        }
        
        .parallax-bg {
          will-change: transform;
        }
        
        .scroll-indicator {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }
        
        .scroll-progress {
          height: 100%;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          transition: width 0.1s ease;
        }

        .rocket {
          position: fixed;
          pointer-events: none;
          z-index: 10;
          animation: rocketFloat 3s ease-in-out infinite;
        }

        @keyframes rocketFloat {
          0%, 100% { transform: rotate(-45deg) translateY(0px); }
          50% { transform: rotate(-45deg) translateY(-5px); }
        }
      `}</style>

      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Rocket Animations for Desktop */}
      {rockets.map(rocket => (
        <div
          key={rocket.id}
          className="rocket"
          style={{
            left: `${rocket.x}%`,
            top: `${rocket.y}%`,
            fontSize: `${rocket.size}px`,
            transition: 'top 0.05s linear'
          }}
        >
          🚀
        </div>
      ))}

      <Navigation 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <HomeSection registerSection={registerSection} />
      <AboutSection registerSection={registerSection} />
      <EducationSection registerSection={registerSection} />
      <ExperienceSection registerSection={registerSection} />
      <ProjectsSection registerSection={registerSection} />
      <ContactSection registerSection={registerSection} />
      <Footer />
    </div>
  );
}

export default App;