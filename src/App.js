import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import './App.css';
import Navigation from './Navigation'; 
import HomePage from './HomePage'; 
import BlogPage from './BlogPage'; 
import IdeasPage from './IdeasPage'; 
import AboutPage from './AboutPage'; 
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Copyright from './Copyright'; 

function App() {
  const handleLogin = (username) => {
    console.log(`Uživatel ${username} byl úspěšně přihlášen.`);
  };

  return (
    <Router>
      <div className="App">
        <Navigation /> 
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/ideas">
            <IdeasPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <LoginForm onLogin={handleLogin} /> {/* Předání funkce handleLogin */}
          </Route>
          <Route path="/register">
            <RegistrationForm /> 
          </Route>
          <Redirect to="/about" /> 
        </Switch>
        <Copyright /> 
      </div>
    </Router>
  );
}

export default App;
