import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import PageRouter from './components/Router';

import gsap from 'gsap';
import Navigation from './components/Navigation';

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    })
  }
}

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce (function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize);
    gsap.to('body', 0, { css: { visibility: "visible" } });

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    }    
  })
  return (
    <>
      <Header />
      <div className="App">
        <PageRouter />
      </div>
      <Navigation />
    </>
  );
}

export default App;
