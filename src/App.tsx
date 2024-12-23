import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Award, Download, MapPin } from "lucide-react";
import Navbar from "./components/Navbar";
import LanguageToggle from "./components/LanguageToggle";
import Stats from "./components/Stats";
import ProcessSteps from "./components/ProcessSteps";
import Awards from "./components/Awards";
import AppDownload from "./components/AppDownload";
import MediaSection from "./components/MediaSection";
import ImportantLinks from "./components/ImportantLinks.tsx";
import Footer from "./components/Footer";
import AwardsShowcase from "./components/AwardsShowcase";
import DownloadReport from "./pages/DownloadReport";
import img1 from "./img1.png";

const content = {
  en: {
    hero: {
      title: "Lab Reports at Your Fingertips",
      subtitle:
        "Access your medical test results instantly through our revolutionary healthcare service. Bringing advanced diagnostics closer to every citizen of Varanasi.",
      award: "National e-Governance Gold Award 2024",
      cta: {
        report: "Access Your Lab Report",
        center: "Find Lab Mitra Center",
      },
    },
  },
  hi: {
    hero: {
      title: "अपनी लैब रिपोर्ट तुरंत प्राप्त करें",
      subtitle:
        "लैब मित्र के साथ अपनी स्वास्थ्य जांच रिपोर्ट को डिजिटल रूप में पाएं। सरल, सुरक्षित और तेज।",
      award: "राष्ट्रीय ई-गवर्नेंस स्वर्ण पुरस्कार 2024",
      cta: {
        report: "रिपोर्ट डाउनलोड करें",
        center: "नजदीकी केंद्र खोजें",
      },
    },
  },
};

const HomePage = ({ language }) => {
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
  const navigate = useNavigate();
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center bg-purple-50 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 text-sm">
              {content[language].hero.award}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {content[language].hero.title}
          </h1>

          <p className="text-lg text-gray-600">
            {content[language].hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/download-report")}
              className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              <Download className="w-5 h-5 mr-2" />
              {content[language].hero.cta.report}
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <img src={img1} alt="Lab Mitra" className="rounded-lg shadow-sm" />
        </div>
      </section>

      <Stats language={language} />
      <ProcessSteps language={language} />
      <AwardsShowcase language={language} />
      <AppDownload language={language} />
      <MediaSection language={language} />
      <ImportantLinks language={language} />
    </div>
  );
};

function App() {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar language={language} />
        <LanguageToggle language={language} setLanguage={setLanguage} />

        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route
            path="/download-report"
            element={<DownloadReport language={language} />}
          />
        </Routes>

        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
