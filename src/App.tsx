import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
import { CoinDetail } from './pages/CoinDetail';
import { BeginnersGuide } from './pages/BeginnersGuide';
import { NewsPage } from './pages/NewsPage';
import { ComparisonsPage } from './pages/ComparisonsPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { RiskDisclaimer } from './pages/RiskDisclaimer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { CookieConsent } from './components/CookieConsent';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="pb-20">
          <ThemeToggle />
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coin/:id" element={<CoinDetail />} />
            <Route path="/guide" element={<BeginnersGuide />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/compare" element={<ComparisonsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <CookieConsent />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;