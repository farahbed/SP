// UpcomingEvent.js
import React from 'react';
import '../assets/styles/cpn/_UpcomingEvent.scss';

function UpcomingEvent() {
  return (
    <section className="upcoming-event">
      <h2>Prochain événement</h2>
      <p>Date : 01.01.2025</p>
      <p>Lieu : 1 rue de Paris, 75000 Paris</p>
      <button>Réservez votre place</button>
    </section>
  );
}

export default UpcomingEvent;
