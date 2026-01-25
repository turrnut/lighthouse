import "../i18n";
import { useTranslation } from "react-i18next";
import "../styles/mycss.css";
import AboutUs from "../pages/AboutUs";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import StudentResources from "../pages/StudentResources";
import { Routes, Route } from "react-router-dom";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/stdres" element={<StudentResources />} />
          <Route path="/about" element={<AboutUs />} />
      </Routes>
     
    </>
  );
}

export default App;
