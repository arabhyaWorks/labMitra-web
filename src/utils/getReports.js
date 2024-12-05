import axios from "axios";

export const getReport = async (mobileNumber) => {
  const url = `https://labmitravns.com/api/reports/getpatientreport/`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Cookie: "ci_session=a21mhr3j5hevk3bf2b7l39mievdiksh9",
    },
  };

  try {
    const response = await axios.post(
      url,
      { mno: mobileNumber, token: "sanpreetsanindia" },
      config
    );

    if (response.data) {
      console.log("Response from API:", response.data);
      return response.data;
    } else {
      throw new Error("No data received from API.");
    }
  } catch (error) {
    console.error("Error fetching report:", error);
    throw error;
  }
};