import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import statefarmLogo from '../assets/statefarm-logo.png';
import tamuLogo from '../assets/tamu-logo.png';
import usaaLogo from '../assets/usaa-logo.png';
import ciceroLogo from '../assets/cicero.jpg';
import awsLogo from '../assets/aws-logo.png';

const ExperienceSection = ({ registerSection }) => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const experiences = [
    {
      title: "Software Engineer",
      company: "State Farm",
      period: "May 2025– Present",
      location: "Remote",
      logo: statefarmLogo,
      description: "Developed an Azure-hosted multi-agent AI assistant and analytics dashboard for Home Plus app data, enabling teams to extract actionable insights from feedback, FAQs, and Adobe Analytics in real time. Built automated insight generation and visualization features with Azure Function Apps, Cosmos DB, MongoDB, and OpenAI, reducing manual analysis time by 80% and enabling faster, data-driven release planning.",
      achievements: [
        "Developed an Azure-hosted multi-agent AI assistant and analytics dashboard for Home Plus app data, enabling teams to extract actionable insights from feedback, FAQs, and Adobe Analytics in real time",
        "Built automated insight generation and visualization features with Azure Function Apps, Cosmos DB, MongoDB, and OpenAI, reducing manual analysis time by 80% and enabling faster, data-driven release planning"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "State Farm",
      period: "May 2024 – May 2025",
      location: "Remote",
      logo: statefarmLogo,
      description: "Built and deployed a scalable AWS-based data profiling tool (Lambda, Glue, DynamoDB, S3, API Gateway, Athena) using Terraform and GitLab CI/CD, reducing enterprise-wide dataset profiling times from hours to seconds for 200+ data professionals. Developed reusable Python utilities for SageMaker notebooks, published to JFrog Artifactory with example notebooks, improving onboarding speed by 30% and boosting adoption of the Model Management Toolkit (MMT).",
      achievements: [
        "Built and deployed a scalable AWS-based data profiling tool (Lambda, Glue, DynamoDB, S3, API Gateway, Athena) using Terraform and GitLab CI/CD, reducing enterprise-wide dataset profiling times from hours to seconds for 200+ data professionals",
        "Developed reusable Python utilities for SageMaker notebooks, published to JFrog Artifactory with example notebooks, improving onboarding speed by 30% and boosting adoption of the Model Management Toolkit (MMT)",
        "Enhanced platform security by implementing role-based access controls and RESTful APIs, resolving 10+ critical bugs and improving overall system reliability for 200+ existing data professionals"
      ]
    },
    {
      title: "Research Assistant",
      company: "Texas A&M Autonomous Systems Laboratory",
      period: "Sep 2023 – May 2024",
      location: "College Station, TX",
      logo: tamuLogo,
      description: "Developed YOLOv5-based computer vision systems in Python and C++ with ROS, enabling real-time traffic sign detection with 95%+ accuracy across variable lighting and weather conditions. Worked with GM engineers to develop and deploy perception models for autonomous navigation in complex environments.",
      achievements: [
        "Developed YOLOv5-based computer vision systems in Python and C++ with ROS, enabling real-time traffic sign detection with 95%+ accuracy across variable lighting and weather conditions",
        "Worked with GM engineers to develop and deploy perception models for autonomous navigation in complex environments"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "USAA",
      period: "May 2023 – Aug 2023",
      location: "San Antonio, TX",
      logo: usaaLogo,
      description: "Integrated Terraform Rover into GitLab pipelines, accelerating plan approvals by 20% and streamlining infrastructure reviews. Built a serverless AWS Lambda pipeline to automate CSV-to-JSON conversion with validation and enrichment, reducing manual processing time by 70% and enabling faster ingestion of large datasets.",
      achievements: [
        "Integrated Terraform Rover into GitLab pipelines, accelerating plan approvals by 20% and streamlining infrastructure reviews",
        "Built a serverless AWS Lambda pipeline to automate CSV-to-JSON conversion with validation and enrichment, reducing manual processing time by 70% and enabling faster ingestion of large datasets"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Cicero",
      period: "Oct 2022 – May 2023",
      location: "Remote",
      logo: ciceroLogo,
      description: "Led the migration to the Remix framework with server-side rendering, reducing content load times by 30%, improving onboarding speed by 25%, and resolving key UI issues to boost platform stability. Transformed the Cicero web app into a cross-platform app using Capacitor, improving access and user experience across devices.",
      achievements: [
        "Led the migration to the Remix framework with server-side rendering, reducing content load times by 30%, improving onboarding speed by 25%, and resolving key UI issues to boost platform stability",
        "Transformed the Cicero web app into a cross-platform app using Capacitor, improving access and user experience across devices"
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      company: "AWS",
      period: "August 2022",
      location: "Certification",
      logo: awsLogo,
      description: "Achieved AWS Certified Cloud Practitioner certification, demonstrating foundational knowledge of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      achievements: [
        "Achieved AWS Certified Cloud Practitioner certification, demonstrating foundational knowledge of AWS Cloud concepts, services, security, architecture, pricing, and support"
      ],
      link: "https://www.credly.com/badges/c837d3fa-c93b-4375-b34f-3fe623268a8a/linked_in_profile"
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      registerSection('experience', sectionRef.current);
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
      id="experience" 
      className="py-32 px-4 relative overflow-hidden"
    >
      {/* Enhanced Dark Gradient Background with seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 animate-gradient-shift"></div>
      
      {/* Background Elements with parallax effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500 parallax-bg" style={{ transform: `translateY(${scrollY * 0.03}px)` }}></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700 parallax-bg" style={{ transform: `translateY(${scrollY * -0.03}px)` }}></div>
      
      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6 animate-fade-in-down hover:tracking-wide transition-all duration-700 cursor-default">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full animate-scale-in delay-300"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 animate-fade-in-up delay-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative group ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex-row items-start gap-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200 + 600}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-4 border-black shadow-lg transform -translate-x-1/2 z-10 group-hover:scale-150 transition-transform duration-500 animate-scale-in" style={{ animationDelay: `${index * 200 + 800}ms` }}></div>
                
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} md:w-1/2`}>
                  <div className="p-8 rounded-2xl shadow-2xl transition-all duration-700 hover:scale-105 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 group cursor-pointer relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-6">
                        {/* Company Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        {/* Company Info */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-light text-white group-hover:text-gray-100 transition-colors duration-500 mb-2">
                            {exp.title}
                          </h3>
                          <h4 className="text-xl font-medium text-gray-300 group-hover:text-white transition-colors duration-500 mb-1">
                            {exp.company}
                          </h4>
                          <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-500 text-sm">
                            <span>{exp.period}</span>
                            <MapPin className="w-4 h-4 ml-2 text-gray-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        
                        {/* Duration Badge */}
                        <span className="px-4 py-2 bg-white/10 border border-white/20 text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm group-hover:bg-white/20 group-hover:text-white transition-all duration-500 self-start">
                          {exp.period}
                        </span>
                      </div>
                      
                      {/* Achievements as Bullet Points */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <p key={achievementIndex} className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed text-sm">
                            • {achievement}
                          </p>
                        ))}
                      </div>
                      
                      {/* Certification Link */}
                      {exp.link && (
                        <div className="mt-4">
                          <a 
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-300 rounded-lg backdrop-blur-sm hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-yellow-500/30 hover:text-white hover:scale-105 transition-all duration-500 text-sm font-medium"
                          >
                            View Credential
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for layout */}
                <div className="flex-1 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section transition overlay for seamless flow */}
      <div className="section-overlay-bottom"></div>
    </section>
  );
};

export default ExperienceSection;
