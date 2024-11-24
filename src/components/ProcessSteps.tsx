import React from 'react';
import { ClipboardCheck, TestTube2, Clock, Send } from 'lucide-react';

interface ProcessStepsProps {
  language: 'en' | 'hi';
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ language }) => {
  const steps = {
    en: [
      {
        icon: ClipboardCheck,
        title: 'Registration',
        description: 'Quick registration for tests at any Lab Mitra center'
      },
      {
        icon: TestTube2,
        title: 'Testing',
        description: 'Visit CHCs and hospitals for sample collection'
      },
      {
        icon: Clock,
        title: 'Processing',
        description: 'State-of-the-art labs process your samples'
      },
      {
        icon: Send,
        title: 'Delivery',
        description: 'Receive reports via SMS within hours'
      }
    ],
    hi: [
      {
        icon: ClipboardCheck,
        title: 'पंजीकरण',
        description: 'किसी भी लैब मित्र केंद्र पर त्वरित पंजीकरण'
      },
      {
        icon: TestTube2,
        title: 'जांच',
        description: 'सैंपल कलेक्शन के लिए CHC और अस्पताल का दौरा'
      },
      {
        icon: Clock,
        title: 'प्रोसेसिंग',
        description: 'अत्याधुनिक लैब में सैंपल की जांच'
      },
      {
        icon: Send,
        title: 'डिलीवरी',
        description: 'कुछ घंटों में SMS द्वारा रिपोर्ट प्राप्त करें'
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === 'en' ? 'Simplifying Healthcare Through Innovation' : 'नवाचार के माध्यम से स्वास्थ्य सेवा को सरल बनाना'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps[language].map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <step.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;