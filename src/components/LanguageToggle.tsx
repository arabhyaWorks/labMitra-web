import React from 'react';

interface LanguageToggleProps {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, setLanguage }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
        className="px-4 py-2 bg-white border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition shadow-sm"
      >
        {language === 'en' ? 'हिंदी' : 'English'}
      </button>
    </div>
  );
};

export default LanguageToggle;