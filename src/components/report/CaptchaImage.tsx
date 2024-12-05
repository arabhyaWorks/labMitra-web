import React from "react";
import { RefreshCcw } from "lucide-react";

const CaptchaImage = ({ captcha, onClick }) => {
  return (
    <div className="flex flex-col space-y-1.5 sm:space-y-2">
      <div className="relative">
        <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="text-2xl sm:text-3xl font-bold tracking-[0.3em] sm:tracking-[0.5em] text-gray-700 select-none">
            {captcha}
          </div>
          <button
            onClick={onClick}
            type="button"
            className="absolute right-2 top-2 p-1.5 sm:p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-colors"
            aria-label="Refresh Security Code"
          >
            <RefreshCcw className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaptchaImage;
