// SitePresentation.js
import React from 'react';
import '../assets/styles/cpn/sitepresentation.scss';
import Img1 from "../assets/Images/Imgc.webp";
import Img2 from "../assets/Images/Imga.webp";
import Img3 from "../assets/Images/Imgd.webp";
import Img4 from "../assets/Images/Imgb.webp";

function SitePresentation() {
  return (
    <section className="site-presentation">
      <h2>Feel & Match</h2>
      <p>Votre site de rencontre spécialisé dans les speed dating innovants...</p>
      <div className="gallery">
        <img src={Img1} alt="Couple 1" />
        <img src={Img2} alt="Couple 2" />
        <img src={Img3} alt="Couple 3" />
        <img src={Img4} alt="Couple 4" />
      </div>
    </section>
  );
}

export default SitePresentation;


