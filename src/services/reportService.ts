// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// interface ReportResponse {
//   status: boolean;
//   message: string;
//   data?: any;
// }

// export const getReport = async (mobileNumber: string): Promise<ReportResponse> => {
//   try {
//     // Using the proxy path instead of full URL
//     const response = await axios.post('https://labmitravns.com/api/reports/getpatientreport/', {
//       mno: mobileNumber,
//       token: 'sanpreetsanindia'
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     });

//     return {
//       status: true,
//       message: 'Report fetched successfully',
//       data: response.data
//     };

//   } catch (error) {
//     const errorMessage = axios.isAxiosError(error)
//       ? error.response?.data?.message || 'Failed to connect to server'
//       : 'An unexpected error occurred';

//     toast.error(errorMessage);
//     console.error('Error details:', error);

//     return {
//       status: false,
//       message: errorMessage,
//       data: null
//     };
//   }
// };




// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// interface ReportResponse {
//   status: boolean;
//   message: string;
//   data?: any;
// }

// export const getReport = async (mobileNumber: string): Promise<ReportResponse> => {
//   try {
//     const formData = new FormData();
//     formData.append('mno', mobileNumber);
//     formData.append('token', 'sanpreetsanindia');

//     const response = await axios.post(
//       '/api/reports/getpatientreport',
//       formData,
//       {
//         headers: {
//           Accept: 'application/json',
//         },
//         withCredentials: true, // Ensures cookies are sent
//       }
//     );

//     toast.success('Report fetched successfully');

//     return {
//       status: true,
//       message: 'Report fetched successfully',
//       data: response.data,
//     };
//   } catch (error) {
//     const errorMessage = axios.isAxiosError(error)
//       ? error.response?.data?.message || 'Failed to connect to the server'
//       : 'An unexpected error occurred';

//     toast.error(errorMessage);
//     console.error('Error details:', error);

//     return {
//       status: false,
//       message: errorMessage,
//       data: null,
//     };
//   }
// };


  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=o4q5j9aie085sdna94nu1lgs4q58bkm0");

    const formdata = new FormData();
    formdata.append("mno", "9452624111");
    formdata.append("token", "sanpreetsanindia");

    // const requestOptions = ;

    fetch("https://labmitravns.com/api/reports/getpatientreport", {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface ReportResponse {
  status: boolean;
  message: string;
  data?: any;
}

export const getReport = async (mobileNumber: string): Promise<ReportResponse> => {
  try {
    const formData = new FormData();
    formData.append('mno', mobileNumber);
    formData.append('token', 'sanpreetsanindia');

    const response = await axios.post(
      'https://labmitravns.com/api/reports/getpatientreport',
      formData,
      {
        headers: {
          'Accept': 'application/form-data',
          "Cookie": "ci_session=o4q5j9aie085sdna94nu1lgs4q58bkm0"
        },
        withCredentials: true, // Ensures cookies are sent with the request
      }
    );

    toast.success('Report fetched successfully');

    return {
      status: true,
      message: 'Report fetched successfully',
      data: response.data,
    };
  } catch (error) {
    const errorMessage = axios.isAxiosError(error)
      ? error.response?.data?.message || 'Failed to fetch the report'
      : 'An unexpected error occurred';

    toast.error(errorMessage);
    console.error('Error details:', error);

    return {
      status: false,
      message: errorMessage,
      data: null,
    };
  }
};