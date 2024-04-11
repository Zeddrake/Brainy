import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faFlask, faShieldAlt, faCode, faShoppingBag, faChalkboardTeacher, faStar } from '@fortawesome/free-solid-svg-icons';
import './IdeasPage.css';

const IdeasPage = () => {
  return (
    <div className="ideas-page">
      <div className="idea">
        <div className="idea-header">
          <h3 className="idea-title">Matematická výzva</h3>
          <p className="idea-category"><FontAwesomeIcon icon={faCalculator} /> Matematika</p>
        </div>
        <p className="idea-author">Autor: Prof. Martin Novák</p>
        <p className="idea-content">Vytvořte nový matematický algoritmus pro optimalizaci řešení lineárních rovnic ve finanční analýze.</p>
        
        <div className="favorite-btn">
          <input type="checkbox" id="favorite1" />
          <label htmlFor="favorite1">
            <FontAwesomeIcon icon={faStar} />
          </label>
          <button className="more-info-btn">Více informací</button>
        </div>
      </div>
      <div className="idea">
        <div className="idea-header">
          <h3 className="idea-title">Fyzikální experiment</h3>
          <p className="idea-category"><FontAwesomeIcon icon={faFlask} /> Fyzika</p>
        </div>
        <p className="idea-author">Autor: Dr. Eva Nová</p>
        <p className="idea-content">Navrhněte experiment pro měření tepelné vodivosti nových izolačních materiálů s využitím moderních senzorů a technologií.</p>
        
        <div className="favorite-btn">
          <input type="checkbox" id="favorite2" />
          <label htmlFor="favorite2">
            <FontAwesomeIcon icon={faStar} />
          </label>
          <button className="more-info-btn">Více informací</button>
        </div>
      </div>
      <div className="idea">
        <div className="idea-header">
          <h3 className="idea-title">Cybersecurity v praxi</h3>
          <p className="idea-category"><FontAwesomeIcon icon={faShieldAlt} /> Cybersecurity</p>
        </div>
        <p className="idea-author">Autor: Ing. Petr Novák</p>
        <p className="idea-content">Vypracujte bezpečnostní analýzu a návrh zabezpečení pro rozšíření systému správy firemních dat o nové IoT zařízení.</p>
        
        <div className="favorite-btn">
          <input type="checkbox" id="favorite3" />
          <label htmlFor="favorite3">
            <FontAwesomeIcon icon={faStar} />
          </label>
          <button className="more-info-btn">Více informací</button>
        </div>
      </div>
      <div className="idea">
        <div className="idea-header">
          <h3 className="idea-title">Vývoj softwaru</h3>
          <p className="idea-category"><FontAwesomeIcon icon={faCode} /> Programování</p>
        </div>
        <p className="idea-author">Autor: Kateřina Malá</p>
        <p className="idea-content">Implementujte nový algoritmus pro automatickou detekci a opravu chyb v kódu vývojového prostředí s využitím strojového učení.</p>
        
        <div className="favorite-btn">
          <input type="checkbox" id="favorite4" />
          <label htmlFor="favorite4">
            <FontAwesomeIcon icon={faStar} />
          </label>
          <button className="more-info-btn">Více informací</button>
        </div>
      </div>
      <div className="idea">
        <div className="idea-header">
          <h3 className="idea-title">Podnikatelský plán</h3>
          <p className="idea-category"><FontAwesomeIcon icon={faShoppingBag} /> Podnikání</p>
        </div>
        <p className="idea-author">Autor: Jan Novotný</p>
        <p className="idea-content">Sestavte podrobný podnikatelský plán pro zahájení výroby a prodeje inovativních ekologických obalů vyrobených z biologicky rozložitelných materiálů.</p>
        
        <div className="favorite-btn">
          <input type="checkbox" id="favorite5" />
          <label htmlFor="favorite5">
            <FontAwesomeIcon icon={faStar} />
          </label>
          <button className="more-info-btn">Více informací</button>
        </div>
      </div>
      <div className="idea">
        <div className="idea-header">
          <h3 className="idea-title">Moderní vzdělávání</h3>
          <p className="idea-category"><FontAwesomeIcon icon={faChalkboardTeacher} /> Vzdělávání</p>
        </div>
        <p className="idea-author">Autor: Mgr. Veronika Dvořáková</p>
        <p className="idea-content">Navrhněte a zhodnoťte efektivitu nových metod vzdělávání na dálku včetně využití interaktivních prvků a online tutoriálů.</p>
        
        <div className="favorite-btn">
          <input type="checkbox" id="favorite6" />
          <label htmlFor="favorite6">
            <FontAwesomeIcon icon={faStar} />
          </label>
          <button Action='https://www.uhk.cz/' className="more-info-btn">Více informací</button>
        </div>
      </div>
    </div>
  );
}

export default IdeasPage;