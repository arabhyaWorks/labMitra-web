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
          image: 'https://pbs.twimg.com/media/GWiywDDaoAI-RDZ?format=jpg&name=4096x4096',
          date: 'Sept 03, 2024',
          source: 'DARPG',
          title: 'Lab Mitra: Revolutionizing Healthcare in Varanasi',
          excerpt: 'Lab Mitra of District Administration, Varanasi, Government of Uttar Pradesh bagged Gold Award.'
        },
        {
          image: 'https://pbs.twimg.com/media/GWmoaJDbQAAncYH.jpg',
          date: 'Sept 04, 2024',
          source: 'Times of India',
          title: 'Varanasi Lab Mitra initiative bags award',
          excerpt: 'Lab Mitra\'s groundbreaking approach to healthcare accessibility earns prestigious award.'
        },
        {
          image: 'https://www.hindustantimes.com/ht-img/img/2024/06/06/550x309/For-representation-only--HT-File-Photo-_1717693213050.jpg',
          date: 'Jun 06, 2024',
          source: 'Hindustan Times',
          title: 'Lab Mitra: After Varanasi success, path reports software to cater to UP',
          excerpt: 'Uttar Pradesh patients will not have to visit pathology centres of government hospitals to get their medical test report.'
        }
      ]
    },
    hi: {
      title: 'समाचारों में लैब मित्र',
      subtitle: 'देखें कि कैसे हम वाराणसी में स्वास्थ्य सेवाओं को बदल रहे हैं',
      viewAll: 'सभी समाचार देखें',
      news: [
        {
          image: 'https://pbs.twimg.com/media/GWiywDDaoAI-RDZ?format=jpg&name=4096x4096',
          date: '03 सितम्बर, 2024',
          source: 'DARPG',
          title: 'लैब मित्र: वाराणसी में स्वास्थ्य सेवाओं में क्रांति',
          excerpt: 'वाराणसी जिला प्रशासन, उत्तर प्रदेश सरकार की लैब मित्र पहल को गोल्ड अवॉर्ड मिला।'
        },
        {
          image: 'https://pbs.twimg.com/media/GWmoaJDbQAAncYH.jpg',
          date: '04 सितम्बर, 2024',
          source: 'टाइम्स ऑफ इंडिया',
          title: 'वाराणसी की लैब मित्र पहल ने पुरस्कार जीता',
          excerpt: 'स्वास्थ्य सेवाओं को सुलभ बनाने के लैब मित्र के अनूठे दृष्टिकोण को प्रतिष्ठित पुरस्कार प्राप्त हुआ।'
        },
        {
          image: 'https://www.hindustantimes.com/ht-img/img/2024/06/06/550x309/For-representation-only--HT-File-Photo-_1717693213050.jpg',
          date: '06 जून, 2024',
          source: 'हिंदुस्तान टाइम्स',
          title: 'लैब मित्र: वाराणसी की सफलता के बाद, यूपी में सॉफ्टवेयर रिपोर्ट करेगा',
          excerpt: 'उत्तर प्रदेश के मरीजों को अब अपनी मेडिकल टेस्ट रिपोर्ट प्राप्त करने के लिए सरकारी अस्पतालों के पैथोलॉजी केंद्रों पर जाने की जरूरत नहीं पड़ेगी।'
        }
      ]
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 2xl:px-20">
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