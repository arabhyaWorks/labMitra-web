import React from 'react';
import { Download, Star, Shield, Smartphone } from 'lucide-react';

interface AppDownloadProps {
  language: 'en' | 'hi';
}

const AppDownload: React.FC<AppDownloadProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Get Lab Reports on Your Phone',
      subtitle: 'Download our mobile app for instant access to your lab reports, center locations, and more.',
      features: [
        {
          icon: Star,
          title: 'Easy to Use',
          description: 'Simple and intuitive interface for all users'
        },
        {
          icon: Shield,
          title: 'Secure Access',
          description: 'Your health data is protected with top-grade security'
        },
        {
          icon: Smartphone,
          title: 'Offline Access',
          description: 'View your reports even without internet connection'
        }
      ],
      downloadText: 'Download Now',
      availableText: 'Available on App Store & Play Store'
    },
    hi: {
      title: 'अपने फोन पर लैब रिपोर्ट प्राप्त करें',
      subtitle: 'अपनी लैब रिपोर्ट, केंद्र स्थानों और अधिक तक तत्काल पहुंच के लिए हमारा मोबाइल ऐप डाउनलोड करें।',
      features: [
        {
          icon: Star,
          title: 'उपयोग में आसान',
          description: 'सभी उपयोगकर्ताओं के लिए सरल और सहज इंटरफेस'
        },
        {
          icon: Shield,
          title: 'सुरक्षित एक्सेस',
          description: 'आपका स्वास्थ्य डेटा उच्च-श्रेणी की सुरक्षा के साथ संरक्षित है'
        },
        {
          icon: Smartphone,
          title: 'ऑफलाइन एक्सेस',
          description: 'इंटरनेट कनेक्शन के बिना भी अपनी रिपोर्ट देखें'
        }
      ],
      downloadText: 'अभी डाउनलोड करें',
      availableText: 'ऐप स्टोर और प्ले स्टोर पर उपलब्ध'
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
              alt="Lab Mitra App"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {content[language].title}
              </h2>
              <p className="text-lg text-gray-600">
                {content[language].subtitle}
              </p>
            </div>
            
            <div className="space-y-6">
              {content[language].features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <button className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                <Download className="w-5 h-5 mr-2" />
                {content[language].downloadText}
              </button>
              <p className="text-sm text-gray-500 text-center">
                {content[language].availableText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;