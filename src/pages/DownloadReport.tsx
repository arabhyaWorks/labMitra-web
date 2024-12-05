import React from 'react';
import { Download } from 'lucide-react';
import ReportForm from '../components/report/ReportForm';
import PageHeader from '../components/common/PageHeader';

interface DownloadReportProps {
  language: 'en' | 'hi';
}

const DownloadReport: React.FC<DownloadReportProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Download Your Lab Report',
      subtitle: 'Access your medical test results securely and instantly. Enter your registered contact number to get started.',
      steps: [
        'Enter your registered mobile number',
        'Complete the security verification',
        'Access your lab report instantly'
      ]
    },
    hi: {
      title: 'अपनी लैब रिपोर्ट डाउनलोड करें',
      subtitle: 'अपने मेडिकल टेस्ट के परिणाम सुरक्षित और तुरंत एक्सेस करें। शुरू करने के लिए अपना पंजीकृत संपर्क नंबर दर्ज करें।',
      steps: [
        'अपना पंजीकृत मोबाइल नंबर दर्ज करें',
        'सुरक्षा सत्यापन पूरा करें',
        'तुरंत अपनी लैब रिपोर्ट एक्सेस करें'
      ]
    }
  };

  return (
    <div className="flex-grow bg-gradient-to-b from-purple-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <PageHeader
          title={content[language].title}
          subtitle={content[language].subtitle}
          icon={Download}
        />
        
        {/* Steps */}
        {/* <div className="max-w-4xl mx-auto mt-8 sm:mt-12 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {content[language].steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm sm:text-base">
                    {index + 1}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="max-w-3xl mx-auto mt-10">
          <ReportForm language={language} />
        </div>
      </div>
    </div>
  );
};

export default DownloadReport;