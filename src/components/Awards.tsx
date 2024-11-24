import React from 'react';
import { Award, Newspaper } from 'lucide-react';

interface AwardsProps {
  language: 'en' | 'hi';
}

const Awards: React.FC<AwardsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Recognized Nationwide for Excellence in Healthcare',
      award: {
        title: 'National e-Governance Gold Award 2024',
        description: 'Recognized for outstanding achievement in transforming healthcare delivery through digital innovation and administrative reforms.'
      },
      news: [
        {
          source: 'Times of India',
          date: 'March 2024',
          title: 'Lab Mitra: Revolutionizing Healthcare in Varanasi'
        },
        {
          source: 'Hindustan Times',
          date: 'February 2024',
          title: 'Digital Healthcare Initiative Wins National Recognition'
        },
        {
          source: 'Dainik Jagran',
          date: 'January 2024',
          title: 'Lab Mitra: A Game-Changer in Healthcare Delivery'
        }
      ]
    },
    hi: {
      title: 'स्वास्थ्य सेवा में उत्कृष्टता के लिए राष्ट्रीय मान्यता',
      award: {
        title: 'राष्ट्रीय ई-गवर्नेंस स्वर्ण पुरस्कार 2024',
        description: 'डिजिटल नवाचार और प्रशासनिक सुधारों के माध्यम से स्वास्थ्य सेवा वितरण में उत्कृष्ट उपलब्धि के लिए मान्यता प्राप्त।'
      },
      news: [
        {
          source: 'टाइम्स ऑफ इंडिया',
          date: 'मार्च 2024',
          title: 'लैब मित्र: वाराणसी में स्वास्थ्य सेवा में क्रांति'
        },
        {
          source: 'हिंदुस्तान टाइम्स',
          date: 'फरवरी 2024',
          title: 'डिजिटल हेल्थकेयर पहल को मिली राष्ट्रीय मान्यता'
        },
        {
          source: 'दैनिक जागरण',
          date: 'जनवरी 2024',
          title: 'लैब मित्र: स्वास्थ्य सेवा वितरण में गेम-चेंजर'
        }
      ]
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{content[language].title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg">
            <Award className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">{content[language].award.title}</h3>
            <p className="text-gray-300">{content[language].award.description}</p>
          </div>
          
          <div className="space-y-4">
            {content[language].news.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-2">
                  <Newspaper className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-purple-400">{item.source} • {item.date}</span>
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;