import "./App.css";
import Navbar from "./Components/Common/Navbar/Navbar";
import Home from "./Components/Pages/Home/index";
import MultiStepForm from "./Components/Common/MultistepForm/Multistepform";
import FooterComponent from "./Components/Common/Footer/Footer";
import More from "./Components/Pages/More/more";
import Lookup from "./Components/Pages/Lookup/Lookup";
import VisaType from "./Components/Pages/VisaType/VisaType";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VisaNav from "./Components/Pages/VisaType/VisaNav/VisaNav";
import { VisibilityProvider } from "./Components/Pages/visibilityProvider/VisibilityContext";

function App() {
  return (
    <Router>
      <VisibilityProvider>
        <div className="background">
          <div className="desktop-hidden">
            <Navbar />
          </div>
          <div className="mobile-hidden">
            <VisaNav />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/MultiStepForm" element={<MultiStepForm />} />
            <Route path="/Lookup" element={<Lookup />} />
            <Route path="/More" element={<More />} />
            <Route path="/visatype" element={<VisaType />} />
          </Routes>
        </div>
        <div className="footer">
          <FooterComponent />
        </div>
      </VisibilityProvider>
    </Router>
  );
}

export default App;
