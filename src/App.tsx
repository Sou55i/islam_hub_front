import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Hadiths } from './pages/Hadiths';
import { Dhikrs } from './pages/Dhikrs';
import { Douaas } from './pages/Douaas';
import { Jurisprudence } from './pages/Jurisprudence';
import { Biographies } from './pages/Biographies';
import { Multimedia } from './pages/Multimedia';
import { PrayerTimesPage } from './pages/PrayerTimes';
import { ThemeProvider } from './context/ThemeContext';
import { Croyance } from './pages/Croyance';
import { Madhaheb } from './pages/Madhaheb';
import AttributsDeDieu from './pages/foi/CroireEnDieu/AttributsDeDieu';


// Import groupé depuis le dossier foi
import {
  CroyanceEnDieu,
  CroyanceAnges,
  CreationMonde,
  jourDernier,
  predestination,
  tombe,
  livres,
} from './pages/foi';

// Import groupé depuis le dossier ecoles

import {
  Hanafi, // Import depuis index.ecoles.tsx
  Malikite,
  Shafii,
  Hanbalite,
} from './pages/ecoles';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/croyance" element={<Croyance />} />
              <Route path="/hadiths" element={<Hadiths />} />
              <Route path="/dhikrs" element={<Dhikrs />} />
              <Route path="/douaas" element={<Douaas />} />
              <Route path="/jurisprudence" element={<Jurisprudence />} />
              <Route path="/biographies" element={<Biographies />} />
              <Route path="/multimedia" element={<Multimedia />} />
              <Route path="/prayer-times" element={<PrayerTimesPage />} />
              <Route path="/foi" element={<Croyance />} />
              <Route path="/ecoles" element={<Madhaheb />} />
              <Route path="/ecoles/Hanafi" element={<Hanafi />} />
              <Route path="/ecoles/Malikite" element={<Malikite />} />
              <Route path="/ecoles/Shafii" element={<Shafii />} />
              <Route path="/ecoles/Hanbalite" element={<Hanbalite />} />
              <Route path="/foi/CroyanceEnDieu" element={<CroyanceEnDieu />} />
              <Route path="/foi/CroireEnDieu/AttributsDeDieu" element={<AttributsDeDieu />} />
              <Route path="/foi/CroyanceAnges" element={<CroyanceAnges />} />
              <Route path="/foi/CreationMonde" element={<CreationMonde />} />
              <Route path="/foi/jourDernier" element={<jourDernier />} />
              <Route path="/foi/predestination" element={<predestination />} />
              <Route path="/foi/tombe" element={<tombe />} />
              <Route path="/foi/livres" element={<livres />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;