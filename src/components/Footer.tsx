import React from 'react';
import { Phone, Mail, MapPin, Download } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'hi';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      download: 'Download App',
      contact: 'Contact',
      links: 'Quick Links',
      address: 'Address',
      copyright: '© 2024 Lab Mitra. All rights reserved. Designed & Developed by 3i Consulting PVT LTD.',
      contactInfo: {
        phone: '+91 9415301513',
        email: 'cmo.varanasi2014@gmail.com',
        location: `Kabir Nagar, Upendra Nagar \n Colony, Varanasi, 221005`
      },
      quickLinks: ['About Us', 'Find Centers', 'Privacy Policy', 'Terms of Use']
    },
    hi: {
      download: 'ऐप डाउनलोड करें',
      contact: 'संपर्क',
      links: 'त्वरित लिंक',
      address: 'पता',
      copyright: '© 2024 लैब मित्र। सर्वाधिकार सुरक्षित। 3i Consulting PVT LTD. द्वारा डिजाइन और विकसित किया गया है।',
      contactInfo: {
        phone: '+91 9415301513',
        email: 'cmo.varanasi2014@gmail.com',
        location: 'कबीर नगर रोड, उपेंद्र नगर कॉलोनी, वाराणसी, 221005'
      },
      quickLinks: ['हमारे बारे में', 'केंद्र खोजें', 'गोपनीयता नीति', 'उपयोग की शर्तें']
    }
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{content[language].download}</h3>
            <button onClick={() => {
              window.open('https://play.google.com/store/apps/details?id=com.labmitra', '_blank');
            }} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              <Download className="w-5 h-5 mr-2" />
              {content[language].download}
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{content[language].contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-600 mr-2" />
                <span>{content[language].contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-600 mr-2" />
                <span>{content[language].contactInfo.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-8 h-8 text-purple-600 mr-2" />
                <span>{content[language].contactInfo.location}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{content[language].links}</h3>
            <ul className="space-y-2">
              {content[language].quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-purple-600 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{content[language].address}</h3>
            <p className="text-gray-600">{content[language].contactInfo.location}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>{content[language].copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;