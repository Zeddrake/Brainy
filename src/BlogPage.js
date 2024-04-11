import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importujeme ikonu křížku
import './BlogPage.css';

const BlogPage = () => {
  const [posts, setPosts] = useState([
    { author: "Ing. Pavel Urban", date: "20.03.24", title: "Implementace šifrovacích algoritmů pro bezpečnou komunikaci", content: "Dnes jsem se intenzivně zabýval implementací moderních šifrovacích algoritmů pro zajištění bezpečné komunikace v síti. Diskutoval jsem o výhodách asymetrického a symetrického šifrování a o praktických aspektech jejich použití.", comments: [] },
    { author: "PhDr. Barbora Nováková, Ph.D.", date: "19.03.24", title: "Efektivní využití datové analýzy pro predikci tržních trendů", content: "Poslední dobou jsem se intenzivně věnovala efektivnímu využití datové analýzy pro předvídání tržních trendů a chování zákazníků. Diskutovala jsem o využití strojového učení, analýze big data a aplikacích v oblasti marketingu a obchodu.", comments: [] },
    { author: "Dr. Kateřina Krejčí", date: "18.03.24", title: "Inovace v diagnostice a léčbě onkologických onemocnění", content: "V nedávné době jsem se intenzivně zaměřila na inovace v oblasti diagnostiky a léčby onkologických onemocnění. Popsala jsem nejnovější technologické a farmakologické metody a diskutovala o výzvách v oblasti personalizované medicíny.", comments: [] },
    { author: "RNDr. Martin Novotný, CSc.", date: "17.03.24", title: "Vývoj robotických systémů pro průmyslové aplikace", content: "Poslední dobou jsem se intenzivně věnoval vývoji moderních robotických systémů pro průmyslové aplikace. Diskutoval jsem o využití robotiky v automotive, výrobě, logistice a dalších odvětvích a představil nejnovější technologické trendy v oblasti.", comments: [] },
    { author: "Mgr. Lenka Kučerová", date: "16.03.24", title: "Nové přístupy k analýze dat v biomedicíně", content: "Můj nedávný výzkum se zaměřil na nové přístupy k analýze dat v oblasti biomedicíny. Popsala jsem využití bioinformatiky, machine learningu a genetických analýz a diskutovala o významu těchto metod pro výzkum lidského zdraví.", comments: [] },
    { author: "Ing. Petr Šimka", date: "15.03.24", title: "Moderní technologie v energetice a obnovitelných zdrojích", content: "V posledních týdnech jsem se intenzivněji zabýval moderními technologiemi v oblasti energetiky a obnovitelných zdrojů. Diskutoval jsem o využití solární energie, větrných elektráren, bateriových technologií a smart gridů a jejich přínosu pro udržitelný rozvoj.", comments: [] },
    { author: "Prof. Michaela Dostálová", date: "14.03.24", title: "Digitální transformace ve vzdělávání", content: "V nedávné době jsem se soustředila na digitální transformaci ve vzdělávání. Popsala jsem využití moderních technologií, online platforem a e-learningových systémů a diskutovala o výzvách a příležitostech digitalizace vzdělávacího procesu.", comments: [] },
    { author: "Dr. Adam Kučera", date: "13.03.24", title: "Inovace v farmaceutickém průmyslu: Vývoj nových léčiv", content: "Mé nedávné prezentace se týkaly inovací v oblasti farmaceutického průmyslu a vývoje nových léčiv. Diskutoval jsem o výzkumu a vývoji léčiv, klinických studiích a regulačních aspektech farmaceutického trhu.", comments: [] },
    { author: "Ing. Eva Kratochvílová", date: "12.03.24", title: "Využití umělé inteligence pro optimalizaci výrobních procesů", content: "Nedávno jsem se začala zabývat využitím umělé inteligence pro optimalizaci výrobních procesů. Popsala jsem konkrétní aplikace strojového učení, analýzy big data a prediktivní údržby a diskutovala o přínosech pro průmyslovou výrobu.", comments: [] },
    { author: "Prof. Lukáš Navrátil", date: "11.03.24", title: "Budoucnost autonomních vozidel: Technologie a bezpečnost", content: "V posledních týdnech jsem se zabýval budoucností autonomních vozidel z pohledu technologií a bezpečnosti. Diskutoval jsem o vývoji samořídících vozidel, senzorových systémech, umělé inteligenci a právních aspektech autonomní dopravy.", comments: [] },
    { author: "PhDr. Markéta Nováková, Ph.D.", date: "10.03.24", title: "Psychologické aspekty inovací ve firemním prostředí", content: "V poslední době jsem se zaměřila na psychologické aspekty inovací ve firemním prostředí. Diskutovala jsem o podpoře kreativity, motivaci zaměstnanců a strategiích řízení změn pro úspěšnou implementaci inovací.", comments: [] },
    { author: "Mgr. Jan Novák", date: "09.03.24", title: "Vliv klimatických změn na biologickou rozmanitost", content: "Můj nedávný výzkum se zaměřil na vliv klimatických změn na biologickou rozmanitost. Popsal jsem změny v distribuci druhů, ohrožení ekosystémů a strategie ochrany biodiverzity v kontextu současných klimatických změn.", comments: [] }
  ]);

  const [newPost, setNewPost] = useState({ author: '', date: '', title: '', content: '' });
  const [addingPost, setAddingPost] = useState(false); // Stav pro zobrazení formuláře na přidání příspěvku

  const [commentInputs, setCommentInputs] = useState(Array(posts.length).fill('')); // Stav pro pole vstupů komentářů

  const toggleAddingPost = () => {
    setAddingPost(!addingPost);
  };

  const addPost = () => {
    if (newPost.author && newPost.date && newPost.title && newPost.content) {
      setPosts([...posts, { ...newPost, comments: [] }]);
      setNewPost({ author: '', date: '', title: '', content: '' });
      setAddingPost(false); // Zavřít formulář po přidání příspěvku
    }
  };

  

  const toggleFavorite = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].isFavorite = !updatedPosts[index].isFavorite;
    setPosts(updatedPosts);
  };

  const handleCommentChange = (e, index) => {
    const newCommentInputs = [...commentInputs];
    newCommentInputs[index] = e.target.value;
    setCommentInputs(newCommentInputs);
  };

  const addComment = (index) => {
    const updatedPosts = [...posts];
    if (commentInputs[index].trim() !== '') {
      updatedPosts[index].comments.push(commentInputs[index]);
      setPosts(updatedPosts);
      setCommentInputs(Array(posts.length).fill(''));
    }
  };

  const deleteComment = (postIndex, commentIndex) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments.splice(commentIndex, 1);
    setPosts(updatedPosts);
  };

  return (
    <div className="blog-container">
      <div className="post-form">
        {addingPost ? (
          <>
            <h2>Přidat nový příspěvek</h2>
            <input
              type="text"
              placeholder="Autor"
              value={newPost.author}
              onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
            />
            <input
              type="text"
              placeholder="Datum (dd.mm.rr)"
              value={newPost.date}
              onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Název příspěvku"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <textarea
              placeholder="Obsah příspěvku"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            ></textarea>
            <div className="form-buttons">
              <button onClick={addPost} className='add'>Přidat příspěvek</button>
              <button onClick={toggleAddingPost} className='close'>Zavřít</button>
            </div>
          </>
        ) : (
          <button onClick={toggleAddingPost} className="add">Přidat příspěvek</button>
        )}
      </div>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="post-meta">
              <p>Autor: {post.author}</p>
              <p>Datum: {post.date}</p>
            </div>
            <div className="post-actions">
              <button onClick={() => toggleFavorite(index)} className={post.isFavorite ? 'favorite' : ''}>
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
              </button>
              <div className="comment-section">
                <input
                  type="text"
                  value={commentInputs[index]}
                  onChange={(e) => handleCommentChange(e, index)}
                  placeholder="Komentář"
                />
                <button onClick={() => addComment(index)} className="add">Přidat</button>
              </div>
            </div>
            <div className="comments">
              <h4>Komentáře:</h4>
              {post.comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="comment">
                  <p>{comment}</p>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="delete-comment"
                    onClick={() => deleteComment(index, commentIndex)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
