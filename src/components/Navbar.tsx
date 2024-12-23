import React from 'react';
import { TestTube2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo1.png';

interface NavbarProps {
  language: 'en' | 'hi';
}

const Navbar: React.FC<NavbarProps> = ({ language }) => {
  const navigate = useNavigate();
  
  const content = {
    en: {
      menu: ['Home', 'About', 'Impact', 'Media', 'Access Reports']
    },
    hi: {
      menu: ['होम', 'हमारे बारे में', 'प्रभाव', 'मीडिया', 'रिपोर्ट एक्सेस करें']
    }
  };

  const handleReportAccess = () => {
    navigate('/download-report');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Lab Mitra App"
              className="h-12"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 mr-20">
            {content[language].menu.slice(0, -1).map((item, index) => (
              <Link
                key={index}
                to={index === 0 ? '/' : '#'}
                className="text-gray-600 hover:text-purple-600 transition"
              >
                {item}
              </Link>
            ))}
            <button 
              onClick={handleReportAccess}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              {content[language].menu[4]}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;