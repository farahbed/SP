import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import EventSection from './components/EventSection/EventSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className="main">
      <HeroSection />
      <EventSection />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;