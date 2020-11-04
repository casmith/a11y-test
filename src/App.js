import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {

  const [language, setLanguage] = useState(props.language);

  const handleClick = (lang) => {
    setLanguage(lang)
  }

  if (!language) {
    setLanguage("en")
  }

  return (
    <div className="App" role="main" aria-labelledby="foo">
      <h1 id="foo" >{language == "en" ? "Hello" : "Hola"}</h1>
      <button type="button" onClick={ () => handleClick("en") }>en</button>
      <button type="button" onClick={ () => handleClick("es") }>es</button>
      <div>{language === 'en' ? 'The language is english' : 'The language is spanish'}</div>
    </div>
  );
}

export default App;
