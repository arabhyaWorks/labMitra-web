import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="text-center space-y-4 sm:space-y-6">
      {/* <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
      </div> */}
      <div className="space-y-2 sm:space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4">{title}</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;