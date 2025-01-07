// App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SitePresentation from './components/SitePresentation';
import UpcomingEvent from './components/UpcomingEvent';
import Pricing from './components/Pricing';
import './assets/styles/App.scss';

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <SitePresentation />
        <UpcomingEvent />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
