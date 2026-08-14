import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation } from
'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/layout/FloatingContact';
import { EnquiryModal } from './components/EnquiryModal';
import { EnquiryProvider } from './contexts/EnquiryContext';
import { SavedGemsProvider } from './contexts/SavedGemsContext';
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { GemstoneDetail } from './pages/GemstoneDetail';
import { CustomGemRequest } from './pages/CustomGemRequest';
import { RequestCallback } from './pages/RequestCallback';
import { CeylonGems } from './pages/CeylonGems';
import { GemGuide } from './pages/GemGuide';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <SavedGemsProvider>
        <EnquiryProvider>
          <div className="flex min-h-screen w-full flex-col bg-white">
            <ScrollToTop />
            <Header />
            <main id="main" className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gemstones" element={<Collection />} />
                <Route path="/gemstones/:ref" element={<GemstoneDetail />} />
                <Route path="/custom-gem-request" element={<CustomGemRequest />} />
                <Route path="/request-a-callback" element={<RequestCallback />} />
                <Route path="/ceylon-gems" element={<CeylonGems />} />
                <Route path="/gem-guide" element={<GemGuide />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <FloatingContact />
            <EnquiryModal />
            <Toaster
              position="bottom-center"
              toastOptions={{
                style: {
                  borderRadius: '14px',
                  border: '1px solid #e6e8ee',
                  color: '#12151c'
                }
              }} />
            
          </div>
        </EnquiryProvider>
      </SavedGemsProvider>
    </BrowserRouter>);

}