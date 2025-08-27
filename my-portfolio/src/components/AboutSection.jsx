import React, { useEffect, useRef, useState } from 'react';

const AboutSection = ({ registerSection }) => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  
  const skillCategories = [
    {
      name: "Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "HTML/CSS", "SQL"],
      color: "from-blue-500 to-cyan-500",
      icon: "💻"
    },
    {
      name: "Frontend",
      skills: ["React.js", "Next.js", "React Native", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500",
      icon: "🎨"
    },
    {
      name: "Backend",
      skills: ["FastAPI", "API Development", "Twilio"],
      color: "from-green-500 to-emerald-500",
      icon: "⚙️"
    },
    {
      name: "AI/ML",
      skills: ["Agentic AI", "LangGraph", "RAG"],
      color: "from-orange-500 to-red-500",
      icon: "🤖"
    },
    {
      name: "Cloud",
      skills: ["AWS", "Azure", "Terraform"],
      color: "from-indigo-500 to-blue-500",
      icon: "☁️"
    },
    {
      name: "Tools",
      skills: ["Linux", "Git", "GitHub", "GitLab"],
      color: "from-gray-500 to-slate-500",
      icon: "🛠️"
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      registerSection('about', sectionRef.current);
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
      id="about" 
      className="py-32 px-4 relative overflow-hidden"
    >
      {/* Enhanced Dark Gradient Background with seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 animate-gradient-shift"></div>
      
      {/* Background Elements with parallax effect */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse parallax-bg" style={{ transform: `translateY(${scrollY * 0.05}px)` }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 parallax-bg" style={{ transform: `translateY(${scrollY * -0.05}px)` }}></div>
      
      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6 animate-fade-in-down hover:tracking-wide transition-all duration-700 cursor-default">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-scale-in delay-300"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left order-2 lg:order-1">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8 animate-fade-in-left delay-300">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-600 hover:scale-110 hover:shadow-xl hover:shadow-white/10 transition-all duration-500 cursor-pointer group">
                <img 
                  src="./src/assets/profile.jpg" 
                  alt="Amaan Chaudhry" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right delay-300 space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500 cursor-default animate-fade-in-up delay-500">
                I'm a full-stack developer and Software Engineer at State Farm, pursuing my Master's in Computer Science at Texas A&M University. With experience from multiple internships, I specialize in frontend development, backend architecture, and AI integration.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500 cursor-default animate-fade-in-up delay-700">
                I'm passionate about building innovative applications, exploring cloud technologies, and creating solutions that solve real-world problems. I love experimenting with new frameworks and staying at the forefront of emerging tech.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500 cursor-default animate-fade-in-up delay-900">
                When I'm not coding, you'll find me hiking, cooking, playing basketball, or exploring new places through travel.
              </p>
            </div>
            
            <div className="space-y-6 animate-fade-in-up delay-1100">
              <h3 className="text-2xl font-light text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map((category, index) => (
                  <div
                    key={category.name}
                    className="group relative p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500 cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 100 + 1200}ms` }}
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <h4 className="text-white font-medium group-hover:text-gray-100 transition-colors duration-500">
                        {category.name}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-gray-300 rounded-md text-xs font-medium backdrop-blur-sm group-hover:border-white/30 group-hover:text-white transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${index * 100 + skillIndex * 50 + 1300}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
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

export default AboutSection;
