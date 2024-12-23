// import React, { useState } from "react";
// import { ArrowLeft, RefreshCcw, AlertCircle, Menu } from "lucide-react";
// import { toast, Toaster } from "react-hot-toast";
// import CaptchaImage from "./CaptchaImage";
// import FormInput from "../common/FormInput";
// import { getReport } from "../../utils/getReports"; // Import updated getReport

// interface ReportFormProps {
//   language: "en" | "hi";
// }
// const ReportForm: React.FC<ReportFormProps> = ({ language }) => {
//   const [formData, setFormData] = useState({ contactNumber: "" });
//   const [loading, setLoading] = useState(false);

//   const [captcha, setCaptcha] = useState("");
//   const [captchaValue, setCaptchaValue] = useState(
//     Math.random().toString(36).slice(2, 8).toUpperCase()
//   );

//   const refreshCaptcha = () => {
//     setCaptchaValue(Math.random().toString(36).slice(2, 8).toUpperCase());
//     setCaptcha("");
//   };

//   const content = {
//     en: {
//       contactLabel: "Enter Contact Number",
//       contactPlaceholder: "Enter your 10-digit mobile number",
//       captchaLabel: "Enter Security Code",
//       captchaPlaceholder: "Enter the code shown above",
//       backButton: "Back",
//       resetButton: "Reset Form",
//       submitButton: "Download Report",
//       mandatory: "* Fields are Mandatory",
//       note: "Your report will be sent to your registered mobile number",
//       errors: {
//         invalidNumber: "Please enter a valid 10-digit mobile number",
//         invalidCaptcha: "Please enter the correct security code",
//         fetchError: "Error fetching report. Please try again.",
//         noReport: "No report found for this mobile number",
//       },
//     },
//     hi: {
//       contactLabel: "संपर्क नंबर दर्ज करें",
//       contactPlaceholder: "अपना 10 अंकों का मोबाइल नंबर दर्ज करें",
//       captchaLabel: "सुरक्षा कोड दर्ज करें",
//       captchaPlaceholder: "ऊपर दिखाया गया कोड दर्ज करें",
//       backButton: "वापस",
//       resetButton: "फॉर्म रीसेट करें",
//       submitButton: "रिपोर्ट डाउनलोड करें",
//       mandatory: "* फ़ील्ड अनिवार्य हैं",
//       note: "आपकी रिपोर्ट आपके पंजीकृत मोबाइल नंबर पर भेजी जाएगी",
//       errors: {
//         invalidNumber: "कृपया एक वैध 10 अंकों का मोबाइल नंबर दर्ज करें",
//         invalidCaptcha: "कृपया सही सुरक्षा कोड दर्ज करें",
//         fetchError: "रिपोर्ट प्राप्त करने में त्रुटि। कृपया पुनः प्रयास करें।",
//         noReport: "इस मोबाइल नंबर के लिए कोई रिपोर्ट नहीं मिली",
//       },
//     },
//   };

//   const validateForm = () => {
//     if (!/^\d{10}$/.test(formData.contactNumber)) {
//       toast.error(content[language].errors.invalidNumber);
//       return false;
//     }
//     if (captcha !== captchaValue) {
//       toast.error(content[language].errors.invalidCaptcha);
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setLoading(true);

//     // try {
//     //   const data = await getReport(formData.contactNumber);
//     //   if (data.status) {
//     //     toast.success("Report fetched successfully!");
//     //     console.log("Report Data:", data);
//     //     // Handle report data
//     //   } else {
//     //     toast.error(content[language].errors.noReport);
//     //   }
//     // } catch (error) {
//     //   toast.error(content[language].errors.fetchError);
//     // } finally {
//     //   setLoading(false);
//     // }

//     const myHeaders = new Headers();
//     myHeaders.append("Cookie", "ci_session=o4q5j9aie085sdna94nu1lgs4q58bkm0");

//     const formdata = new FormData();
//     formdata.append("mno", formData.contactNumber);
//     formdata.append("token", "sanpreetsanindia");

//     fetch("https://labmitravns.com/api/reports/getpatientreport", {
//       method: "POST",
//       headers: myHeaders,
//       body: formdata,
//       redirect: "follow",
//     })
//       .then((response) => {
//         setLoading(false);
//         return response.json();
//       })
//       .then((result) => console.log(result))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   };

//   const handleReset = () => {
//     setFormData({ contactNumber: "" });
//     setCaptcha("");
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
//       <Toaster position="top-center" />
//       <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
//         <div className="pb-4 border-b border-gray-200">
//           <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
//             {language === "en" ? "Report Access Form" : "रिपोर्ट एक्सेस फॉर्म"}
//           </h3>
//           <p className="mt-1 text-sm text-gray-500">{content[language].note}</p>
//         </div>

//         <div className="space-y-4 sm:space-y-6">
//           <FormInput
//             label={content[language].contactLabel}
//             type="tel"
//             value={formData.contactNumber}
//             onChange={(e) =>
//               setFormData({ ...formData, contactNumber: e.target.value })
//             }
//             placeholder={content[language].contactPlaceholder}
//             required
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//             <FormInput
//               label={content[language].captchaLabel}
//               type="text"
//               value={captcha}
//               onChange={(e) => setCaptcha(e.target.value)}
//               placeholder={content[language].captchaPlaceholder}
//               required
//             />
//             <CaptchaImage onClick={refreshCaptcha} captcha={captchaValue} />
//           </div>
//         </div>

//         <div className="pt-4 sm:pt-6 border-t border-gray-200">
//           <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex items-center text-red-500 text-sm">
//               <AlertCircle className="w-4 h-4 mr-1" />
//               <span>{content[language].mandatory}</span>
//             </div>
//             <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
//               <button
//                 type="button"
//                 onClick={() => window.history.back()}
//                 className="px-4 py-2 border text-gray-700 rounded-lg hover:bg-gray-50"
//               >
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 {content[language].backButton}
//               </button>
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
//               >
//                 <RefreshCcw className="w-4 h-4 mr-2" />
//                 {content[language].resetButton}
//               </button>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`px-4 py-2 bg-purple-600 text-white rounded-lg ${
//                   loading
//                     ? "opacity-75 cursor-not-allowed"
//                     : "hover:bg-purple-700"
//                 }`}
//               >
//                 {loading ? "Loading..." : content[language].submitButton}
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ReportForm;


import React, { useState } from "react";
import { ArrowLeft, RefreshCcw, AlertCircle } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import CaptchaImage from "./CaptchaImage";
import FormInput from "../common/FormInput";
import ReportsTable from "./ReportsTable";

interface ReportFormProps {
  language: "en" | "hi";
}

const ReportForm: React.FC<ReportFormProps> = ({ language }) => {
  const [formData, setFormData] = useState({ contactNumber: "" });
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState(null);

  const [captcha, setCaptcha] = useState("");
  const [captchaValue, setCaptchaValue] = useState(
    Math.random().toString(36).slice(2, 8).toUpperCase()
  );

  const refreshCaptcha = () => {
    setCaptchaValue(Math.random().toString(36).slice(2, 8).toUpperCase());
    setCaptcha("");
  };

  const content = {
    en: {
      contactLabel: "Enter Contact Number",
      contactPlaceholder: "Enter your 10-digit mobile number",
      captchaLabel: "Enter Security Code",
      captchaPlaceholder: "Enter the code shown above",
      backButton: "Back",
      resetButton: "Reset Form",
      submitButton: "Download Report",
      mandatory: "* Fields are Mandatory",
      note: "Your report will be sent to your registered mobile number",
      errors: {
        invalidNumber: "Please enter a valid 10-digit mobile number",
        invalidCaptcha: "Please enter the correct security code",
        fetchError: "Error fetching report. Please try again.",
        noReport: "No report found for this mobile number",
      },
    },
    hi: {
      contactLabel: "संपर्क नंबर दर्ज करें",
      contactPlaceholder: "अपना 10 अंकों का मोबाइल नंबर दर्ज करें",
      captchaLabel: "सुरक्षा कोड दर्ज करें",
      captchaPlaceholder: "ऊपर दिखाया गया कोड दर्ज करें",
      backButton: "वापस",
      resetButton: "फॉर्म रीसेट करें",
      submitButton: "रिपोर्ट डाउनलोड करें",
      mandatory: "* फ़ील्ड अनिवार्य हैं",
      note: "आपकी रिपोर्ट आपके पंजीकृत मोबाइल नंबर पर भेजी जाएगी",
      errors: {
        invalidNumber: "कृपया एक वैध 10 अंकों का मोबाइल नंबर दर्ज करें",
        invalidCaptcha: "कृपया सही सुरक्षा कोड दर्ज करें",
        fetchError: "रिपोर्ट प्राप्त करने में त्रुटि। कृपया पुनः प्रयास करें।",
        noReport: "इस मोबाइल नंबर के लिए कोई रिपोर्ट नहीं मिली",
      },
    },
  };

  const validateForm = () => {
    if (!/^\d{10}$/.test(formData.contactNumber)) {
      toast.error(content[language].errors.invalidNumber);
      return false;
    }
    if (captcha !== captchaValue) {
      toast.error(content[language].errors.invalidCaptcha);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=o4q5j9aie085sdna94nu1lgs4q58bkm0");

    const formdata = new FormData();
    formdata.append("mno", formData.contactNumber);
    formdata.append("token", "sanpreetsanindia");

    try {
      const response = await fetch("https://labmitravns.com/api/reports/getpatientreport", {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      });
      
      const result = await response.json();
      
      if (result.status === 1 && result.data) {
        setReports(result.data);
        toast.success("Reports fetched successfully!");
      } else {
        toast.error(content[language].errors.noReport);
      }
    } catch (error) {
      console.error(error);
      toast.error(content[language].errors.fetchError);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ contactNumber: "" });
    setCaptcha("");
    setReports(null);
  };

  if (reports) {
    return <ReportsTable reports={reports} language={language} />;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        <div className="pb-4 border-b border-gray-200">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {language === "en" ? "Report Access Form" : "रिपोर्ट एक्सेस फॉर्म"}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{content[language].note}</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <FormInput
            label={content[language].contactLabel}
            type="tel"
            value={formData.contactNumber}
            onChange={(e) =>
              setFormData({ ...formData, contactNumber: e.target.value })
            }
            placeholder={content[language].contactPlaceholder}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <FormInput
              label={content[language].captchaLabel}
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              placeholder={content[language].captchaPlaceholder}
              required
            />
            <CaptchaImage onClick={refreshCaptcha} captcha={captchaValue} />
          </div>
        </div>

        <div className="pt-4 sm:pt-6 border-t border-gray-200">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center text-red-500 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              <span>{content[language].mandatory}</span>
            </div>
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex items-center justify-center px-4 py-2 border text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {content[language].backButton}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                {content[language].resetButton}
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg ${
                  loading
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:bg-purple-700"
                }`}
              >
                {loading ? "Loading..." : content[language].submitButton}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReportForm;