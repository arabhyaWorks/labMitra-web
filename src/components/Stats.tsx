import React from 'react';
import { FileText, Building2, Users, Phone } from 'lucide-react';

interface StatsProps {
  language: 'en' | 'hi';
}

const Stats: React.FC<StatsProps> = ({ language }) => {
  const stats = [
    {
      icon: FileText,
      value: language === 'en' ? 'Digital Reports' : 'डिजिटल रिपोर्ट',
      description: language === 'en' ? 'Get lab reports on mobile' : 'मोबाइल पर तुरंत लैब रिपोर्ट प्राप्त करें'
    },
    {
      icon: Building2,
      value: language === 'en' ? '15+ Centers' : '15+ केंद्र',
      description: language === 'en' ? 'Conveniently located in Varanasi' : 'वाराणसी में सुविधाजनक स्थानों पर'
    },
    {
      icon: Users,
      value: language === 'en' ? '1 Lakh+ Patients' : '1 लाख+ मरीज',
      description: language === 'en' ? 'Benefited from our services' : 'हमारी सेवाओं से लाभान्वित'
    },
    {
      icon: Phone,
      value: language === 'en' ? '24x7 Support' : '24x7 सहायता',
      description: language === 'en' ? 'Contact us anytime' : 'किसी भी समय हमसे संपर्क करें'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <stat.icon className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;