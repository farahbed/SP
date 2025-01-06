import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#cookies">Cookies</a>
        <a href="#conditions">Conditions générales</a>
        <a href="#account">Mon compte</a>
        <a href="#privacy">Politique de confidentialité</a>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
