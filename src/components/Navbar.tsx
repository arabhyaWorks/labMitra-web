import React from 'react';
import { TestTube2 } from 'lucide-react';

interface NavbarProps {
  language: 'en' | 'hi';
}

const Navbar: React.FC<NavbarProps> = ({ language }) => {
  const content = {
    en: {
      menu: ['Home', 'About', 'Impact', 'Media', 'Access Reports']
    },
    hi: {
      menu: ['होम', 'हमारे बारे में', 'प्रभाव', 'मीडिया', 'रिपोर्ट एक्सेस करें']
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <TestTube2 className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Lab Mitra</span>
            <span className="ml-2 text-sm text-gray-600">Varanasi</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {content[language].menu.slice(0, -1).map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-purple-600 transition"
              >
                {item}
              </a>
            ))}
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              {content[language].menu[4]}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;