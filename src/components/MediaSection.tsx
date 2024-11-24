import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';

interface MediaSectionProps {
  language: 'en' | 'hi';
}

const MediaSection: React.FC<MediaSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Lab Mitra in the News',
      subtitle: 'See how we\'re transforming healthcare delivery across Varanasi',
      viewAll: 'View All News',
      news: [
        {
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
          date: 'March 15, 2024',
          source: 'Times of India',
          title: 'Lab Mitra: Revolutionizing Healthcare in Varanasi',
          excerpt: 'The innovative digital platform is transforming how citizens access their medical test results.'
        },
        {
          image: 'https://images.unsplash.com/photo-1581093458791-4b041a98425f?auto=format&fit=crop&q=80',
          date: 'February 28, 2024',
          source: 'Hindustan Times',
          title: 'Digital Healthcare Initiative Wins National Recognition',
          excerpt: 'Lab Mitra\'s groundbreaking approach to healthcare accessibility earns prestigious award.'
        },
        {
          image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
          date: 'January 20, 2024',
          source: 'Dainik Jagran',
          title: 'Lab Mitra: A Game-Changer in Healthcare Delivery',
          excerpt: 'How a local initiative is making waves in digital healthcare transformation.'
        }
      ]
    },
    hi: {
      title: 'मीडिया में लैब मित्र',
      subtitle: 'देखें कैसे हम वाराणसी में स्वास्थ्य सेवा वितरण को बदल रहे हैं',
      viewAll: 'सभी समाचार देखें',
      news: [
        {
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
          date: '15 मार्च, 2024',
          source: 'टाइम्स ऑफ इंडिया',
          title: 'लैब मित्र: वाराणसी में स्वास्थ्य सेवा में क्रांति',
          excerpt: 'नवीन डिजिटल प्लेटफॉर्म नागरिकों की मेडिकल टेस्ट रिपोर्ट तक पहुंच को बदल रहा है।'
        },
        {
          image: 'https://images.unsplash.com/photo-1581093458791-4b041a98425f?auto=format&fit=crop&q=80',
          date: '28 फरवरी, 2024',
          source: 'हिंदुस्तान टाइम्स',
          title: 'डिजिटल हेल्थकेयर पहल को मिली राष्ट्रीय मान्यता',
          excerpt: 'लैब मित्र की अभिनव पहल को मिला प्रतिष्ठित पुरस्कार।'
        },
        {
          image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
          date: '20 जनवरी, 2024',
          source: 'दैनिक जागरण',
          title: 'लैब मित्र: स्वास्थ्य सेवा वितरण में गेम-चेंजर',
          excerpt: 'कैसे एक स्थानीय पहल डिजिटल हेल्थकेयर में क्रांति ला रही है।'
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600">{content[language].subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].news.map((item, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Newspaper className="w-4 h-4 mr-2" />
                  <span>{item.source}</span>
                  <span className="mx-2">•</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 transition"
                >
                  {language === 'en' ? 'Read More' : 'और पढ़ें'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition">
            {content[language].viewAll}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;