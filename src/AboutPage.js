import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="about-title">BRAINY</h1>
        <p className="about-subtitle">Informace o naší aplikaci</p>
        <div className="about-description">
          <p>
            BRAINY je inovativní platforma, která slouží k sdílení myšlenek, nápadů a znalostí.
            Naše cílem je poskytnout uživatelům prostředí, kde mohou komunikovat, inspirovat se
            a spolupracovat na řešení problémů a dosahování cílů.
          </p>
          <p>
            BRAINY vám umožňuje vytvářet články, blogy a sdílet své myšlenky s ostatními
            uživateli. Můžete také prozkoumat nápady a projekty ostatních uživatelů a zapojit
            se do diskuzí a spolupráce.
          </p>
          <p>
            Připojte se k nám a staňte se součástí naší komunity sdílení myšlenek a
            inspirace!
          </p>
          <p>
            Kontakt:  honcuon1@uhk.cz
          </p>
          <div className="button-container">
            <Link to="/home" className="nav-link-item">Začít číst</Link>
            <Link to="/blog" className="nav-link-item">Začít psát</Link>
            <Link to="/ideas" className="nav-link-item">Inspirace</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
