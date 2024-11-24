import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

interface AwardsShowcaseProps {
  language: 'en' | 'hi';
}

const AwardsShowcase: React.FC<AwardsShowcaseProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Excellence in e-Governance',
      subtitle: 'National e-Governance Gold Award 2024',
      description: 'Lab Mitra has been recognized for its outstanding contribution to digital healthcare transformation, making medical services more accessible to citizens of Varanasi.',
      achievements: [
        'Revolutionizing healthcare delivery through digital innovation',
        'Seamless integration with government healthcare facilities',
        'Enhanced accessibility of medical test reports',
        'Reduced waiting times and improved patient experience',
        'Paperless and environment-friendly initiative',
        'Data-driven decision making in healthcare'
      ],
      stats: [
        { label: 'Digital Reports Delivered', value: '2L+' },
        { label: 'Healthcare Centers', value: '15+' },
        { label: 'Patient Satisfaction', value: '98%' }
      ]
    },
    hi: {
      title: 'ई-गवर्नेंस में उत्कृष्टता',
      subtitle: 'राष्ट्रीय ई-गवर्नेंस स्वर्ण पुरस्कार 2024',
      description: 'लैब मित्र को डिजिटल स्वास्थ्य सेवा परिवर्तन में उत्कृष्ट योगदान के लिए सम्मानित किया गया है, जिससे वाराणसी के नागरिकों के लिए चिकित्सा सेवाएं अधिक सुलभ हो गई हैं।',
      achievements: [
        'डिजिटल नवाचार के माध्यम से स्वास्थ्य सेवा वितरण में क्रांति',
        'सरकारी स्वास्थ्य सुविधाओं के साथ निर्बाध एकीकरण',
        'चिकित्सा परीक्षण रिपोर्ट की बेहतर पहुंच',
        'प्रतीक्षा समय में कमी और बेहतर रोगी अनुभव',
        'पेपरलेस और पर्यावरण के अनुकूल पहल',
        'स्वास्थ्य सेवा में डेटा-संचालित निर्णय'
      ],
      stats: [
        { label: 'डिजिटल रिपोर्ट वितरित', value: '2L+' },
        { label: 'स्वास्थ्य केंद्र', value: '15+' },
        { label: 'रोगी संतुष्टि', value: '98%' }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full -z-10"></div>
              <img
                src="https://nceg.gov.in/assets/img/award.png"
                alt="e-Governance Award"
                className="relative z-10 w-full max-w-md mx-auto rounded-lg "
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">{content[language].title}</h2>
              </div>
              <h3 className="text-xl text-purple-600 font-semibold mb-4">{content[language].subtitle}</h3>
              <p className="text-gray-600 leading-relaxed">{content[language].description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {content[language].stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {content[language].achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsShowcase;