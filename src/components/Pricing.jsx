// Pricing.js
import React from 'react';
import '../assets/styles/cpn/_pricing.scss';

function Pricing() {
  return (
    <section className="pricing">
      <h2>Tarifs</h2>
      <div className="pricing-options">
        <div className="option">
          <h3>Early Ticket</h3>
          <p>20€</p>
          <button>Acheter maintenant</button>
        </div>
        <div className="option">
          <h3>Last Ticket</h3>
          <p>35€</p>
          <button>Acheter maintenant</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;