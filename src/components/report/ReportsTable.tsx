import React from 'react';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Report {
  Id: string;
  PTestCode: string;
  Pnum: string;
  Status: string;
  report: string;
}

interface ReportsTableProps {
  reports: Report[];
  language: 'en' | 'hi';
}

const ReportsTable: React.FC<ReportsTableProps> = ({ reports, language }) => {
  const navigate = useNavigate();

  const content = {
    en: {
      title: 'Download Test Report',
      subtitle: 'Your lab reports are ready for download',
      tableHeaders: {
        srNo: 'Sr.No.',
        testCode: 'Test Code',
        contactNumber: 'Contact Number',
        status: 'Status',
        action: 'Download Report'
      },
      back: 'Back',
      download: 'Download',
      status: {
        success: 'Success',
        pending: 'Pending',
        failed: 'Failed'
      }
    },
    hi: {
      title: 'टेस्ट रिपोर्ट डाउनलोड करें',
      subtitle: 'आपकी लैब रिपोर्ट डाउनलोड के लिए तैयार हैं',
      tableHeaders: {
        srNo: 'क्र.सं.',
        testCode: 'टेस्ट कोड',
        contactNumber: 'संपर्क नंबर',
        status: 'स्थिति',
        action: 'रिपोर्ट डाउनलोड करें'
      },
      back: 'वापस',
      download: 'डाउनलोड',
      status: {
        success: 'सफल',
        pending: 'प्रतीक्षारत',
        failed: 'विफल'
      }
    }
  };

  const handleDownload = (reportUrl: string) => {
    window.open(`https://labmitravns.com/${reportUrl}`, '_blank');
  };

  // Mobile view card layout
  const MobileReportCard = ({ report, index }: { report: Report; index: number }) => (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">{content[language].tableHeaders.srNo} {index + 1}</span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {content[language].status.success}
        </span>
      </div>
      <div className="space-y-2">
        <div>
          <label className="text-xs text-gray-500">{content[language].tableHeaders.testCode}</label>
          <p className="text-sm font-medium">{report.PTestCode}</p>
        </div>
        <div>
          <label className="text-xs text-gray-500">{content[language].tableHeaders.contactNumber}</label>
          <p className="text-sm font-medium">{report.Pnum}</p>
        </div>
        <button
          onClick={() => handleDownload(report.report)}
          className="w-full mt-2 inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm"
        >
          <Download className="w-4 h-4 mr-2" />
          {content[language].download}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {content[language].title}
                </h1>
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {content[language].back}
                </button>
              </div>
              <p className="mt-2 text-gray-600">{content[language].subtitle}</p>
            </div>

            {/* Desktop view */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      {content[language].tableHeaders.srNo}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      {content[language].tableHeaders.testCode}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      {content[language].tableHeaders.contactNumber}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      {content[language].tableHeaders.status}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                      {content[language].tableHeaders.action}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {reports.map((report, index) => (
                    <tr key={report.Id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {report.PTestCode}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {report.Pnum}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {content[language].status.success}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDownload(report.report)}
                          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {content[language].download}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile view */}
            <div className="md:hidden p-4">
              {reports.map((report, index) => (
                <MobileReportCard key={report.Id} report={report} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsTable;