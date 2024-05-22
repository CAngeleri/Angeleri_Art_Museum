import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import LandingPage from "./views/LandingPage.jsx";
import Header from "./components/Header.jsx";
import PageFooter from "./components/PageFooter.jsx";
import ArtDetailsPage from "./views/ArtDetailsPage.jsx";
import AboutMe from "./views/AboutMe.jsx";

function App() {
  const [isLargeFont, setIsLargeFont] = useState(false);


  const toggleLargeFont = () => {
    setIsLargeFont(!isLargeFont);
  };


  return (
    <div className="app-container">
          <BrowserRouter>
            <PrimeReactProvider>
              <Header
                onToggleLargeFont={toggleLargeFont}
              />
      <div className={isLargeFont ? "large-font" : ""}>
        
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/details/:id" element={<ArtDetailsPage />} />
                <Route path="/aboutMe" element={<AboutMe />} />
              </Routes>
        
      </div>
              <PageFooter />
            </PrimeReactProvider>
          </BrowserRouter>
    </div>
  );
}

export default App;
