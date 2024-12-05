import { toast } from 'react-hot-toast';

interface ReportResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const getReport = async (mobileNumber: string): Promise<ReportResponse> => {
  const url = 'https://labmitravns.com/api/reports/getpatientreport/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'ci_session=a21mhr3j5hevk3bf2b7l39mievdiksh9',
      },
      body: JSON.stringify({
        mno: mobileNumber,
        token: 'sanpreetsanindia'
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching patient report:', error);
    throw error;
  }
};