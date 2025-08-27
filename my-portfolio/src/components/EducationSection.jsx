import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

const EducationSection = ({ registerSection }) => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const education = {
    university: "Texas A&M University",
    location: "College Station, TX",
    degrees: [
      {
        type: "Master of Science in Computer Science",
        gpa: "4.0",
        expected: "Dec 2026"
      },
      {
        type: "Bachelor of Science in Computer Engineering with Minor in Mathematics",
        gpa: "3.8",
        expected: "May 2025"
      }
    ],
    awards: [
      "Recipient of the prestigious Dean's Honor Award for outstanding academic excellence"
    ],
    courses: [
      "Program Design", "Data Structures & Algorithms", "Discrete Math", 
      "Computer Architecture", "Computer Systems", "Software Engineering", 
      "Microcomputer Systems", "Database Systems", "Machine Learning", 
      "Statistics", "Software Security", "Cybersecurity"
    ]
  };

  useEffect(() => {
    if (sectionRef.current) {
      registerSection('education', sectionRef.current);
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
      id="education" 
      className="py-32 px-4 relative overflow-hidden"
    >
      {/* Enhanced Dark Gradient Background with seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 animate-gradient-shift"></div>
      
      {/* Background Elements with parallax effect */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse parallax-bg" style={{ transform: `translateY(${scrollY * 0.03}px)` }}></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000 parallax-bg" style={{ transform: `translateY(${scrollY * -0.03}px)` }}></div>
      
      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6 animate-fade-in-down hover:tracking-wide transition-all duration-700 cursor-default">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto rounded-full animate-scale-in delay-300"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* University Information */}
          <div className="animate-fade-in-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-700 group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white group-hover:text-gray-100 transition-colors duration-500">
                    {education.university}
                  </h3>
                  <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                    <MapPin size={16} className="mr-1" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Degrees */}
              <div className="space-y-6">
                {education.degrees.map((degree, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 group/degree animate-fade-in-up"
                    style={{ animationDelay: `${index * 200 + 600}ms` }}
                  >
                    <div className="space-y-3">
                      <h4 className="text-lg font-medium text-white group-hover/degree:text-gray-100 transition-colors duration-500 leading-tight">
                        {degree.type}
                      </h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 group-hover/degree:text-gray-300 transition-colors duration-500">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">Expected: {degree.expected}</span>
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-teal-500/20 border border-indigo-500/30 text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm whitespace-nowrap">
                          GPA: {degree.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Awards and Courses */}
          <div className="animate-fade-in-right delay-300 space-y-8">
            {/* Awards */}
            <div className="animate-fade-in-up delay-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-light text-white">Awards & Recognition</h3>
              </div>
              <div className="space-y-4">
                {education.awards.map((award, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 group cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 200 + 1000}ms` }}
                  >
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-500 leading-relaxed">
                      {award}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Relevant Courses */}
            <div className="animate-fade-in-up delay-1000">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-light text-white">Relevant Courses</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {education.courses.map((course, index) => (
                  <div
                    key={course}
                    className="group relative p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500 cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 50 + 1200}ms` }}
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-500 font-medium text-sm">{course}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay-bottom"></div>
    </section>
  );
};

export default EducationSection;
