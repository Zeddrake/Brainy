import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import ikon z Font Awesome
import { faPlus, faCheck, faSun, faGlobe, faHome, faChartLine, faLandmark, faFutbol, faFilm, faMicrochip } from '@fortawesome/free-solid-svg-icons'; // Import ikony pluska, check, sluníčka, zeměkoule, domečku a burzy
import { Link } from 'react-router-dom'; // Import Link z React Router
import './HomePage.css'; // Importujeme styly pro domovskou stránku

function HomePage({ username }) {
  // Definujeme URL profilového obrázku uživatele
  const userProfileImage = 'url_profiloveho_obrazku.jpg';

  // Stav pro uložení aktuality
  const [savedArticles, setSavedArticles] = useState([]);

  // Funkce pro uložení aktuality
  const handleSave = (index) => {
    if (!savedArticles.includes(index)) {
      setSavedArticles([...savedArticles, index]);
    } else {
      setSavedArticles(savedArticles.filter((articleIndex) => articleIndex !== index));
    }
  };

  // Funkce pro zjištění, zda je článek uložen
  const isArticleSaved = (index) => {
    return savedArticles.includes(index);
  };

  // Data článků
  const articles = [
    {
      category: 'Astronomie',
      author: 'Martin Gembec',
      title: 'Velká skvrna a silné erupce na Slunci',
      content:
        'Na povrchu Slunce můžeme pozorovat velkou skvrnu. Ta je vidět i pouhým okem při použití správného filtru, jako jsou například brýle pro pozorování zatmění Slunce. Celá aktivní oblast zabírá opravdu velkou plochu a navíc zde dochází k velmi silným erupcím. 21. a 22. února dosáhly i nejsilnější kategorie X (X1,8 - X1,7 - X6,3). Ke škodě pozorovatelů polárních září, tyto erupce nedoprovázely velké výrony plazmatu z koróny (CME) směrem k Zemi. Někdy se to tak stává, že méně silné erupce vyprodukují CME a později polární záři viditelnou dobře i ze střední Evropy, jindy ani nejsilnější erupce tohoto 25. cyklu sluneční aktivity skoro nic.',
    },
    {
      category: 'Ze světa',
      author: 'ČTK',
      title: 'Bulharsko a Rumunsko jsou po 13 letech čekání v schengenském prostoru',
      content:
        'Bukurešť/Sofia - Bulharsko a Rumunsko po 13 letech čekání dnes oficiálně vstoupily do schengenského prostoru. Zatím končí kontroly jen na vnitřních vzdušných a námořních hranicích s ostatními členskými zeměmi. Pozemní kontroly zůstávají, což znepokojuje řidiče kamionů, upozornila agentura AFP. Důvodem zachování kontrol na silnicích je veto Rakouska, které se obává přílivu žadatelů o azyl.',
    },
    {
      category: 'Z domova',
      author: 'Karolína Koubová, kbr',
      title: 'Rušení dalších poboček České pošty není na stole, říká manažer. Podle ekonoma je to ale třeba',
      content:
        'Česká pošta se připravuje na transformaci, která má prodělečný státní podnik dostat do černých čísel. Loni už zrušila 300 svých poboček, je potřeba ještě dál redukovat jejich počet? „Jednoznačně ano. Stále máme nejhustší síť poboček v Evropě,“ míní hlavní ekonom Trinity Bank Lukáš Kovanda. „V tuto chvíli nic takového na stole není,“ vyvrací obavy manažer komunikace České pošty Matyáš Vitík.',
    },
    {
      category: 'Ekonomie',
      author: 'ČT24, ČTK, mld',
      title: 'Schodek rozpočtu dosáhl 105 miliard korun, pozitivně se projevila windfall tax',
      content:
        'Schodek státního rozpočtu se v březnu oproti předchozímu měsíci mírně prohloubil na 105 miliard korun. Oproti konci loňského prvního čtvrtletí je zhruba o třetinu nižší, tehdy činil rozdíl mezi výdaji a příjmy státu 166,2 miliardy. Zároveň je to ale stále třetí nejhlubší čtvrtletní deficit v historii samostatného Česka.',
    },
    {
      category: 'Politika',
      author: 'Kamila Pešeková',
      title: 'Slovensko vybíralo prezidenta, ale hlasovalo proti premiérovi Ficovi',
      content:
        'Překvapení pro sebe, pro voliče Slovenska, ale i pro sázkové kanceláře připravil během víkendu bývalý diplomat a prezidentský kandidát Ivan Korčok. V prvním kole voleb slovenské hlavy státu dokázal s relativně výrazným náskokem více než pět procentních bodů porazit favorita a současného šéfa parlamentu Petra Pellegriniho.',
    },
    {
      category: 'Technologie',
      author: 'Tisková zpráva společnosti Profika',
      title: 'Robotizace pomáhá uchovat know-how',
      content:
        'V tuzemském zpracovatelském průmyslu v roce 2021 instalováno 168 robotů na 10 tisíc zaměstnanců. Tato čísla uvádí průzkum International Federation of Robotics. Podle společnosti Profika, která se zabývá vývojem vlastních robotických buněk, je robotizace důležitá i pro menší firmy, které přitom v jejím zavádění zaostávají. Pomáhá nahradit nedostatek pracovníků a umožňuje uchovat zkušenost zaměstnanců s dlouhou praxí.',
    },
    {
      category: 'Zábava',
      author: 'Petr Slavík - (Anarvin)',
      title: 'Oscar 2024: Christopher Nolan ovládl ceny a zapsal se do filmové historie',
      content:
        'Velkou otázkou letošních Oscarů bylo, jestli se to Christopheru Nolanovi konečně povede. Jeho předchozí filmy vygenerovaly dohromady 11 Oscarů a ještě víc nominací. Sám byl už šestkrát nominovaný, za scénář, produkci i režii. Ocenění se mu nicméně vyhýbalo. Vyšlo to až teď, s Oppenheimerem. Za toho dostal hned dvě sošky: Jako producent získal cenu pro nejlepší film roku a byl oceněný za režii.',
    },
    {
      category: 'Sport',
      author: 'Hanka Poskočilová',
      title: 'Hráči odevzdali maximum, ocenil po vyřazení hradecký trenér Tomáš Martinec',
      content:
        'Bookmakeři čtvrtfinále mezi Hradcem Králové a Pardubicemi viděli jako vyrovnanou záležitost a byla. I včerejší pátá bitva. Lvi sice tažení v Enteria Aréně začali rychlým gólem, jenže Dynamo drželo krok a nakonec se po výsledku 3:2 radovalo z postupu. Mysleli si na víc, nakonec pro hradecké zbylo v sezóně osmé místo. Dynamo má zajištěný minimálně bronz. Zdroj: https://hradecka.drbna.cz/sport/hokej/18320-na-lvy-zbyla-v-sezone-osma-pricka.html?utm_source=copy',
    },
  ];

  return (
    <div className="home-page">
      <div className="articles-container">
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <div className="category-info">
              {article.category === 'Astronomie' ? (
                <FontAwesomeIcon icon={faSun} />
              ) : article.category === 'Ze světa' ? (
                <FontAwesomeIcon icon={faGlobe} />
              ) : article.category === 'Z domova' ? (
                <FontAwesomeIcon icon={faHome} />
              ) : article.category === 'Politika' ? (
                <FontAwesomeIcon icon={faLandmark} />
              ) : article.category === 'Technologie' ? (
                <FontAwesomeIcon icon={faMicrochip} />
              ) : article.category === 'Zábava' ? (
                <FontAwesomeIcon icon={faFilm} />
              ) : article.category === 'Sport' ? (
                <FontAwesomeIcon icon={faFutbol} />
              ) : (
                <FontAwesomeIcon icon={faChartLine} />
              )}
              <p className="article-category">{article.category}</p>
            </div>
            <div className="author-info">
              <div className="author-image" style={{ backgroundImage: `url(${userProfileImage})` }}></div>
              <p className="article-author">{article.author}</p>
            </div>
            <Link to="/register" className="article-title-link">
              <h2 className="article-title">{article.title}</h2>
            </Link>
            <p className="article-content">{article.content.slice(0, 150)}...</p> {/* Zkrácený obsah na 150 znaků */}
            <button className="save-button" onClick={() => handleSave(index)}>
              {isArticleSaved(index) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />}
              {isArticleSaved(index) ? ' Uloženo ' : ' Uložit'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;