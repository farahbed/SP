import React from 'react';
import './HeroSection.css';
import Img1 from '../../assets/Images/Img1.jpg';
import Img2 from '../../assets/Images/Img2.jpg';
import Img3 from '../../assets/Images/Img3.jpg';
import Img4 from '../../assets/Images/Img4.jpg';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Feel <span className="red">&</span> Match</h1>
        <p className="tagline">Tout le monde se cherche, personne ne se trouve</p>
        <p>Votre site de rencontre spécialisé dans les speed dating innovants…</p>
      </div>
      
      <div className="image-gallery">
        <img src={Img1} alt="Couple 1" />
        <img src={Img2} alt="Couple 2" />
        <img src={Img3} alt="Couple 3" />
        <img src={Img4} alt="Couple 4" />
      </div>
    </section>
  );
}

export default HeroSection;


