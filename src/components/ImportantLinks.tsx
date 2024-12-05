import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ImportantLinksProps {
  language: 'en' | 'hi';
}

const ImportantLinks: React.FC<ImportantLinksProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Important Links',
      subtitle: 'Access essential healthcare services and resources',
      links: [
        {
          title: 'National Tuberculosis Elimination Programme',
          description: 'Access TB-related healthcare services and information',
          image: 'https://labmitravns.com/frontendassets/images/imp3.jpeg',
          url: 'https://nikshay.in/'
        },
        {
          title: 'Unified Disease Surveillance Platform',
          description: 'Comprehensive disease monitoring and reporting system',
          image: 'https://labmitravns.com/frontendassets/images/imp2.jpeg',
          url: 'https://labs.udsp.in/'
        },
        {
          title: 'Ayushman Bharat Health Account',
          description: 'Create and manage your ABHA health ID',
          image: 'https://labmitravns.com/frontendassets/images/imp1.jpeg',
          url: 'https://abha.abdm.gov.in/abha/v3/'
        }
      ]
    },
    hi: {
      title: 'महत्वपूर्ण लिंक',
      subtitle: 'आवश्यक स्वास्थ्य सेवाओं और संसाधनों तक पहुंच',
      links: [
        {
          title: 'राष्ट्रीय क्षय रोग उन्मूलन कार्यक्रम',
          description: 'टीबी संबंधित स्वास्थ्य सेवाओं और जानकारी तक पहुंच',
          image: 'https://nikshay.in/assets/images/nikshay-logo.png',
          url: 'https://nikshay.in/'
        },
        {
          title: 'एकीकृत रोग निगरानी मंच',
          description: 'व्यापक रोग निगरानी और रिपोर्टिंग प्रणाली',
          image: 'https://labs.udsp.in/assets/images/udsp-logo.png',
          url: 'https://labs.udsp.in/'
        },
        {
          title: 'आयुष्मान भारत स्वास्थ्य खाता',
          description: 'अपना ABHA स्वास्थ्य आईडी बनाएं और प्रबंधित करें',
          image: 'https://abha.abdm.gov.in/assets/images/abha-logo.png',
          url: 'https://abha.abdm.gov.in/abha/v3/'
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-300">{content[language].subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-700"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-700">
                <img
                  src={link.image}
                  alt={link.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {link.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-gray-300">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;

