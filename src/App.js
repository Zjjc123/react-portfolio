import React from 'react';
import './styles/App.scss';

import Header from './components/Header';
import PageRouter from './components/Router';

const App = () => {
    return (
    <div className="App">
      <Header />
      <PageRouter />
    </div>
  );
}

export default App;
