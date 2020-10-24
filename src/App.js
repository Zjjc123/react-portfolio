import React from 'react';
import './App.css';

import NavBar from './components/Navbar';
import PageRouter from './components/Router';

const App = () => {
    return (
    <div className="App">
      <NavBar />
      <PageRouter />
    </div>
  );
}

export default App;
