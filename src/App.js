import React, { useEffect } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import PageRouter from './components/Router';

import gsap from 'gsap';

const App = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to('body', 0, { css: { visibility: "visible" } });
  })
  return (
    <div className="App">
      <Header />
      <PageRouter />
    </div>
  );
}

export default App;
