import React from 'react';
import './EventSection.css';
import Img6 from '../../assets/Images/Img6.jpg';

function EventSection() {
  return (
    <section className="event-section">
      <div className="event-details">
        <h2>Votre Prochain Speed Dating :</h2>
        <img src={Img6} alt="Speed Dating Event" />
        <p>
          <strong>Le :</strong> 01.01.2025 <br />
          <strong>Lieu :</strong> 1 rue de Paris, 75000 Paris
        </p>
      </div>
      <div className="subscriptions">
        {/* Carte Achat Unique */}
        <div className="subscription-card">
          <h3>Achat Unique</h3>
          <p className="price">30€</p>
          <ul>
            <li>Participation à un événement</li>
            <li>Accès à la galerie</li>
          </ul>
          <button>Valider</button>
        </div>
        {/* Carte Basic */}
        <div className="subscription-card basic">
          <h3>Basic</h3>
          <p className="price">40€/mois</p>
          <ul>
            <li>Participation illimitée</li>
            <li>Suggestions personnalisées</li>
          </ul>
          <button>Abonnez-vous</button>
        </div>
        {/* Carte Premium */}
        <div className="subscription-card premium">
          <h3>Premium</h3>
          <p className="price">50€/mois</p>
          <ul>
            <li>Tout du Basic</li>
            <li>Coaching personnalisé</li>
            <li>Événements exclusifs</li>
          </ul>
          <button>Abonnez-vous</button>
        </div>
      </div>
    </section>
  );
}

export default EventSection;
