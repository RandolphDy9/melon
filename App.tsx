
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import IndividualServices from './components/IndividualServices';
import Reviews from './components/Reviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <BentoGrid />
        <Packages />
        <Gallery />
        <IndividualServices />
        <Reviews />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
