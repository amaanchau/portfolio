import React from 'react';
import { Menu, X, Home, User, GraduationCap, Briefcase, Code, MessageCircle } from 'lucide-react';

const Navigation = ({ 
  activeSection, 
  onSectionClick, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-transparent ${
                  activeSection === item.id
                    ? 'bg-white/10 text-white border-white/20 shadow-lg'
                    : 'hover:bg-white/5 text-gray-300 hover:text-white hover:border-white/10 hover:scale-105'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 text-gray-300 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md shadow-lg border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className="w-full flex items-center space-x-3 px-6 py-4 text-left hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white hover:scale-[1.02] hover:pl-8"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
