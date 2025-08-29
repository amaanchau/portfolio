import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Play, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import aggieaiImage from '../assets/aggieai.png';
import revsImage from '../assets/revs.png';
import studyImage from '../assets/study.png';
import groupflyImage from '../assets/groupfly.png';
import stockImage from '../assets/stock.png';
import styleguideImage from '../assets/styleguide.png';
import portfolioImage from '../assets/portfolio.png';
import greatsmilesImage from '../assets/greatsmiles.png';

const ProjectsSection = ({ registerSection }) => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');
  const [expandedTech, setExpandedTech] = useState(false); // New state for expanded tech
  
  const projects = [
    {
      title: "Great Smiles - AI Dental Assistant",
      subtitle: "Multi-Agent AI System for Patient Intake Automation",
      description: [
        "Architected AI dental agent using FastAPI, OpenAI Whisper, ElevenLabs TTS, and Twilio with LangGraph state management to automate patient calls intake through multi-agent flows",
        "Built React.js patient call information dashboard and leveraged Supabase to provide Google OAuth authentication and role-based access control"
      ],
      tech: ["FastAPI", "OpenAI Whisper", "ElevenLabs TTS", "Twilio", "LangGraph", "React.js", "Supabase", "Google OAuth"],
      image: greatsmilesImage,
      period: "June 2025 – Aug 2025",
      date: "2025",
      website: null,
      github: null,
      demo: null
    },
    {
      title: "Aggie AI - Course Selection Platform",
      subtitle: "AI-Powered Analytics Platform",
      description: [
        "Built a Next.js platform serving 1000+ monthly users, using RAG-based AI to recommend courses based on GPA distributions and professor reviews from a PostgreSQL database",
        "Designed interactive dashboards with dynamic filters for 4000+ professors across 12+ terms, reducing course selection time by 40%",
        "Developed a Python pipeline to automate academic data extraction from PDFs and scrape professor reviews, integrating results into an optimized database schema"
      ],
      tech: ["Next.js", "PostgreSQL", "Python", "RAG AI", "Data Analytics"],
      image: aggieaiImage,
      period: "Feb 2025 – May 2025",
      date: "2025",
      website: "https://aggieai.us",
      github: null,
      demo: null
    },
    {
      title: "Rev's Grille – Cloud-Based POS System",
      subtitle: "Point-of-Sale System with Real-time Analytics",
      description: [
        "Engineered a POS system with Next.js, AWS, and PostgreSQL to streamline order processing, implement OAuth role-based authentication, and deliver real-time sales analytics",
        "Achieved 90%+ code coverage through Jest and Playwright testing, driving Agile development with CI/CD workflows",
        "Ensured responsive, accessible design for diverse user needs with comprehensive testing and deployment automation"
      ],
      tech: ["Next.js", "AWS", "PostgreSQL", "Jest", "Playwright", "CI/CD"],
      image: revsImage,
      period: "Jan 2024 – May 2024",
      date: "2024",
      website: "https://docs.google.com/presentation/d/1inivabh33x17DMVmfXHaGdGB8AjjtqSWp3B4wi9qsHQ/edit#slide=id.g2d107010e5a_0_51",
      github: "https://github.com/RobertWay26/revs-pos",
      demo: null
    },
    {
      title: "Study Focuser Pomodoro Device",
      subtitle: "Physical Study Aid with Distraction Detection",
      description: [
        "Engineered a study aid with Raspberry Pi, orchestrating structured study intervals and seamlessly integrating distraction detection",
        "Designed blueprints, fabricated the physical enclosure using wood and screws, and wiring hardware electronics securely to the Pi",
        "Developed Python scripts with OpenCV for gaze detection, enabling the system to detect user distractions, such as phone usage"
      ],
      tech: ["Raspberry Pi", "Python", "OpenCV", "Hardware", "Computer Vision"],
      image: studyImage,
      period: "Jan 2024 – May 2024",
      date: "2024",
      website: null,
      github: "https://github.com/amaanchau/StudyFocuser",
      demo: null
    },
    {
      title: "Group Fly Full Stack Application",
      subtitle: "Centralized Flight Booking for Group Travel",
      description: [
        "Pioneering the development of a sophisticated centralized flight booking application tailored for group travel",
        "Seamlessly integrating up-to-the-minute flight data from the Amadeus API through advanced web scraping techniques",
        "Designing an intuitive and visually appealing front-end using HTML and CSS with the Tailwind CSS framework",
        "Ensuring secure user authentication through OAuth API on Firebase and orchestrating deployment for seamless internet access"
      ],
      tech: ["HTML", "CSS", "Tailwind", "Firebase", "AWS", "Amadeus API"],
      image: groupflyImage,
      period: "Mar 2023 – Present",
      date: "2023-2025",
      website: null,
      github: "https://github.com/8SK3PS8/GroupFly",
      demo: null
    },
    {
      title: "Stock Predictor Web Application",
      subtitle: "LSTM-based Stock Price Prediction",
      description: [
        "Developed dynamic LSTM web app for precise stock price prediction, integrating Yahoo Finance data via efficient Pandas and NumPy scraping",
        "Employing Matplotlib for insightful visualization, delivering daily stock predictions at 85% accuracy",
        "Successfully deployed the interactive Python Streamlit app on AWS EC2 and Route53, ensuring seamless online access for users"
      ],
      tech: ["Python", "LSTM", "Streamlit", "Pandas", "NumPy", "AWS"],
      image: stockImage,
      period: "Sep 2022 – Jan 2023",
      date: "2022-2023",
      website: "http://stock-predictor.amaanchau.com/",
      github: "https://github.com/amaanchau/stock-predictor-fin",
      demo: null
    },
    {
      title: "PowerPoint Accessibility & Style Guide Checker",
      subtitle: "State Farm Hackathon Project",
      description: [
        "Participated in a State Farm-exclusive hackathon, developing an app that checks PowerPoint presentations for accessibility and style guide adherence",
        "Offering instant feedback to enhance presentation consistency and readability, ensuring font consistency and proper text alignment",
        "Enhancing image visibility for users with color vision deficiencies by utilizing the LMS Daltonization algorithm",
        "Built the app using a React frontend, Flask for API development, and a Python backend"
      ],
      tech: ["React", "Flask", "Python", "Accessibility", "LMS Daltonization"],
      image: styleguideImage,
      period: "Jul 2024",
      date: "2024",
      website: null,
      github: "https://github.com/SatvikDuddukuru/SF-Hack-Day-2024",
      demo: "https://www.youtube.com/watch?v=ZsWzumS2lqY"
    },
    {
      title: "Personal Portfolio Website",
      subtitle: "React-based Professional Portfolio",
      description: [
        "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and interactive sections",
        "Professional design that showcases skills, experience, and projects with seamless transitions and parallax effects",
        "Intuitive user experience with optimized performance and accessibility across all devices"
      ],
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite", "Responsive Design"],
      image: portfolioImage,
      period: "Aug 2025",
      date: "2025",
      website: "https://amaan.com",
      github: null,
      demo: null
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      registerSection('projects', sectionRef.current);
    }
  }, [registerSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('right');
    setExpandedTech(false); // Reset expanded state
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('left');
    setExpandedTech(false); // Reset expanded state
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToProject = (index) => {
    if (isTransitioning || index === currentProject) return;
    setIsTransitioning(true);
    setSlideDirection(index > currentProject ? 'right' : 'left');
    setExpandedTech(false); // Reset expanded state
    setTimeout(() => {
      setCurrentProject(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-32 px-4 relative overflow-hidden"
    >
      {/* Enhanced Dark Gradient Background with seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 animate-gradient-shift"></div>
      
      {/* Background Elements with parallax effect */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-300 parallax-bg" style={{ transform: `translateY(${scrollY * 0.04}px)` }}></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-600 parallax-bg" style={{ transform: `translateY(${scrollY * -0.04}px)` }}></div>
      
      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6 animate-fade-in-down hover:tracking-wide transition-all duration-700 cursor-default">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-scale-in delay-300"></div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Main Project Display */}
          <div 
            className={`relative overflow-hidden rounded-2xl shadow-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
              isTransitioning 
                ? slideDirection === 'right' 
                  ? 'transform translate-x-full opacity-0' 
                  : 'transform -translate-x-full opacity-0'
                : 'transform translate-x-0 opacity-100'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].title}
                  className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    isTransitioning ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Date Badge */}
                <div className={`absolute top-4 left-4 transition-all duration-500 delay-100 ${
                  isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
                }`}>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-medium">
                    <Calendar size={16} />
                    <span>{projects[currentProject].date}</span>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className={`mb-3 transition-all duration-500 delay-100 ${
                  isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}>
                  <span className="text-purple-400 text-xs font-medium uppercase tracking-wider">
                    {projects[currentProject].subtitle}
                  </span>
                </div>
                
                <h3 className={`text-2xl lg:text-3xl font-light text-white mb-4 leading-tight transition-all duration-500 delay-150 ${
                  isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}>
                  {projects[currentProject].title}
                </h3>
                
                <div className={`text-gray-300 mb-6 leading-relaxed text-sm lg:text-base transition-all duration-500 delay-200 ${
                  isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}>
                  {projects[currentProject].description.map((point, index) => (
                    <div key={index} className="flex items-start mb-2 last:mb-0">
                      <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                
                {/* Tech Stack */}
                <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-500 delay-300 ${
                  isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}>
                  {(expandedTech ? projects[currentProject].tech : projects[currentProject].tech.slice(0, 4)).map((tech, index) => (
                    <span 
                      key={tech}
                      className={`px-2 py-1 bg-white/10 border border-white/20 text-gray-300 rounded-full text-xs backdrop-blur-sm hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-500 cursor-pointer ${
                        isTransitioning ? 'transform scale-95' : 'transform scale-100'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {projects[currentProject].tech.length > 4 && !expandedTech && (
                    <button
                      onClick={() => setExpandedTech(true)}
                      className={`px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-gray-300 rounded-full text-xs backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30 hover:text-white hover:scale-110 transition-all duration-500 cursor-pointer ${
                        isTransitioning ? 'transform scale-95' : 'transform scale-100'
                      }`}
                    >
                      +{projects[currentProject].tech.length - 4} more
                    </button>
                  )}
                  {expandedTech && (
                    <button
                      onClick={() => setExpandedTech(false)}
                      className={`px-2 py-1 bg-gradient-to-r from-gray-500/20 to-slate-500/20 border border-gray-500/30 text-gray-300 rounded-full text-xs backdrop-blur-sm hover:bg-gradient-to-r hover:from-gray-500/30 hover:to-slate-500/30 hover:text-white hover:scale-110 transition-all duration-500 cursor-pointer ${
                        isTransitioning ? 'transform scale-95' : 'transform scale-100'
                      }`}
                    >
                      Show less
                    </button>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className={`flex flex-wrap gap-3 transition-all duration-500 delay-400 ${
                  isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}>
                  {projects[currentProject].github && (
                    <a 
                      href={projects[currentProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/20 text-gray-300 rounded-lg backdrop-blur-sm hover:bg-white/20 hover:text-white hover:scale-105 transition-all duration-500 group/link text-sm ${
                        isTransitioning ? 'transform scale-95' : 'transform scale-100'
                      }`}
                    >
                      <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-500" />
                      <span>GitHub</span>
                    </a>
                  )}
                  
                  {projects[currentProject].website && (
                    <a 
                      href={projects[currentProject].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-gray-300 rounded-lg backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30 hover:text-white hover:scale-105 transition-all duration-500 group/link text-sm ${
                        isTransitioning ? 'transform scale-95' : 'transform scale-100'
                      }`}
                    >
                      <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform duration-500" />
                      <span>Website</span>
                    </a>
                  )}
                  
                  {projects[currentProject].demo && (
                    <a 
                      href={projects[currentProject].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-gray-300 rounded-lg backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30 hover:text-white hover:scale-105 transition-all duration-500 group/link text-sm ${
                        isTransitioning ? 'transform scale-95' : 'transform scale-100'
                      }`}
                    >
                      <Play size={16} className="group-hover/link:rotate-12 transition-transform duration-500" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevProject}
            disabled={isTransitioning}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-500 z-20 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextProject}
            disabled={isTransitioning}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-500 z-20 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Project Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentProject 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-150' 
                  : 'bg-white/30 hover:bg-white/50'
              } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            />
          ))}
        </div>
        
        {/* Project Counter */}
        <div className="text-center mt-6">
          <span className={`text-gray-400 text-sm transition-all duration-500 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}>
            {currentProject + 1} of {projects.length}
          </span>
        </div>
      </div>

      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay-bottom"></div>
    </section>
  );
};

export default ProjectsSection;
