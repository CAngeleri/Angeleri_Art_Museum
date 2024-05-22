import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import LandingPage from './views/LandingPage.jsx'
import Header from './components/Header.jsx'
import PageFooter from './components/PageFooter.jsx'
import ArtDetailsPage from './views/ArtDetailsPage.jsx'
import AboutMe from './views/AboutMe.jsx'

function App() {
  const [isLargeFont, setIsLargeFont] = useState(false);
  const [isLowVolume, setIsLowVolume] = useState(false);

  const toggleLargeFont = () => {
    setIsLargeFont(!isLargeFont);
  };

  const toggleLowVolume = () => {
    setIsLowVolume(!isLowVolume);
  };

  return (
    <div className='app-container'>


    <div className={isLargeFont ? 'large-font' : ''}>
      <div className={isLowVolume ? 'low-volume' : ''}>
        <BrowserRouter>
          <Header onToggleLargeFont={toggleLargeFont} onToggleLowVolume={toggleLowVolume} />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/details/:id' element={<ArtDetailsPage />} />
            <Route path='/aboutMe' element={<AboutMe />} />
          </Routes>
          <PageFooter />
        </BrowserRouter>
      </div>
    </div>
    </div>
  );
}

export default App
